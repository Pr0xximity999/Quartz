---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
  - operating-systems/linux/ubuntu
  - programming-languages/ROS
  - school/cpp
publish: "true"
---
>[!important] Sources
>- [Create a simple ROS2 client and server node](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Service-And-Client.html)
>- [Create a simple ROS2 interface](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Custom-ROS2-Interfaces.html)

# Setup workspace
**Create workspace**
```bash
mkdir -r ~/cpp_ws/src
cd ~/cpp_ws/src
```

**Create package**
Add other dependencies if needed
```bash
ros2 pkg create --build-type ament_cmake <PACKAGE_NAME> --dependencies rclcpp
```

**Update `package.xml`**
```xml
<description>Description of the package<description>
<maintainer email="you@email.com">Your Name</maintainer>
<license>Apache-2.0</license>
```

# Code snippets

## Initialize Ros Client Library
```c++
int main(int argc, char **argv)
{
    rclcpp::init(argc, argv);
}
```

## Logging
**Log info**
```c++
RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "text");
```

**Log warning**
```c++
RCLCPP_WARN(rclcpp::get_logger("rclcpp"), "text");
```

**Log error**
```c++
RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "text");
```



## Nodes, Services and Topics
**Create node**
A [node](https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html) is responsible for a single (modular) purpose. It will host message publishers/subscribers and service service/clients.
```c++
std::shared_ptr<rclpp::Node> node = rclpp::Node::make_shared("node_name");
```

### Service
**Create a node service server function**
The request and response parameters are important on this one!
```c++
void function(const std::shared_ptr<INTERFACE_CLASS> request,
	const std::shared_ptr<INTERFACE_CLASS> response){}
```

**Create a node service (service server)**
A [service](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html) server is a way to make a function available for other nodes on the network. 
```c++
rclcpp::Service<INTERFACE_CLASS>::SharedPtr service =
	node->create_service<INTERFACE_CLASS>("service_name", &function_name)
```

**Create client for a node (service client)**
A [service](https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Services/Understanding-ROS2-Services.html) client talks to a service server trough a service name using its and interface type for message formats.
```c++
rclcpp::Client<INTERFACE_CLASS>::SharedPtr client 
	= node->create_client<INTERFACE_CLASS>("service_name");
```

**Send service requests**
```c++
auto request = std::make_shared<INTERFACE_CLASS>(); 
auto result = client->async_send_request(request);
```
#### Waiting
**Client wait for server to start**
```c++
using namespace std::chrono_literals;
while(!client->wait_for_service(1s))
{
	// Do stuff
}
```

**Wait for server response**
```c++
if (rclcpp::spin_until_future_complete(node, result) == rclcpp::FutureReturnCode::SUCCESS)
{
	// Do stuff
}
```
