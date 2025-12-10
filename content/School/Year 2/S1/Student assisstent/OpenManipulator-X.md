---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
---
OMX info was found [here](https://emanual.robotis.com/docs/en/platform/openmanipulator_x/quick_start_guide/)

Okay so, open manipulator *is* possible to run with move-It, but i just have to mess around a bit to find out how to install and run it.

# Hardware
You will need a power supply and a controller. The one that i use are the U2D2 power hub and controller.
# Installation
As per the [OpenManipulator-X docs](https://emanual.robotis.com/docs/en/platform/openmanipulator_x/quick_start_guide/#install-ros-on-pc), OMX should work with `ROS2 jazzy`.
## ROS2 packages
Before you can install the ROS2 packages, the machine’s user needs to be able to communicate with the hardware. This is achieved by adding the user to the dial-out group. A log-out and log-in is required after.
```bash
sudo usermod -aG dialout $USER
```

Now the workspace will be made, dependencies installed, and the package will be built.
```bash
# Create workspace
mkdir -p ros2_ws/src
cd ~/ros2_ws/src

# Install ROS2 depencencies
git clone -b jazzy https://github.com/ROBOTIS-GIT/DynamixelSDK.git && \
  git clone -b jazzy https://github.com/ROBOTIS-GIT/dynamixel_interfaces.git && \
  git clone -b jazzy https://github.com/ROBOTIS-GIT/dynamixel_hardware_interface.git && \
  git clone -b jazzy https://github.com/ROBOTIS-GIT/open_manipulator.git

# Build the workspace  
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source ~/ros2_ws/install/setup.bash
```
