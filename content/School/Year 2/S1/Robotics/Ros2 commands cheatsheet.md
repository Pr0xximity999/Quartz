---
tags:
  - school/robot-fleet
  - programming-languages/ROS
  - taal/engels
  - language/english
---
use gazebo for the virtual simulation

``rqt_graph`` will show all active topics in a gui

``ros2 topic list`` will list all topics in the commandline

``ros2 topic info <topic>`` will give details about a specific topic. One of the properties it returns is the interface type

``ros2 interface show <interface type>`` will show the structure of the data that this type expects

After this, publish the data it returns to the topic:<br>``ros2 topic pub --once <topic> <interface type> "<data>"``

you can substitute ``--once`` with ``--rate <number>`` to send the same message for an x number of times per second

``ros2 topic echo <topic>`` prints all incoming messages

``ros topic hz <topic>`` prints the frequency of incoming messages


use ros2_control to use a controller
