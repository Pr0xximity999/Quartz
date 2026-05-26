---
tags:
  - school/digital-twin
  - taal/engels
  - language/english
  - applications/blender
banner:
publish: true
---
c# Intro
Blender is a very versatile tool created to making, animating, texturing, sculpting, rendering, simulating or scripting 3D models (and more). It has been made from the ground up and has evolved a lot over the years.

Because of the nature of blender, it is really hard to get a good grasp trough text, so i’d suggest looking up a video on how to use blender to its fullest potential. 
# The viewport and ui
The cool thing about blender’s viewport is that it can be fully customized. The base install contains a lot of commonly used presets, but there is also the option to make either custom ones or even edit the existing windows.

Any viewport can be resized, spitted/merged (right click on the edge), changed (top left drop-down) or moved.

Moving around in the 3D view is done trough using a mix of Shift/Ctrl/Alt and either scrolling or pressing the scroll wheel. The numpad can be used to rotate/snap around the focused point (set by clicking an object and pressing numpad dot).

# Object mode
Object mode is used to place and move whole objects in the current scene. Objects can be added in the add button in the top of the 3D view or by pressing shift + a.

>[!important] Transforming
> An object can be transformed using the following keybinds:
> - G - grab: Move an object around
> - S - scale: Resize an object by changing its scale.
> - R - rotate: Rotate an object
> <br>
> - Transformations can be locked to an axis to only rotate/move/scale it around that axis by pressing x, y or z
> - Transformations can also be snapped to the grid/increments by holding Ctrl or pressing shift tab
> - Transforming can be done precisely by typing a number of how many units the translation has to be done

# Edit mode
Edit mode is used when a specific object needs to be edited. Edit mode gives you the ability to edit all the individual vertices of any object. Changing between edit and object mode can be done by hitting tab.

Selection mode is set to vertex by default. This can also be changed to selecting edges or faces. 1, 2 and 3 changes these modes respectively.

## Extruding and slicing
Other than the transformations that can be also done in object mode, edit mode also makes it possible to add new parts to an object in the way of either extruding (there are more, but i wont tell them :p). **Extruding** is done by pressing E and will add a duplication of all the vertices/edges/faces *connected* to the initial selection. This way, a shape can be elongated by adding more vertices. Don’t forget to lock to an axis while extruding!


# Modifiers
Modifiers are ways to edit objects without actually changing the object (unless the modifier is applied). Modifiers are found in the properties tab of an object. Anything from repeating objects, smoothing edges, bevelling edges, and much more.

# UV editing
UV editing (and especially unwrapping) is an entire trade of its own. The uv map is a 2D representation of a 3D object that tells blender how a texture should be placed onto the model.

Most models are not mapped good by default and needs to be properly placed and scaled onto a texture. This is called **UV unwrapping** and i have a lot of respect for people who do this professionally. Usually the best option would be to use the smart unwrap option.

# Materials
Materials are the looks of an object. This can be a loooot of things, like a color or texture with each their own special properties.

Previewing a material can be done by holding z and selecting material preview.

# Textures and texture painting
Textures are part of the material of an object. These are usually images. Textures can also be edited within unity trough **texture painting**. Texture painting can be done directly onto the texture or by painting on the object the texture is placed on.

# Exporting
Finally, once you’re done with your object, you can export it to outside of blender. In the top left, go to Edit > Export > FBX (unity works best with fbx files). Don’t forget to export the texture too by saving it inside the UV editing viewport.