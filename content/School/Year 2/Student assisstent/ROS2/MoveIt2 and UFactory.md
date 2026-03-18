---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
  - operating-systems/linux/ubuntu
  - programming-languages/ROS
publish: "false"
---
# Prerequisites
- ROS2 [Jazzy](https://docs.ros.org/en/ros2_documentation/jazzy/Installation.html)
# Getting started 
## Installation
Install the needed packages. This might take some time
```bash
# Source ROS2 jazzy
source /opt/ros/jazzy/setup.bash

# Install rosdep for systemdependencies
sudo apt install python3-rosdep

# Make sure all packages are up to date
sudo rosdep init
rosdep update
sudo apt update
sudo apt dist-upgrade

# Install Colcon for ROS2
sudo apt install python3-colcon-common-extensions
sudo apt install python3-colcon-mixin
colcon mixin add default https://raw.githubusercontent.com/colcon/colcon-mixin-repository/master/index.yaml
colcon mixin update default

# Install vcstool
sudo apt install python3-vcstool
```

## Create a workspace for moveit2 tutorials and testing
```bash
# Create workspace
mkdir -p ~/ws_moveit/src

# Import tutorials
cd ~/ws_moveit/src
git clone -b main https://github.com/moveit/moveit2_tutorials

# Download the rest of the moveit sourcecode
vcs import --recursive < moveit2_tutorials/moveit2_tutorials.repos
```

## Build and setup the colcon workspace
Reinstall moveit2 first. keep in mind that **building the workspace will take around 20 minutes**.
```bash
# Remove any old binaries first - Removed because xarm needs this
#sudo apt remove ros-$ROS_DISTRO-moveit*

# Install all dependencies into the workspace, plus moveit
sudo apt update && rosdep install -r --from-paths . --ignore-src --rosdistro $ROS_DISTRO -y

# Configure your colcon workspace
cd ~/ws_moveit
colcon build --mixin release

# Source the workspace
source ~/ws_moveit/install/setup.bash
```

# Writing a c++ moveit package
Firstly you need to create a c++ package with the right dependencies:
```bash
# cd into the workspace
cd ~/ws_moveit/src

# Create the right package
ros2 pkg create  --build-type ament_cmake  --dependencies moveit_ros_planning_interface rclcpp  --node-name node_name package_name
```

The dependencies will add the right deps to the `package.xml` and `CMakelist.txt`.

## Code example
Insert this boilerplate code:
```c++
#include <memory>

#include <rclcpp/rclcpp.hpp>
#include <moveit/move_group_interface/move_group_interface.hpp>

int main(int argc, char * argv[])
{
  // Initialize ROS and create the Node
  rclcpp::init(argc, argv);
  auto const node = std::make_shared<rclcpp::Node>(
    "hello_moveit",
    rclcpp::NodeOptions().automatically_declare_parameters_from_overrides(true)
  );

  // Create a ROS logger
  auto const logger = rclcpp::get_logger("hello_moveit");

  // Next step goes here

  // Shutdown ROS
  rclcpp::shutdown();
  return 0;
}
```

To run this code, open a terminal and enter:
```bash
cd ~/ws_moveit/
colcon build --mixin debug
source install/setup.bash
ros2 run package_name node_name
```
It should just run and exit without any errors

### Planning and executing using MoveGroupInterface
In the previous step, there is a part in the code that says `Next step goes here`. Insert this piece of code there:
```cpp
// Create the MoveIt MoveGroup Interface
using moveit::planning_interface::MoveGroupInterface;
auto move_group_interface = MoveGroupInterface(node, "manipulator");

// Set a target Pose
auto const target_pose = []{
  geometry_msgs::msg::Pose msg;
  msg.orientation.w = 1.0;
  msg.position.x = 0.28;
  msg.position.y = -0.2;
  msg.position.z = 0.5;
  return msg;
}();
move_group_interface.setPoseTarget(target_pose);

// Create a plan to that target pose
auto const [success, plan] = [&move_group_interface]{
  moveit::planning_interface::MoveGroupInterface::Plan msg;
  auto const ok = static_cast<bool>(move_group_interface.plan(msg));
  return std::make_pair(ok, msg);
}();

// Execute the plan
if(success) {
  move_group_interface.execute(plan);
} else {
  RCLCPP_ERROR(logger, "Planning failed!");
}
```

To examine this code:

Firstly, a move group interface is made, which then targets the move group “manipulator”.
```c++
using moveit::planning_interface::MoveGroupInterface;
auto move_group_interface = MoveGroupInterface(node, "manipulator");
```

After that, it sets a move target pose and passes it on to the move group interface. Note that lambas are used in this example to simplify the declaration. Many c++ codebases do this.
```c++
auto const target_pose = []{
  geometry_msgs::msg::Pose msg;
  msg.orientation.w = 1.0;
  msg.position.x = 0.28;
  msg.position.y = -0.2;
  msg.position.z = 0.5;
  return msg;
}();
move_group_interface.setPoseTarget(target_pose);

auto const [success, plan] = [&move_group_interface]{
  moveit::planning_interface::MoveGroupInterface::Plan msg;
  auto const ok = static_cast<bool>(move_group_interface.plan(msg));
  return std::make_pair(ok, msg);
}();
```

Finally, the plan is executed if the planning was successful.
```cpp
if(success) {
  move_group_interface.execute(plan);
} else {
  RCLCPP_ERROR(logger, "Planning failed!");
}
```

## Using the xarm_planner package
Now this solution is REALLY hacky and should be optimized in the future, but for now this will suffice.

>[!important]
>Your package should be inside the workspace that houses the xarm nodes

In your `.ccp` code file, add:
```cpp
#include <xarm_planner/xarm_planner.h>
```

Inside your `CMakeList.txt`, add:
```cmake
# find dependencies
find_package(rclcpp REQUIRED)
find_package(ament_cmake REQUIRED)
find_package(xarm_planner REQUIRED)
find_package(moveit_ros_planning_interface REQUIRED)
find_package(xarm_msgs REQUIRED)

add_executable(lite6_control src/lite6_control.cpp)

target_include_directories(lite6_control PUBLIC
  $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
  $<INSTALL_INTERFACE:include/${PROJECT_NAME}>
  ~/ufactory_ws/install/xarm_planner/include # THIS SHOULD BE THE PATH IN YOUR WORKSPACE
  )

target_compile_features(lite6_control PUBLIC c_std_99 cxx_std_17)  # Require C99 and C++17
ament_target_dependencies(
  lite6_control
  rclcpp
  xarm_planner
  moveit_ros_planning_interface
  xarm_msgs
)
```

Inside the `package.xml`, add:
```xml
<depend>rclcpp</depend>
<depend>xarm_planner</depend>
<depend>moveit_ros_planning_interface</depend>
<depend>xarm_msgs</depend>
```

Now you should be able to use the library, look at the xarm_planner examples in the `test` folder for how you should code it. it differs a bit from the standard moveit way.