---
tags:
  - school/robot-fleet
  - school/computer-machine-vision
---
Oak-D camera’s are pieces of hardware that have the functionality of a regular camera with depth vision, but also enable you to run machine learning models inside them for computer vision. 

![[Vault-data/Attachments/OakD Camera.png]]
An image of an OakD camera model

This OakD has both a stereo camera and an infrared(IR) night vision camera. It has a model processing power of 4 Terra operations (TOP). Running a model will classify any objects it can detect and send it to a data stream along with the camera’s output. Extracting the type of data is defined by an **operator type**.
https://derivative.ca/UserGuide/OAK-D

# DepthAi API
The DepthAi API is written in c++ with python bindings running on a pipeline basis.

The pipeline consists of nodes, which have an in- and output, which you need to connect yourself. A finished pipeline can be read inside your own application.

![[Vault-data/Attachments/OakD Camera pipeline.png]]


Eventually you will get a list of all bounding boxes, with their confidence values.