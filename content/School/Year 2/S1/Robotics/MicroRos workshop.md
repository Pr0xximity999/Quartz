---
tags:
  - school/robot-fleet
  - operating-systems/linux
  - programming-languages/ROS
  - taal/engels
  - language/english
publish: "true"
---
> **MicroROS**: a framework for embedded and deep-embedded robot components with extremely constrained computational resources

MicroROS is connected over 45g/wifi/ethernet to connect it up to the main ros network. While [[School/Year 2/S1/Robotics/Introduction ROS2|ROS]] runs on a single board computer or laptop, MicroROS runs on microcontrollers, which listen to topics it’s subscribed to via the ROS2 Agent.

One advantage of using MicroROS controllers over one singular big controller, is separation-of-concerns. Every microcontroller does only waht it needs to do and if a microcontroller gets overloaded and blows up, your main controller will stay unharmed.

# MicroROS architecture
![[Vault-data/Attachments/MicroRos workshop architecture.png]]

MicroROS using the Arduino package is only supported by a limited number of hardware. Using [[School/Year 2/S1/Operating Systems/FreeRTOS|FreeRTOS]] will give you availability on nearly any board on the planet, but it does miss some pre-done architecture steps (as shown in the image).


# Using MicroROS
`ros2 run micro_ros_agent micro_ros_agent serial --dev /de/ttyUSB0` will run the MicroROS agent, listening on `ttyUSB0`.

# Installing MicroROS
If you use Arduino IDE, use https://github.com/micro-ROS/micro_ros_arduino

If you use any platform-io supporting IDE (VsCode, CLion…), use https://github.com/micro-ROS/micro_ros_platformio
