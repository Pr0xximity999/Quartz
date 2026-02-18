---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
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
# Remove any old binaries first
sudo apt remove ros-$ROS_DISTRO-moveit*

# Install all dependencies into the workspace, plus moveit
sudo apt update && rosdep install -r --from-paths . --ignore-src --rosdistro $ROS_DISTRO -y

# Configure your colcon workspace
cd ~/ws_moveit
colcon build --mixin release

# Source the workspace
source ~/ws_moveit/install/setup.bash
```

