---
tags:
  - school/robot-fleet
  - operating-systems/linux
  - programming-languages/ROS
  - taal/engels
  - language/english
publish: true
---
See [[School/Year 2/S1/Robotics/ros2 commands|ros2 commands]] for some commands.

# Rviz robot visualizer
Rviz can be used to visualize the robot in a 3d digital space. It shows all the parts of a robot and how it “sees” the digital world. You can set up nodes that correspond to certain parts of the robot, or a position in the digital world.

# Gazebo
Gazebo is another simulator that can be used to test out ros2 commands. The difference between gazebo and rviz is that gazebo is not connected to a real robot, instead running their own robot fully simulated. Gazebo is a full physics simulation, meaning it can simulate gravity, weight and a bunch other things.

One downside of gazebo is that it needs a constant high framerate, which makes it hard to use in something like a virtual machine.

# URDF
Unified Robot Description Format, or URDF is an XML format to display a robot model.

At first URDF turns every part into separate links, links are parts that need to move on their own. Then it sets the origins of those links, which will be used to set pivot points. 

## Joints
Afterwards it sets joints, which are connections between links. There are multiple joints:
- revolute: rotates around the axis and has an upper and lower limit
- continuous: rotates around the axis and has no limits
- prismatic: slides along the axis and has an upper and lower limit
- fixed: does not move at all, not really a joint
- floating: allows all 6 degrees of freedom for motion
- planar: allows motion perpendicular along the axis

Joins also have 3 other important tags:
- visual: what the simulation shows
- collision: how the joint interacts with the world
- inertia: gives the joint weight(mass)

Other than that, a joint usually has a name, parent, child, origin, axis, limits(to axises and velocity). Keep in mind that 0, 0, 0 is the absolute middle of the robot.

You can also add your own tags.

## Xacro
Xacro can be used to compile down multiple URDF files to a single one by importing them with special syntax. Xacro can then be used to publish that file single to the robot, which is available on the `/robot_description` topic.

# Transforms (TF2)
Transforms are created to make position based things easier. The way it works is by first creating a *base* transform. By using math translations, you can calculate how to go from one transform to another. Using this, you can calculate the line between other transforms by first going to the *base*.

TF2 is a library that handles the transform communication between transforms using broadcasts.

# Slam
Simultaneously Localize And Map(SLAM) is a program to map out an area and note down specific locations for navigation later on.