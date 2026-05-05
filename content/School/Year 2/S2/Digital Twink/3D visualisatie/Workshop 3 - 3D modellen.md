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

Select all the imported materials, rendering, render pipeline converter and use the material converter to fix the material shaders.