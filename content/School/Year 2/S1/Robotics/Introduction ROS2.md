---
tags:
  - school/robot-fleet
  - operating-systems/linux
  - programming-languages/ROS
  - taal/engels
  - language/english
publish: "true"
---
>**ROS**: Robot Operating System, is a set of software libraries and tools for building robot applications.

Despite its name, ROS is no operating system like windows or linux. It actually runs on linux and c++/python.

All of ROS’s documentation is available on https://index.ros.org/.

ROS is open source (very cool).

# The history of ROS
Ros is created in 2007 by the Californian robotics-research institute Willow Garage. It’s earliest public release was in 2009 with ROS 0.4 under a BSD-Licence so that universities and businesses could freely use it.

It’s goal was to make a modular distributed framework for programming robots.

In 2012 they created the OSRF(open source robotics foundation), who continued with the releases, documentation, build-farms and ROSConferences.

in 2024 they stated the development of ROS 2.0 (ROS 1.0 had some issues), which released in 2017 with “Ardent Apalone”. Every half year a new release came out with names corresponding with the alphabet (Bouncy, Dashing, Foxy, Galactic, Humble, Iron, Jazzy).

Nowadays ROS is used in robotics, manufacturing, farming and much more.


# ROS Architecture
ROS has 3 layers:
- Application layer
- Middleware layer
- OS layer

The application layer consists of nodes and the main app which runs.

The middleware layer manages the libraries, Internal process api’s, and the abstract DDS(data distribution layer) layer.

The OS layer can be either Linux, Windows, Mac and RTOS(real time operating system).

## Data Distribution Service (DDS)
The DDS is the heart of ros. It creates the connections between nodes, making them able to communicate with one another and share their resources. For example: connecting a controller to your laptop and controlling a robot from there.

## Nodes, Topics and Messages
A node is a ROS program that runs somewhere (a controller script for example).
nodes communicated by a publish-subscribe protocol (like mqtt), meaning that one node can send a message on a certain topic, and other nodes can subscribe to that topic and read its messages.