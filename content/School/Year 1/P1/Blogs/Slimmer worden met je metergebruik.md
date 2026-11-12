---
tags:
  - school/blog
  - language/dutch
  - taal/nederlands
  - school/smart-energy
publish: "true"
---
Na hard werken en veel code typen is mijn eerste schoolproject eindelijk af. Een mooie webpagina met visualisatie en aanpasbaarheid is het eindresultaat van een leertraject over blazor, html, c#, javascript en CSS.

# Mijn webpagina
![[Vault-data/Attachments/Pasted image 20241018151206.png]]
<sub>*Bron: mijzelf*</sub>

Het eerste wat je misschien opvalt is dat de styling anders is dan de template die wij van school krijgen (waarin de navbar rood is en de achtergrond wit). Ik heb deze aangepast zodat als mijn webpagina inlaad, dat de kleuren dynamisch veranderen. Dit zorgt ervoor dat als mijn groepsgenoten hun pagina's toevoegen dat onze stylings niet conflicten.

## Mijn algoritme en flowchart
De opdracht van mijn project was om het top 3 verbruikte vermogen per dag te laten zien. Hiervoor heb ik een algoritme geschreven en een flowchart gemaakt.
![[Vault-data/Attachments/smartenergy flowchart 1.png]]
<sub>*bron: miro*</sub>
<br>
<br>
<br>
<br>
<br>
<br>

Het algoritme werkt als volgt:
- **De input**: Als input voor mijn algoritme gebruik in de ingevoerde datum en meter ID die beide uit een input field komen. De ingevoerde datum is de *van* datum, de *tot* datum is altijd vandaag.
- **Data ophalen**: D.M.V. de meegegeven data word er een api call naar de servers naar school gemaakt om de desbetreffende meterdata op te halen.
- **Data verwerken**: De opgehaalde datum word gesplitst op de tijd(timestamps) en het verbruikte vermogen(Watt). 
  Aangezien het vermogen word meegegeven in absolute waarden vanaf het moment van aansluiten (3000 watt, 3001 watt, 3005 watt, etc...), en niet in wat er in dat uur werd verbruikt (2 watt, 1 watt, 3 watt, etc...), moest ik het nog eerst omrekenen.
  Het omrekenen deed ik simpelweg door de oude waarde af te trekken van de huidige waarde. Deze waarden sloeg ik dan weer op.
- **Data visualiseren**: Ik visualiseer de data op 2 verschillende manieren:
	- **De Staafdiagram**: De staafdiagram geeft een goede visualisatie op te zien hoe hoog de pieken zijn in relatie met elkaar, het is een betere optie voor deze reden.
	- **De Tabel**: De tabel laat de absolute waarden zien, wat handig is als je inzicht wilt hebben op hoeveel je exact verbruikt hebt. Hetgeen wat de staafdiagram tekort schoot is dat je soms moeilijk kon weten hoeveel een staaf precies moest voorstellen. Voor deze reden heb ik ook een tabel toegevoegd.

Zoals je kan zien in de gegeven afbeelding van mijn webpagina word het netjes gevisualiseerd.

# De opdracht criteria
Bij de opdracht die ik had gekozen zaten een aantal criteria. Hieronder ga ik over iedere criteria en hoe ik deze wel of niet heb verwerkt.
**Basis criteria:**
- **Je toont over een tijdsperiode van een instelbaar aantal dagen, per dag de top-3 momenten van het gevraagde vermogen**: Deze heb ik gedaan door middel van een datum input toe te voegen voor het instellen van de dagen, en de grafiek en tabel voor het tonen van de top-3 per dag.
- **Je maakt inzichtelijk op welke tijdstippen dit optreed en welk vermogen er op deze momenten gevraagd wordt**: De grafiek en tabel hebben beide de tijden van de staven er bij staan. Bij de tabel kan je ook het precieze vermogen zien.
- **Zorg ervoor dat je op het scherm gemakkelijk patronen per dag kunt herkennen**: Deze vraag komt heel erg op interpretatie neer, maar als je naar de tijden kijkt van de pieken zie je dat het meestal 's ochtends is (voor deze meter).

**Extra opdrachten (optioneel)**
- **Zorg dat je meerdere huishoudens kunt analyseren d.m.v. een keuzeveld**: Doordat ik een dropdown heb toegevoegd voor alle aangesloten meters, kun je ieder huishouden bekijken. Natuurlijk zit hier ook error handling omheen voor het geval dat er iets mis gaat met het lezen van een meter.
- **Bereken extra statistieken zoals de spreiding**: Dit heb ik niet gedaan aangezien ik mijn handen al vol heb aan de rest van de opdrachten
- **Zorg dat je analyse mooi grafisch wordt weergegeven**: Ik hier hier een super mooi grafiekje voor gemaakt.
- **Overige dingen mag je op eigen inzicht toevoegen, onderbouw deze ook**: Ik heb een grafiek en een tabel genomen zodat de een de ander zijn minpunten ondersteunt (een grafiek laat geen specifieke data zien, een tabel laat niet het contrast tussen data zien (en is minder mooi om te visualiseren)).

Al deze (toegevoegde) criteria zijn getest door middel van de website uit te testen en te kijken of alles visueel en technisch goed werkt.
# Conclusie
Terugkijkend naar mijn eerste blog, zou dit bijdragen aan SDG 7: Duurzame en betaalbare energie. 
Door bewuster te zijn op welk moment je het meest vermogen vraagt, weer je wanneer je iets minder stroom moet gebruiken om de belasting van het net te verminderen. Als wij dit allemaal doen zal het totale netbelasting verlagen en zijn er minder kabels nodig om stroom te leveren.