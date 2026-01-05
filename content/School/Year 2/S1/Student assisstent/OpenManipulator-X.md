---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
---
OMX info was found [here](https://emanual.robotis.com/docs/en/platform/openmanipulator_x/quick_start_guide/)

Okay so, open manipulator *is* possible to run with move-It, but i just have to mess around a bit to find out how to install and run it.

# Hardware and software
The power supply and controller interface that will be used is the `U2D2` connector. For the software, `ROS2 Jazzy` and `MoveIt!` will be used.
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

## Bashrc settings and udev rules
finally you will need to access the commands in the terminal without much hassle. This is why there needs to be stuff added to the `.bashrc` file. Run this command to append it to `.bashrc`. 

```
echo "source /opt/ros/${ROS_DISTRO}/setup.bash" >> ~/.bashrc && \
  echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc && \
  echo "alias cb='colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release'" >> ~/.bashrc
source ~/.bashrc
```

Apply udev rules to change the USB latency to 1ms:
```
ros2 run open_manipulator_bringup om_create_udev_rules
```


# Controlling the arm
For controlling you have two options, which each two sub-options: Using `U2D2` or `OpenCR` as the communication interface, and using either `Docker` or a `Linux Host` installation.

`U2D2` with `Linux` will be used for this project.

By default, USB latency on Linux is set to 16ms, but the robot needs 1ms. The previous command should have changed it and can be verified by running the following command (This should return the number `1`).
```bash
cat /sys/bus/usb-serial/devices/ttyUSB0/latency_timer
```

## Starting the arm
To start the arm, make sure it stands in the following position. Failing to do this might result in the robot not starting.
![[Vault-data/Attachments/OpenManipulator-X robot arm.png]]

After making sure it is in the right position, you have to run:
```bash
ros2 launch open_manipulator_bringup open_manipulator_x.launch.py
```

## Updating the dynamixel firmware
This did not work for me, so i will install the [`Dynamixel Wizard 2.0`](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/) software to try and update the robot firmware.

Open up the dynamixel wizard and scan the devices that are connected by hitting the `scan` button. Every device in the list with an asterix `*` have a firmware update that can be installed.

Follow [these](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/#firmware-update) steps to update the firmware.

Updating the firmware did not work, so i will look at the logs the command puts out.

As it turned out the logs told me i missed some packages, which i installed.
```bash
sudo apt install ros-jazzy-ros2-controllers
sudo apt install ros-jazzy-joint-trajectory-controller
```

It now properly starts.

The arm can now be controlled by running:
```bash
ros2 run open_manipulator_teleop open_manipulator_x_teleop
```

# Launch moveit
First install moveIt by running 
```bash
sudo apt install ros-humble-moveit
```

Then, launch moveit (after starting the arm) by running:
```bash
ros2 launch open_manipulator_moveit_config open_manipulator_x_moveit.launch.py
```

# Launch gazebo
**Terminal 1**
```bash
ros2 launch open_manipulator_bringup open_manipulator_x_gazebo.launch.py
```

**Terminal 2**
```bash
ros2 launch open_manipulator_moveit_config open_manipulator_x_moveit.launch.py use_sim:=true
```

**Terminal 3**
```bash
ros2 launch open_manipulator_gui open_manipulator_x_gui.launch.py
```
