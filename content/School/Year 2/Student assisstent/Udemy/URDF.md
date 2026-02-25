---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
publish: true
---
# Create workspace
```bash
mkdir -p ~/tutorial_ws/src
cd ~/tutorial_ws
colcon build
source ~/tutorial_ws/install/setup.bash
ros2 pkg create tutorial_description
cd tutorial_description
rm -r include/ src/
mkdir urdf launch rviz
```

# Edit CmakeList.txt
```cmake
cmake_minimum_required(VERSION 3.8)

project(tutorial_description)

  

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")

add_compile_options(-Wall -Wextra -Wpedantic)

endif()

  

# find dependencies

find_package(ament_cmake REQUIRED)

  

install(

DIRECTORY launch rviz urdf

DESTINATION share/${PROJECT_NAME}

)

  

ament_package()
```

```bash
cd ~/tutorial_ws/
colcon build
```

# Create urdf

## Base link
```xml
<?xml version="1.0"?>
<robot  name="tutorial_robot">
    
    <material name="grey">
        <color rgba="0.5 0.5 0.5 1"/>
    </material>

    <link name="base_link">
        <visual>
            <geometry>
                <box size="0.4 0.4 0.1"/>
            </geometry>
            <origin xyz="0 0 0 " rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
    </link>

</robot>
```

```bash
sudo apt install ros-jazzy-urdf-tutorial
```

```bash
ros2 launch urdf_tutorial display.launch.py model:=/home/rens/tutorial_ws/src/tutorial_description/urdf/arm.urdf 
```

## First joint
>[!info] 5 step process
>1. Add the link with all origins to 0
>2. Add a joint to create a parent child relation with origins to 0
>3. Fix the joint origin
>4. Set joint type and axis
>5. Fix the visual origin if needed

>[!important]
>Doing one joint at a time makes your urdf less prone to errors.

```xml
<?xml version="1.0"?>
<robot  name="tutorial_robot">
    
    <material name="grey">
        <color rgba="0.5 0.5 0.5 1"/>
    </material>

    <material name="blue">
        <color rgba="0 0 0.5 1"/>
    </material>

    <link name="base_link">
        <visual>
            <geometry>
                <box size="0.4 0.4 0.1"/>
            </geometry>
            <origin xyz="0 0 0.05 " rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
    </link>

    <link name="shoulder_link">
        <visual>
            <geometry>
                <cylinder length="0.5" radius="0.1"/>
            </geometry>
            <origin xyz="0 0 0" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>
    </link>

    <joint name="joint1" type="revolute">
        <parent link="base_link"/>
        <child link="shoulder_link"/>
        <origin xyz="0 0 0" rpy="0 0 0"/>
        <axis xyz="1 0 0"/>
        <limit effort="1000.0" velocity="1.0" lower="-3.14" upper="3.14"/>
    </joint>
</robot>
```

```bash
ros2 launch urdf_tutorial display.launch.py model:=/home/rens/tutorial_ws/src/tutorial_description/urdf/arm.urdf 
```

Move joint 1 origin up to match base link, change rotation axis to z, move first joint up by half its height.

# Joint 2 - 6
>[!important]
>The joint origin is relative to its parent, not the world.

