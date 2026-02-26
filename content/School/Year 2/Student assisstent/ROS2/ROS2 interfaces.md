---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
  - operating-systems/linux/ubuntu
  - programming-languages/ROS
publish: "true"
---
>[!important] Sources
>- [Custom ROS2 Interfaces](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Custom-ROS2-Interfaces.html)

# Create package and correct folders
This assumes you have created a [workspace](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html) and are currently `cd`-ed into it.
```bash
ros2 pkg create --build-type ament_cmake --license Apache-2.0 interfaces
cd src/interfaces
mkdir msg srv
```

# Creating and building the interfaces
## Create message and service interfaces
Inside `workspace/src/interface_package_name/msg`, you can create message interfaces. The file needs to be called `message_name.msg`.

The structure of the file is as follows:
```
datatype name
datatype name
etc...

---EXAMPLE---
in64 num
float32 value
```

You can also add interface types from other packages:
```
geometry_msgs/Point center
float64 radius
```

Same with services: put it inside `workspace/src/interface_package_name/srv`. The file needs to be called `service_name.srv`.

The structure of the file has two sections compared to a message interface:
```
<input datatypes>
---
<output datatypes>

---EXAMPLE---
int64 a
int64 b
int64 c
---
int64 num
```

The top part will turn into the `Request` object and the bottom part will become the `Response` object.
## Add interfaces to `CMakelist.txt`
The CMakelist needs both the external interfaces used and the `rosidl_default_generators` package, which is used to turn the interfaces into language-specific code so it can actually be used.

```cmake
find_package(geometry_msgs REQUIRED)
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "msg/Sphere.msg"
  "msg/message_name.msg"
  "srv/service_name.srv"
  DEPENDENCIES geometry_msgs # Add packages that above messages depend on, in this case geometry_msgs for Sphere.msg
)
```

## Add dependencies to `package.xml`
The following lines need to be added for the package dependencies to be correctly imported when building the project:
```xml
<depend>geometry_msgs</depend>
<buildtool_depend>rosidl_default_generators</buildtool_depend>
<exec_depend>rosidl_default_runtime</exec_depend>
<member_of_group>rosidl_interface_packages</member_of_group>
```

## Build and source the package
```bash
colcon build --packages-select interfaces
source install/setup.bash
```

# Showing interfaces
```bash
ros2 interface show interfaces/msg/message_name
```

```bash
ros2 interface show interfaces/srv/service_name
```


# Using interfaces in C++
To use it inside your C++ code, add:
```c++
#include "interfaces/msg/message_name.hpp"
#include "interfaces/srv/service_name.hpp"

// Examples of using interface
auto message = interfaces::msg::message_name();
rclcpp::Publisher<interfaces::msg::message_name>::SharedPtr publisher;

void add(const std::shared_ptr<tutorial_interfaces::srv::service_name::Request> request,
	std::shared_ptr<interfaces::srv::service_name::Response> response)
{
	// Do stuff
}

std::shared_ptr<rclcpp::Node> node = 
	rclcpp::Node::make_shared("client_name")
  rclcpp::Client<interfaces::srv::service_name>::SharedPtr client =
	  node->create_client<interfaces::srv::service_name>("service_name"); 
```

## `CMAkelist.txt`
Example of what to add to `CMakelist.txt`:
```cmake
find_package(interfaces REQUIRED)

add_executable(talker src/publisher_member_functions.cpp) # Example
ament_target_dependencies(interfaces)
```

## `package.xml`
Add this to `package.xml`:
```xml
<depend>interfaces</depend>
```

After adding all this, rebuild the package and it should all work.