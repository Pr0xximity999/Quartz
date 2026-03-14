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

### Location
Inside the `src/xarm_ros2/xarm_planner` package, add a new cpp file with any name you’d like, like `lite6_control`.

### Code
In your `.ccp` code file, add:
```cpp
#include <xarm_planner/xarm_planner.h>
```

This adds the capabilitiy to control the arm using the `xarm_planner` code.

As an example on how to create a working code file, take a look at the following codeblock:
```cpp
#include "xarm_planner/xarm_planner.h"

void exit_sig_handler(int signum)
{
  fprintf(stderr, "[lite6_control] Ctrl-C caught, exit process...\n");
  exit(-1);
}

int main(int argc, char *argv[])
{
  // Initialize ROS and create the Node
  rclcpp::init(argc, argv);
  rclcpp::NodeOptions node_options;
  node_options.automatically_declare_parameters_from_overrides(true);
  std::shared_ptr<rclcpp::Node> node = rclcpp::Node::make_shared("lite6_control");
  RCLCPP_INFO(node->get_logger(), "lite6_control start");

  signal(SIGINT, exit_sig_handler);

  // Create a ROS logger
  auto const logger = rclcpp::get_logger("lite6_control");

  std::string group_name = "lite6";

  // Log
  RCLCPP_INFO(node->get_logger(), "namespace: %s, group_name: %s", node->get_namespace(), group_name.c_str());
  RCLCPP_INFO(node->get_logger(), "Initialising planner");

  xarm_planner::XArmPlanner planner(node, group_name);

  RCLCPP_INFO(node->get_logger(), "Setting target poses");

  geometry_msgs::msg::Pose target_pose1;
  target_pose1.position.x = 0.3;
  target_pose1.position.y = -0.1;
  target_pose1.position.z = 0.2;
  target_pose1.orientation.x = 1;
  target_pose1.orientation.y = 0;
  target_pose1.orientation.z = 0;
  target_pose1.orientation.w = 0;

  RCLCPP_INFO(node->get_logger(), "Starting planning!");
  while (rclcpp::ok())
  {
    // Plan and execute new position
    planner.planPoseTarget(target_pose1);
    planner.executePath();
  }

  // Shutdown ROS
  rclcpp::shutdown();
  return 0;
}
```

### Compiling
Inside the xarm_planner’s `CMakeList.txt`, add this to the list of other executable adds, after the `add_library`:
```cmake
add_executable(lite6_control src/lite6_control.cpp)
ament_target_dependencies(lite6_control
  ${dependencies}
)
target_link_libraries(lite6_control 
  xarm_planner
  ${ament_LIBRARIES}
)
```

### Launch file
To run the code correctly, the launch file from the xarm_planner test program will be copied and slightly modified.

Inside `xarm_planner/launch`, create a file called `lite6_control.launch.py` and add the following code:
```python
import json
from launch import LaunchDescription
from launch.actions import OpaqueFunction
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution
from launch_ros.substitutions import FindPackageShare


def launch_setup(context, *args, **kwargs):
    node_executable = 'lite6_control'
    node_parameters = {}

    # robot planner launch
    # xarm_planner/launch/_robot_planner.launch.py
    robot_planner_node_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(PathJoinSubstitution([FindPackageShare('xarm_planner'), 'launch', '_robot_planner.launch.py'])),
        launch_arguments={
            'node_executable': node_executable,
            'node_parameters': json.dumps(node_parameters)
        }.items(),
    )

    return [
        robot_planner_node_launch
    ]

def generate_launch_description():
    return LaunchDescription([
        OpaqueFunction(function=launch_setup)
    ])
```

### Running
Now build the workspace, source it, and run:
```bash
ros2 launch xarm_planner lite6_control.launch.py
```

Don’t forget to start the robot arm with:
```
ros2 launch xarm_planner xarm6_planner_fake.launch.py [add_gripper:=true]
```