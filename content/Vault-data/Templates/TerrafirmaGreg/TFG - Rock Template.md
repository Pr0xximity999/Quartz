---
cssclasses:
  - wide-page
tags:
  - games/minecraft
  - modpacks/terrafirmagreg
  - modpacks/terrafirmagreg/geology
  - taal/engels
  - language/english
template_type: CA00
image: "[[Vault-data/Attachments/NO-IMAGE.png]]"
name: rock name
rock_type:
publish: true
---

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
>		<h2>${getValue("character_name", "Unnamed Rock")}</h2>
>	</div>
>	${renderImage}
>   
>	<div class="infobox-group">
> 	    <div class="heading">
> 		    <h3>Geographical Information</h3>
> 		</div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Name</p>
> 		        <ul class="data-content"><li>${getValue("name", "Unnamed rock")}</li></ul>
> 	        </div>
> 	    </div>
> 	    <div class="infobox-data">
> 			<div class="infobox-datarow">
> 		        <p class="data-heading">Rock type</p>
> 		        <ul class="data-content"><li>${getValue("rock_type")}</li></ul>
> 	        </div>
> 	    </div>
> 	  </div>
>   </div>
>  `;
> 
> dv.el("div", infoboxHTML, { unsafe: true });
> ~~~

![[Vault-data/Bases/TerrafirmaGreg/Rocks.base|Rocks]]


> [!blank-container]
> ```button
> name Create new rock
> type note(New Lead, tab) template
> action TFG - Rock
> folder Games/Minecraft/Modpacks/TerraFirmaGreg/Geology
> customColor #7CA7B8
> customTextColor #000000
> class full-width-btn2
> prompt true
> ```