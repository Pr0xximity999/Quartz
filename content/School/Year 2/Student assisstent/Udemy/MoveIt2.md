---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
publish: true
---
MoveIt does the heavy lifting for you. It will plan the motion, inverse kinematics and the collisions.

# Adding collisions to the urdf
The collisions have the same properties as the visuals, considering they need to be computed as physical spaces.

>[!important]
>Simplify the shape as much as possible to lower computation time. 
>Use boxes over cylinders when possible. You can sacrifice some precise spacing considering you don’t want the robotarm to go perfectly past obstacles, but have some space in between


```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro">
    <link name="base_link">
        <visual>
            <geometry>
                <box size="0.4 0.4 0.1"/>
            </geometry>
            <origin xyz="0 0 0.05 " rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
        <collision>
            <geometry>
                <box size="0.4 0.4 0.1"/>
            </geometry>
            <origin xyz="0 0 0.05 " rpy="0 0 0"/>
        </collision>
    </link>

    <link name="shoulder_link">
        <visual>
            <geometry>
                <cylinder length="0.5" radius="0.1"/>
            </geometry>
            <origin xyz="0 0 0.25" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>
        <collision>
            <geometry>
                <box size="0.1 0.1 0.5"/>
            </geometry>
            <origin xyz="0 0 0.25 " rpy="0 0 0"/>
        </collision>
    </link>

    <link name="arm_link">
        <visual>
            <geometry>
                <cylinder length="0.6" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.3" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
        <collision>
            <geometry>
                <box size="0.05 0.05 0.6"/>
            </geometry>
            <origin xyz="0 0 0.3 " rpy="0 0 0"/>
        </collision>
    </link>

    <link name="elbow_link">
        <visual>
            <geometry>
                <cylinder length="0.1" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.05" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>
        <collision>
            <geometry>
                <box size="0.05 0.05 0.1"/>
            </geometry>
            <origin xyz="0 0 0.05 " rpy="0 0 0"/>
        </collision>
    </link>

    <link name="forearm_link">
        <visual>
            <geometry>
                <cylinder length="0.5" radius="0.05"/>
            </geometry>
            <origin xyz="0 0 0.25" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>
        <collision>
            <geometry>
                <box size="0.05 0.05 0.5"/>
            </geometry>
            <origin xyz="0 0 0.25 " rpy="0 0 0"/>
        </collision>
    </link>

    <link name="wrist_link">
        <visual>
            <geometry>
                <box size="0.1 0.1 0.05"/>
            </geometry>
            <origin xyz="0 0 0.025" rpy="0 0 0"/>
            <material name="blue"/>
        </visual>   
        <collision>
            <geometry>
                <box size="0.1 0.1 0.05"/>
            </geometry>
            <origin xyz="0 0 0.025" rpy="0 0 0"/>
        </collision>
    </link>

    <link name="hand_link">
        <visual>
            <geometry>
                <box size="0.1 0.1 0.02"/>
            </geometry>
            <origin xyz="0 0 0.01" rpy="0 0 0"/>
            <material name="grey"/>
        </visual>    
        <collision>
            <geometry>
                <box size="0.1 0.1 0.02"/>
            </geometry>
            <origin xyz="0 0 0.01" rpy="0 0 0"/>
        </collision>
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

# MoveIt2 Configuration
```bash
ros2 launch moveit_setup_assistant setup_assistant.launch.py 
```

>[!info] in case it crashes while running
>run ``export QT_QPA_PLATFORM=xcb``

- Create new config
- **Start Screen** > Browse and load the created URDF
- **Self colissions** > Generate collision matrix
- **Virtual joints** > Add virtual joint
	- Name: virtual_joint
	- Link: base_link
	- frame name: world
	- Joint type: fixed
	- save
- **Planning groups** > add group
	- Name:
		- arm
	- Kinematics solver:
		- ![[Vault-data/Attachments/MoveIt2 solver.png]]
	- Leave default values as is for kinematics
	- Add Joints (8)
		- click the first and shift click the last to select all, and press the arrow button to move them to the right
- **Robot poses** > Add Pose
	- All planning groups are “arm”
	- Other poses can be added later on
	- Pose 1:
		- Pose Name: home
	- Pose 2:
		- Pose Name: pose_1
		- Move some sliders in a way that the arm arcs down
	- Pose 3:
		- Pose Name: pose_2
		- Move some sliders in a way that the arm creates a 90 degree angle in its elbow
- **End effectors**
	- Used to add tool heads to your arm
- **Passive Joints**
	- Used in case a joint does not move
- **ros2_control URDF Modifications**
	- Creates a ros2_control config for you
	- Check position command and state interface
	- Click Add interfaces
- **ROS 2 Controllers** / **Moveit Controllers**
	- Press the big Auto Add button
- **Perception**
	- For a 3d perception module
- **Launch Files**
	- For ROS 2
- **Author Information**
	- Enter something, but don’t leave it empty
- **Configuration Files**
	- Path: `/home/user/tutorial_ws/src/tutorial_moveit_config`
	- Click “Generate Package”

>[!important]
>If you ever want to edit the configuration, start the wizard again and choose “Edit Existing” and browse to the moveit config directory

# Start the moveit package
```bash
cd ~/tutorial_ws
colcon build
source install/setup.bash
ros2 launch tutorial_moveit_config demo.launch.py
```

Running this will currently result in an error, there need to be some changes.

Inside `~/tutorial_ws/src/tutorial_moveit_config/config/joint_limits.yaml`, set all joints to: 
```yaml
has_velocity_limits: true
max_velocity: 1.0
has_acceleration_limits: true
max_acceleration: 1.0
```
The wizard has a bug where these are created as integers, while they need to be floats. and the acceleration limit needs to also be enabled for planning to work.

Also, inside `moveit_controllers.yaml` (same directory), change the contents to:
```yaml
# MoveIt uses this configuration for controller management

moveit_controller_manager: moveit_simple_controller_manager/MoveItSimpleControllerManager

moveit_simple_controller_manager:
  controller_names:
    - arm_controller

  arm_controller:
    type: FollowJointTrajectory
    joints:
      - joint1
      - joint2
      - joint3
      - joint4
      - joint5
      - joint6
    action_ns: follow_joint_trajectory
    default: true
```

Don’t forget to save :3

Run the above code again. It should work now.

