---
tags:
  - school/student-assistent
  - operating-systems/linux/ubuntu
  - programming-languages/ROS
  - taal/engels
  - language/english
---
>[!note] Source
>- https://docs.ros.org/en/jazzy/p/zenoh_bridge_dds/
# Prerequisites
- ROS2 [Jazzy](https://docs.ros.org/en/ros2_documentation/jazzy/Installation.html)
- [rosdep](https://docs.ros.org/en/jazzy/Tutorials/Intermediate/Rosdep.html)

# Installation
```bash
# Install cyclone DDS
sudo apt install ros-jazzy-rmw-cyclonedds-cpp
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp # Add this to bashrc

# Install zenoh
sudo apt install ros-jazzy-rmw-zenoh-cpp
```