```xml
<?xml version="1.0"?>
<robot  name="tutorial_robot">
    
    <material name="grey">
        <color rgba="0.5 0.5 0.5 1"/>
    </material>

    <material name="blue">
        <color rgba="0 0 0.5 1"/>
    </material>


    <link name="base_link">
        <visual>
            <geometry>
                <box size="0.4 0.4 0.1"/>
            </geometry>
            <origin xyz="0 0 0.05 " rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
    </link>

    <link name="shoulder_link">
        <visual>
            <geometry>
                <cylinder length="0.5" radius="0.1"/>
            </geometry>
            <origin xyz="0 0 0.25" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>
    </link>

    <link name="arm_link">
        <visual>
            <geometry>
                <cylinder length="0.6" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.3" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
    </link>

    <link name="elbow_link">
        <visual>
            <geometry>
                <cylinder length="0.1" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.05" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>
    </link>

    <link name="forearm_link">
        <visual>
            <geometry>
                <cylinder length="0.5" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.25" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
    </link>

    <link name="wrist_link">
        <visual>
            <geometry>
                <box size="0.1 0.1 0.05"/>
            </geometry>
            <origin xyz="0 0 0.025" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>    
    </link>

    <link name="hand_link">
        <visual>
            <geometry>
                <box size="0.1 0.1 0.02"/>
            </geometry>
            <origin xyz="0 0 0.01" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>    
    </link>

    <link name="tool_link"/>


    <joint name="joint1" type="revolute">
        <parent link="base_link"/>
        <child link="shoulder_link"/>
        <origin xyz="0 0 0.1" rpy="0 0 0"/>
        <axis xyz="0 0 1"/>
        <limit lower="-3.14" upper="3.14" effort="1000.0" velocity="1.0"/>
    </joint>
    
    <joint name="joint2" type="revolute">
        <parent link="shoulder_link"/>
        <child link="arm_link"/>
        <origin xyz="0 0 0.50" rpy="0 0 0"/>
        <axis xyz="0 1 0"/>
        <limit lower="0" upper="2.5" effort="1000.0" velocity="1.0"/>
    </joint>

    <joint name="joint3" type="revolute">
        <parent link="arm_link"/>
        <child link="elbow_link"/>
        <origin xyz="0 0 0.6" rpy="0 0 0"/>
        <axis xyz="0 1 0"/>
        <limit lower="0" upper="2.5" effort="1000.0" velocity="1.0"/>
    </joint>
    
    <joint name="joint4" type="revolute">
        <parent link="elbow_link"/>
        <child link="forearm_link"/>
        <origin xyz="0 0 0.1" rpy="0 0 0"/>
        <axis xyz="0 0 1"/>
        <limit lower="-3.14" upper="3.14" effort="1000.0" velocity="1.0"/>
    </joint>

    <joint name="joint5" type="revolute">
        <parent link="forearm_link"/>
        <child link="wrist_link"/>
        <origin xyz="0 0 0.5" rpy="0 0 0"/>
        <axis xyz="0 1 0"/>
        <limit lower="-1.57" upper="1.57" effort="1000.0" velocity="1.0"/>
    </joint>

    <joint name="joint6" type="continuous">
        <parent link="wrist_link"/>
        <child link="hand_link"/>
        <origin xyz="0 0 0.05" rpy="0 0 0"/>
        <axis xyz="0 0 1"/>
    </joint>

    <joint name="hand_tool_joint" type="fixed">
        <parent link="hand_link"/>
        <child link="tool_link"/>
        <origin xyz="0 0 0.02" rpy="0 0 0"/>            
    </joint>
</robot>
```

# Xacro
Xacro makes urdfs able to be spread across files.

Create file `tutorial_robot.urdf.xacro` and `common_properties.xacro`. Rename `arm.urdf` to `arm.xacro`

Tutorial robot:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<robot name="tutorial_robot" xmlns:xacro="http://www.ros.org/wiki/xacro">
    <xacro:include filename="common_properties.xacro"/>
    <xacro:include filename="arm.xacro"/>
</robot>
```

common properties:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro">
    <material name="grey">
        <color rgba="0.5 0.5 0.5 1"/>
    </material>

    <material name="blue">
        <color rgba="0 0 0.5 1"/>
    </material>
</robot>
```

Arm (top of the file):
```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro">
```

New launch command:
```bash
ros2 launch urdf_tutorial display.launch.py model:=/home/rens/tutorial_ws/src/tutorial_description/urdf/tutorial_robot.urdf.xacro
```

# Launch file
Inside `tutorial_description/launch`, create `display.launch.xml`.
```xml
<launch>
    <let name="urdf_path" 
        value="$(find-pkg-share tutorial_description)/urdf/tutorial_robot.urdf.xacro"/>

    <node pkg="robot_state_publisher" exec="robot_state_publisher">
        <param name="robot_description" 
            value="$(command 'xacro $(var urdf_path)')"/>
    </node>

    <node pkg="joint_state_publisher_gui" exec="joint_state_publisher_gui"/>

    <node pkg="rviz2" exec="rviz2" output="screen"/>
</launch>
```

```bash
cd ~/tutorial_ws/
colcon build
source ~/.bashrc
ros2 launch tutorial_description display.launch.xml 
```

## Rviz config
- Global options > fixed_frame: `base_link`
- Add > Robotmodel /Select robot_description under description topic tab
- Add > TF
- Save as > `~/tutorial_ws/src/tutorial_description/tutorial_urdf.rviz`

Edit `display.launch.xml`:
```xml
<launch>
    <let name="urdf_path" 
        value="$(find-pkg-share tutorial_description)/urdf/tutorial_robot.urdf.xacro"/>
    <let name="rviz_config_path"
        value="$(find-pkg-share tutorial_description)/rviz/tutorial_urdf.rviz"/>

    <node pkg="robot_state_publisher" exec="robot_state_publisher">
        <param name="robot_description" 
            value="$(command 'xacro $(var urdf_path)')"/>
    </node>

    <node pkg="joint_state_publisher_gui" exec="joint_state_publisher_gui"/>

    <node pkg="rviz2" exec="rviz2" output="screen" args="-d $(var rviz_config_path)"/>
</launch>
```

 
