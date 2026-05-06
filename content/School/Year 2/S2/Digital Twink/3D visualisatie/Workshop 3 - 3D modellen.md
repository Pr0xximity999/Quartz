---
tags:
  - school/digital-twin
  - taal/engels
  - language/english
banner:
publish: true
---
# Intro
This section will go over 3D models. Simple primitive shapes in unity are okay, but might not look at pretty when you want to make a more complex scene.

# Model repositories
[Sketchfab](https://sketchfab.com/) is one if not the biggest collection of 3D models available on the internet. You can find nearly anything on here

>[!note]
> Make sure that you turn on “downloadable” and the free option when searching, and that you download in fbx because that’s what unity supports the best :3. Sometimes the downloaded model has its own camera and light, so make sure to remove those too

The [unity asset store](https://assetstore.unity.com/) is also a really nice and integrated way to add models and other assets to your project. You need to log in to your account, so when you add assets to your account you can just import them from the asset manager within unity. Remember to organize the folders when you import then because they will be added to the assets root folder.

Unity assets have a slight issue though…

## Converting shaders
Most 3D projects in unity will use the universal rendering pipeline. When adding assets however, they will use materials from the “standard” shader pipeline.

Select all the imported materials and go to window > rendering > render pipeline converter > select material upgrade > initialize converters > convert assets.

# Model animations
Previously, [[School/Year 2/S2/Digital Twink/3D visualisatie/Workshop 2 - Visuals#Animations|animating objects inside unity]] was discussed. There’s actually another way to animate things within unity, or well, humanoid models to be exact.

Humanoid characters usually have this thing called an armature, rig, or skeleton. Unity calls this an **avatar**. When downloading character models, its rig can be edited by selecting the imported model within the asset file explorer and selecting the “Rig” tab within the inspector.<br>By setting the animation type to “Humanoid” (if it hasn’t been selected already), selecting “Create From This Model” for its avatar definition, and pressing configure, the character’s “bones” can be configured and assigned.

## Rigs
Armature rigs usually start at the hips, from which it goes up to to the spine, splitting at the shoulders and neck which have the upper and lower arm and the hand and the neck and head (with it’s own optional additions). Down from the hips, the bones go into the upper legs, lower legs, feet and optionally toes.

This usually results in a hierarchy that looks something like this:
- Hips
	- Spine
		- Spine/chest (optional)
		- Neck (optional)
			- Head
				- Facial parts (optional)
		- Shoulder (left/right)
			- Upper arm (left/right)
				- Lower arm (left/right)
					- Hand (left/right)
	- Upper leg (left/right)
		- Lower leg (left/right)
			- Foot (left/right)
				- Toes (left/right, optional)

All the parts marked as optional refer to unity’s rigging system. These are not needed for a model to be a valid rig. The model also need’s to be set in the t-pose position.


# Mixamo animations
Some models come pre-installed with some stock animations. Others, however, do not. In that case it is needed to download animations online to apply to a character. [Mixamo](https://www.mi) is one of those websites where you can download character animations. Make sure to download the animation in fbx mode for unity.

Downloaded animations, just like character models need to be tweaked a little before they can be used. 
- It can be renamed in the “Animation” tab of the inspector when focusing the file in the asset file manager.
- The animation type need’s to be set to “Humanoid”


Some animations may transform the position of the model it is attached to, called a **root motion**. Root motions can be disabled by unchecking the checkbox with the same name inside of the animator component.