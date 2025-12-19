---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
---
Gazebo is software that can be used to test real-life hardware in a simulated environment.

# Installing gazebo
Gazebo can be installed independently or with ROS.

```bash
sudo apt-get install ros-${ROS_DISTRO}-ros-gz
```

# Installing the Ufactory xarm software

# Prerequisites
- ROS2 [Jazzy](https://docs.ros.org/en/ros2_documentation/jazzy/Installation.html)
- [Moveit2](https://moveit.ros.org/install-moveit2/binary/)
- [Gazebo](https://gazebosim.org/docs/harmonic/install_ubuntu/)

## Installing ufactory-xarm-ros2
```bash
# Skip this step if you already have a target workspace
cd ~
mkdir -p dev_ws/src
```

```bash
# Remember to source ros2 environment settings first
cd ~/dev_ws/src
git clone https://github.com/xArm-Developer/xarm_ros2.git --recursive -b jazzy
git pull --recurse-submodules
```

```bash
cd ~/dev_ws/src/
rosdep update
rosdep install --from-paths . --ignore-src --rosdistro jazzy -y
```


right now this command gives the error:
```bash
xarm_gazebo: Cannot locate rosdep definition for [sdformat14]
```

even though libsdformat14 is installed, so i will have to figire that out