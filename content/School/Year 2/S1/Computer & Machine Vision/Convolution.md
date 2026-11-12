---
tags:
  - taal/engels
  - language/english
  - school/robot-fleet
publish: "true"
---
You can see images as a matrix of numbers. Convolution is grabbing the values of the pixels around one pixel, and doing some math with it, depending on your **kernel**(filter) matrix.

Using the right kernel can help you to either blur an image or perform edge detection.

![[Vault-data/Attachments/Convolution kernels.png]]

##### Convolutie Filtering
- Convolutie filter: generieke filter voor afbeeldingen
- Filter op basis van matrix → kernel

##### Binaire Morphologie
- Werkt op binaire afbeeldingen
- Om gaten te vullen in een masker
- Om ruis te onderdrukken
- Om vormen ronder te maken

##### Contour Detectie
- Contouren in een afbeelding vinden
- Zou kunnen met een edge filter
- Canny filter werkt beter

- Eerst Guassian Blur → cv::Canny()
- Daarna contour detectie; FindCountours, DrawContours. Contours worden pixel voor pixel getraceerd
- Simplificeren: convex hull algoritme: simpel algoritme voor vormdetectie
- Gebruikt convex en concave om vormen te creeëren