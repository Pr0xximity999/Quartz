---
tags:
  - school/robot-fleet
  - school/computer-machine-vision
---
An OakD camera is a piece of hardware that both functions as a camera and also has the capability to run machine and ai vision models.

# Specifications
![[Vault-data/Attachments/OakD Camera.png]]
an image of the OakD camera

The OakD has both a stereo camera and an infrared(IR) night vision camera. It has a model processing power of 4 Terra operations (TOP). It can be programmed and read via the DepthAi API.

# DepthAi API
The DepthAi API is written in c++ with python bindings running on a pipeline basis.

The pipeline consists of nodes, which have an in- and output, which you need to connect yourself. A finished pipeline can be read inside your own application.

![[Vault-data/Attachments/OakD Camera pipeline.png]]


	Eventually you will get a list of all bounding boxes, with their confidence values.