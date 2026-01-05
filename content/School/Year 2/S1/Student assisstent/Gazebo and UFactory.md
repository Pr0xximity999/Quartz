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

# Installing ufactory-xarm-ros2
```bash
# Skip this step if you already have a target workspace
cd ~
mkdir -p dev_ws/src
```

```bash
# Remember to source ros2 environment settings first
cd ~/dev_ws/src
git clone https://github.com/xArm-Developer/xarm_ros2.git --recursive -b jazzy
cd ~/dev_ws/src/xarm_ros2
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

>[!note]
>As found [here](https://answers.ros.org/question/320734/), `rosdep` looks for packages that are inside the `package.xml` dependencies section and installs them.  Some packages have “key” names that refer to a specific package, like `sdformat14` referring to `libsdformat14`. 
>For some reason, `libsdformat14` cannot be installed or found in any way, and thus fails.
>The `xarm_gazebo` package requires `sdformat14`.

Ignore it and move on.

# Building
```bash
# Remember to source ros2 and moveit2 environment settings first
cd ~/dev_ws/
# build all packages
colcon build

# build selected packages
colcon build --packages-select xarm_api

source install/setup.bash
```

# Running
>[!important]
>Make sure `ros-jazzy-gz-ros2-control` is installed


```bash
cd ~/dev_ws/
source install/setup.bash
ros2 launch xarm_moveit_config uf850_moveit_gazebo.launch.py
```
