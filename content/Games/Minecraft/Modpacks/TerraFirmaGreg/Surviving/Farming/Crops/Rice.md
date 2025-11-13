---
cssclasses:
  - wide-page
tags:
  - games/minecraft
  - modpacks/terrafirmagreg
  - modpacks/terrafirmagreg/farming/crops
  - taal/engels
  - language/english
template_type: CA00
image: "[[Vault-data/Attachments/Rice crop mc.png]]"
crop_name: Rice
food_type: Grain
crop_type: block
crop_height: single
planted_location: in
planted_in_on: freshwater that is a single block deep
temperature: 15 - 30
hydration: 25 - 100
nutrients:
---

> [!blank-container|no-margin-float-right-small]
> ~~~dataviewjs
> const page = dv.current();
> const getValue = (field, fallback = "—") => page[field] ?? fallback;
> 
> // Image handling
> const rawImage = getValue("image", null);
> const imagePath = rawImage?.path ?? rawImage ?? "";
> const renderImage = imagePath
>   ? `<img class="infobox-img" src="${app.vault.getResourcePath(app.metadataCache.getFirstLinkpathDest(imagePath, page.file.path))}" alt="Character Image">`
>   : "No image found";
>   
>// Infobox HTML
>const infoboxHTML = `
><div class="infobox">
>	<div class="heading">
>		<h2>${getValue("crop_name", "Unnamed Crop")}</h2>
>	</div>
>	${renderImage}
>   
>	<div class="infobox-group">
> 	    <div class="heading">
> 		    <h3>Crop info</h3>
> 		</div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Name</p>
> 		        <ul class="data-content"><li>${getValue("crop_name", "Unnamed crop")}</li></ul>
> 	        </div>
> 	    </div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">food type</p>
> 		        <ul class="data-content"><li>${getValue("food_type")}</li></ul>
> 	        </div>
> 	    </div>
>  	     <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Crop type</p>
> 		        <ul class="data-content"><li>${getValue("crop_type")}</li></ul>
> 	        </div>
> 	    </div>
> 		<div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Height</p>
> 		        <ul class="data-content"><li>${getValue("crop_height")} block(s)</li></ul>
> 	        </div>
> 	    </div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Planted ${getValue("planted_location")}</p>
> 		        <ul class="data-content"><li>${getValue("planted_in_on")}</li></ul>
> 	        </div>
> 	    </div>
> 	  </div>
> 	  <div class="infobox-group">
> 	    <div class="heading">
> 		    <h3>Requirements</h3>
> 		</div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Temp</p>
> 		        <ul class="data-content"><li>${getValue("temperature")} °C</li></ul>
> 	        </div>
> 	    </div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Hydration</p>
> 		        <ul class="data-content"><li>${getValue("hydration")}%</li></ul>
> 	        </div>
> 	    </div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Nutrients</p>
> 		        <ul class="data-content"><li>${getValue("nutrients")}</li></ul>
> 	        </div>
> 	    </div>
> 	  </div>
>   </div>
>  `;
> 
> dv.el("div", infoboxHTML, { unsafe: true });
> ~~~
# `= this.crop_name` 
`= this.crop_name` is a `= this.crop_height` `= this.crop_type` crop.

`= this.crop_name` seeds can be planted `= this.planted_location`  `= this.planted_in_on`  and will produce `= this.crop_name` and `= this.crop_name` seeds as a product.

---

![[Vault-data/Bases/TerrafirmaGreg/Crops.base|Crops]]

> [!blank-container]
> ```button
> name Create new crop
> type note(New Crop, tab) template
> action TerrafirmaGreg/TFG - Crop Template
> folder Games/Minecraft/Modpacks/TerraFirmaGreg/Surviving/Farming/Crops
> customColor #7CA7B8
> customTextColor #000000
> class full-width-btn2
> prompt true
> ```
