---
tags:
  - school/digital-twin
  - taal/engels
  - language/english
  - applications/unity
banner:
publish: true
---
# Intro
This section will go a little more in depth in the visuals of objects in a scene. Materials will be expanded on a bit more. Other than that, shaders, lighting and the animator will also be introduced.

# Materials
In the [[School/Year 2/S2/Digital Twink/3D visualisatie/Workshop 1 - Unity Basics|previous part]], there was said that materials have visual traits like how shiny they are and bumpy. 
- On top of that, materials can also utilize different shader pipelines other than the default one. The materials metallicness can also be changed to a special slider. 
- Materials can also be made transparent, but keep in mind that this does add extra strain to the rendering process.
- By default, a material doesn’t render the back side of a polygon (called culling). This can also be changed to be either inside or both.
- Shadows being cast can be turned off
- A specular map defines how shiny a polygon is. This can be set by using a specular map texture.
- A normal map defines what direction a polygon is. This can be set by using a normal map texture.
- An occlusion map defines how a polygon looks like in the dark. The darker the polygon is, the more defined the occlusion map will be. This can be also set by using an occlusion map texture.


# Shaders
Shaders define how the visuals at its core look. Shaders also define what parts of a material can be edited. 

Shaders in unity are built from a node graph. In here, inputs, transformations and outputs can be added and edited.


# Lighting
Unity has a handful of light types:
- Directional
- Point
- Spot
- Area (not covered here)

Some lights have their own properties that can be edited, but most of them let you edit the color, intensity and cookie, which adds little shapes in the light like a slide projector.

Lights also blend together with other lights.

**Directional** light is the default one any scene comes with. This one tries to resemble the sun, with the position of the light not really doing anything. Rotating the light however will decide where in a scene the sun comes from. Shadows and the light itself can be edited in a multitude of ways.

A **point** light works as a basic light source like a lantern. It shoots light in every direction within a certain range and angle.

The **spot light** is a point light but constrained to a certain range.

If a light only shoots a certain direction, it can also be set to be baked into a scene. Baking makes the light static and optimizes it a lot more.

# Animations
Unity has its own build in animation system.

All animations within unity are managed by the **animator** component. This object will be added to another gameobject to animate that object. The animator decides which animations play when and in what order/repetition.

The animator holds a list of parameters that can be used to externally influence the animation flow. One parameter that might be used to start an animation is the **trigger**. Triggers are sort of booleans that can be triggered trough code.

**Animations** are saved as clips on your machine. They hold a bunch of **key frames** that tells the animator when what property of the object changes. Next to key frames to tell the state of the gameobject, you can also edit the **interpolation** between those key frames (also called curves or speed of change).