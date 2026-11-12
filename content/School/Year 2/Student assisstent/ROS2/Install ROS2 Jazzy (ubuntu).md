---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
  - operating-systems/linux/ubuntu
  - personal-project/linux
---

```bash
# Set locales
locale  # check for UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

locale  # verify settings

# Enable required repositories
sudo apt install software-properties-common
sudo add-apt-repository universe

sudo apt update && sudo apt install curl -y
export ROS_APT_SOURCE_VERSION=$(curl -s https://api.github.com/repos/ros-infrastructure/ros-apt-source/releases/latest | grep -F "tag_name" | awk -F\" '{print $4}')
curl -L -o /tmp/ros2-apt-source.deb "https://github.com/ros-infrastructure/ros-apt-source/releases/download/${ROS_APT_SOURCE_VERSION}/ros2-apt-source_${ROS_APT_SOURCE_VERSION}.$(. /etc/os-release && echo ${UBUNTU_CODENAME:-${VERSION_CODENAME}})_all.deb"
sudo dpkg -i /tmp/ros2-apt-source.deb

# Install devtools for ros
sudo apt update && sudo apt install ros-dev-tools

# Install ROS jazzy
sudo apt update && sudo apt upgrade
sudo apt install ros-jazzy-desktop

# Install correct RMW implementation
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp # Add to bashrc

# Sources the ros commands
source /opt/ros/jazzy/setup.bash # Add to bashrc
```