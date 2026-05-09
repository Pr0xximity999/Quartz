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
This section will go over the basics of 3D unity. Things like primitives, transforms (and code capabilities), axes, materials and parenting will be discussed.
# Primitives
Primitives are the most basic shapes native to unity. More shapes can be available trough the use of plugins, but those won’t be discussed here.

The basic shapes in unity are:
- Cube
- Sphere (a ball)
- Capsule (long sphere)
- Cylinder (Capsule with two flat ends)
- Plane (one face of a cube)
- Quad (Rectangle made of two triangles)

The difference between a plane and a quad is that a quad has 4 vertices and 2 triangles and a plane has a bunch more, meaning it can be deformed.

Using these primitives, you can make most shapes.

# Axes
An axis is one direction within a given space. The D in 3D stands for dimensional, meaning 3 dimensions. 3 dimensions mean there are 3 directions you can travel in, and in turn 3 axes. 3D unity therefor has **3 axes**:
- X: Left and Right
- Y: Up and Down
- Z: Forward and Backward

Note that the directions are relative, so saying “up” means upwards relative to the thing which is your center point. In unity this center point is usually the world space.

# Transforms
A transform is a component that almost every (if not all) unity object has. Basically anything that takes up or exist within the 3D space needs a transform. 

The transform holds position, rotation and scale data. It is called a transform because it *transforms* how the object takes up the 3D space

Every component of the transform is split along all the 3 axes:
- Position:
	- X: Horizontal position
	- Y: Vertical position
	- Z: Horizontal but the other way position (depth i suppose?)
- Rotation:
	- X: Rotation around the X axis, aka Pitch
	- Y: Rotation around the Y axis, aka Yaw
	- Z: Rotation around the Z axis, aka Roll
- Scale:
	- X: Width
	- Y: Height
	- Z: Depth

Using these 9 simple values, you can put any object in your unity scene in some place with some rotation and some height.

>[!important] Local and global rotation
>I previously mentioned how axes are kinda relative to whatever you’re measuring it from. Transforming an object in unity’s scene viewport can be either done from the object’s point of view or the world space: local or global. At default, this will be local (the object’s pov)<br>To switch between global and local rotating, click on the little drop-down menu in the top of the scene viewport:<br>![[Vault-data/Attachments/Workshop 1 - Unity Basics rotation setting.png]]<br>
>Sometimes, using global rotation will be easier because when you rotate along all 3 axes, your object’s “up” won’t be the world’s up anymore.

## Transforms in code
Unity of course also has scripting capabilities, which means game objects like transforms can also be manipulated from within code.

A script is an object that can be assigned to any other gameobject, like a primitive. The assigned gameobject can be referred to within the code by the keyword `this`. `this` can also be omitted in some cases, because of the way C# handles classes.

Because nearly every gameobject has a transform, the unity SDK lets you reference it pretty easily, using the `transform` property.

This piece of code will move the transform position up by 0.5 units.
```c#
transform.position = transform.position + new Vector3(0, 0.5f, 0);
```

When moving, resizing or rotating objects within code, it is also possible to reference a specific method made for moving, rotating or resizing:
```
transform.Translate(0.7f, 0, 0); // Move
transform.Rotate(0, 0, 1); // Rotate
transform.Resize(5, 20, 0) // Resize
```
These methods are relative by default. Except for Resize i think…

>[!important] Framerate and deltatime
>When transforming things, it is important to keep in mind that a script will be ran every frame. This means that a script will run twice as fast at 60 fps than at 30 fps. In turn, something will move twice as fast if it moves a set unit every frame.<br>To fix this, unity added a time value called `Time.deltaTime`, which gives the time passed between frames. By subtracting the number of units by the delta time, the speed at which something changes will be the same between framerates.
>```c#
>transform.Translate(0, 0, 1.5f / Time.deltaTime); // Moves 1.5 units per second
>```

There are a lot of methods to do other things like rotating around an object and moving between points, but those can be looked up if needed.

# Materials
A material is a visual component inside unity. At default, primitives will look grey and texture-less.
Materials change that by giving a primitive some color or texture (image), and a myriad of other properties including, but not limited to:
- Shinyness (metallic)
- Roughness (Smoothness)
- Bumpyness (Height)
- Whether it emits light and in what color
Most of these things can be either a single value, or accept some kind of texture (map) themselves.

Materials are in itself an individual thing, meaning multiple primitives can have the same material.

Using materials will make objects look visually different and more interesting.

# Parents
Some gameobjects “belong” to another object in a scene. The object they belong to is called the **parent** and in turn objects belonging to a parent are called **children**. 

The transform of a child is relative to its parent (if it doesn’t have a parent, their parent will become the world space). This means that transforming the parent will have effects on its children as well.