---
tags:
  - school/robot-fleet
  - school/computer-machine-vision
publish: true
---
Some definitions:
>**Computer graphics**: converting information to images
>**Image processing**: converting images to (improved) images
>**Computer vision**: converting images to information
>**Machine vision**: *Real time* converting of images to information


# What a computer “sees”
Cameras work by projecting light onto a bunch of tiny sensors. Those sensors interpret the amount of light to a certain color.

In computer vision, these interpreted values are samples, which then is quantized to a number of bytes.

# OpenCV
OpenCV is a computer vision library for [[School/Year 2/S1/c++/Introduction C++|C++]] (and other languages using its api). It has a number of datatypes and methods to work with images, adding up to 2500 different operations.

OpenCV is really fast, it is almost fast enough to work in real time.


## Drawing on images
To debug what OpenCV recognized, you can draw rectangles around the detected items.