---
tags:
  - school/praktijkonderzoek
  - language/dutch
  - taal/nederlands
banner:
---
> Een peer review van dit document is [hier](/LU2-%2D-Onderzoeksproject/Wiki-%2D-B3.2-%2D-Thomas-&-Jelle/8-%2D-Beste-communicatie-methode/Peer-review-%2D-Jarek) te vinden
  
# 1 - Inleiding
In dit document zal er een probleem uitgelegd, opgezet, uitgevoerd en geëvalueerd worden. De onderzoekvraag die behandeld zal worden luid “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots (in een vloot)?*”. 

Een robotvloot kan niet functioneren zonder onderlinge communicatie. Deze communicatie moet snel en eenvoudig gebeuren zodat het zo efficiënt mogelijk is.

## 1.1 - Inhoud
[[_TOC_]]
# 2 - Onderzoeksopzet
## 2.1 - Onderzoeksvraag en deelvragen
De hoofdvraag van dit document is: “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots?*”. 

Deze onderzoeksvraag op zichzelf is behoorlijk open en kan op verschillende manieren geïnterpreteerd worden. Daarnaast moeten er ook zekere onduidelijkheden opgeklaard worden om tot een zekere conclusie te komen. 

Hierom worden er een aantal deelvragen opgesteld. Deze vragen zullen de scope van dit onderzoek vastleggen naast dat het ook interpretatie zo veel mogelijk zal minimaliseren.

### 2.1.1 - Context specifieke informatie
Voordat de concretere deelvragen opgesteld worden zullen er alvast aantal definities aangegeven worden.
- Een “communicatiemethode” is een hardware agnostisch communicatie protocol waarmee een computerapplicatie data kan uitwisselen ()
- De robot zal de rekenkracht hebben van een raspberry pi
- Communicatiesnelheid is niet cruciaal, maar moet ook niet merkbaar lang zijn
	- Een stop-commando bijvoorbeeld, moet binnen een seconde uitgevoerd worden
### 2.1.2 - Deelvragen
Deze deelvragen zijn:
1. Welke communicatiemethoden zijn er?
2. Wat betekent het voor een communicatiemethode om efficiënt te zijn?
3. Welke communicatiemethoden zijn mogelijk binnen de restricties van de robothardware?
4. Vereist een gekozen communicatiemethode een server?
## 2.2 - Methoden en technieken
Aangezien er al bestaande informatie en onderzoeken gepubliceerd staan op het internet, is een literatuuronderzoek het meest geschikt om de deelvragen te kunnen beantwoorden.

google scholar? lists of communication protocols? What makes a protocol efficient? etc

---

Omdat het om al bestaande communicatiemethoden gaat zal er voor deelvraag 1 en 2 gebruik worden gemaakt van literatuuronderzoek. Er is genoeg informatie op het internet te vinden over dit onderwerp, dus andere vormen van onderzoek zullen niet nodig zijn. Search queries die gebruikt worden zullen dingen zijn zoals “List of communication methods used in a robot fleet” en “Communication methods capable of supporting a large robot fleet”.
  
Voor het onderzoeken van beide deelvragen zal er een multi-criteria-analyse toegepast worden, omdat het onderzoek nuance kan hebben en deze minimaal moet blijven. Deze criteria staan naast andere criteria in [[#2.5 - Criteria]]beschreven.
## 2.3 - Benodigde middelen
Naast triviale elementen zoals een werkende internetverbinding, een werkende computer en een zoekmachine, in dit geval google, is tijd vooral van belang als het gaat om een literatuuronderzoek. 
Een multi-criteria-analyse draait vooral om een kritische blik naar de gegeven informatie en het op een juiste manier afwegen.

## 2.4 - Analysemethoden
De analysemethode zal vooral een kwantitatieve data-analyse zijn. Er zal aan de hand van de multi-criteria-analyse besloten worden welke communicatiemethode het meest geschikt is voor dit project. De verzamelde data zal worden verzameld met gebruik van openbare internetbronnen (zie [[#7 - Bronnenlijst]]).
  
## 2.5 - Criteria
De criteria waar in dit onderzoek vooral naar gekeken zal worden, is schaalbaarheid en server afhankelijkheid. De robots moeten op tijd hun status door kunnen geven aan de vloot. Als het aantal robots toe neemt moet deze snelheid niet verloren gaan.
  
Of de communicatiemethode serverloos is of niet zal niet een bepalende factor zijn, soms zal de server optie een stuk gunstiger zijn, maar de voorkeur gaat wel uit naar een methode die geen server nodig heeft om goed te functioneren. Desnoods kan 1 robot fungeren als een server, waar de andere robots doorheen kunnen communiceren. Daarentegen zal uit dit onderzoek komen of het inderdaad een betere optie is om wel of niet een server te utiliseren.
  
De bronnen die gebruikt worden moeten wel betrouwbaar zijn, hierom zullen alleen bronnen gebruikt worden waarvan bekend is dat deze legitiem zijn, zoals bronnen van Google Scholar en Wikipedia, en wiens informatie overeenkomt met meerdere websites.
  
Tot slot moet de communicatiemethode simpel zijn om te implementeren. Het moet het liefst het JSON/text format ondersteunen omdat die in het verleden het meest gebruikt is bij school opdrachten. 
# 3 - Onderzoeksresultaten & Analyse
## 3.1 - Onderzoek naar protocollen
Tijdens het onderzoek kwamen veel communicatieprotocollen voorbij (Sarraf, 2025). Uit deze protocollen zijn er 4 gekozen die interessant kunnen zijn voor een robot vloot:
### 3.1.1 - Zigbee
Zigbee is een low-power mesh-netwerk protocol dat gemaakt is voor een minimaal vertraagde, draadloze communicatie tussen apparaten die met een batterij aangedreven zijn met een bereik tussen de 10 en 100 meter en een datasnelheid rond de 250 kbit/s (Wikipedia contributors, 2025d). Zigbee wordt meestal gebruikt als communicatiemiddel in huisautomatisering apparaten, sensoren en industriële doeleinden zoals stoplichten. Het ligt een beetje tussen Bluetooth en Wi-Fi in. Zigbee heeft geen server nodig en communiceert direct tussen apparaten.
  
  
### 3.1.2 - MQTT
Message Queuing Telemetry Transport, of MQTT, is een lichtgewicht subscriber-publisher protocol gemaakt voor IoT apparaten, cloud applicatie en robot vloten (Wikipedia contributors, 2025b). MQTT bestaat uit 2 bestanddelen: een message broker(server) en een aantal clients. Clients sturen berichten naar een “topic” op de broker, die dan weer doorgestuurd wordt naar alle clients die een subscription hebben naar dit topic. MQTT is gemaakt om een groot aantal berichten per seconde te kunnen verwerken zonder grote vertraging. De snelheid van MQTT is afhankelijk van de internetsnelheid van de server en client.
  
  
### 3.1.3 - CoAP
**Co**nstrained **A**pplication **P**rotocol (CoAp) is een UDP-gebaseerd protocol gemaakt voor microcontrollers met lage ROM en RAM, ook wel constrained nodes genoemd (_RFC 7228: Terminology For Constrained-Node Networks_, z.d.-b). Het protocol is ontworpen voor machine-to-machine (M2M) applicaties, zoals smart energy of de automatisering van gebouwen (_RFC 7252: The Constrained Application Protocol (CoAP)_, z.d.). 
CoAP biedt een request/response interactie model tussen applicaties, ondersteunt ingebouwde discovery-of-services, concepten zoals URIs en internet media types en kan makkelijk interfacen met HTTP (Wikipedia contributors, 2025a). Het heeft weinig overhead en is erg gemakkelijk in het gebruik.
  
  
### 3.1.4 - LoRa
Het **Lo**ng **Ra**nge protocol LoRa is een radio communicatieprotocol dat op de fysieke laag werkt met een openbare, licentievrije radiofrequentie.
LoRa is ontworpen voor apparaten met een lage rekencapaciteit en geheugen en werkt over lange afstanden (tussen de 330 kilometer in perfecte omstandigheden, tot 10 kilometer in normale omstandigheden). Deze eigenschappen zorgen wel voor een ander probleem: LoRa, met een datasnelheid tussen de 0.3 kbit/s en 27 kbit/s is de laagste communicatiesnelheid van de 4 beschreven protocollen(Wikipedia contributors, 2025c).
  
  
## 3.2 - Multi-criteria-analyse
Aan de hand van de verzamelde data wordt er een tabel gemaakt met de scores, server afhankelijkheid, plus- en minpunten en een verklaring die de communicatiemethoden krijgen. 
  
De score zal 1-5 punten zijn, waar 1 het laagst is en 5 het hoogst, server afhankelijkheid zal een simpele ja of nee zijn, plus- en minpunten en verklaringen zullen in tekst geschreven worden.
### 3.2.1 -  Wegingen
Alle criteria zullen een weging krijgen om te representeren hoe belangrijk deze is voor de uiteindelijke keuze.
- **Schaalbaarheid**: 40%
- **Server afhankelijkheid**: 10%
- **Pluspunt(en)**: 25%
- **Minpunt(en)**: 25%

### 3.2.2 - MCA tabel

| Protocol | Schaalbaarheid | Verklaring                                                                                                                                                                                    | Server-afhankelijk? | Pluspunt(en)                                           | Minpunt(en)                                                |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Zigbee   | 2               | Zigbee is een mesh netwerk protocol die ontworpen is om meerdere apparaten aan elkaar te verbinden, maar door zijn lage datasnelheid is het niet geschikt voor een constante, grote datastroom | nee                 | Laag stroomverbruik, draadloos                         | Het is meer geschikt voor sensoren dan voor een robot vloot |
| MQTT     | 5               | Schaalbaarheid en het ondersteunen van veel apparaten is waar MQTT voor is gemaakt                                                                                                            | ja                  | Werkt met veel apparaten                               | Heeft een server nodig                                     |
| CoAP     | 3               | CoAp heeft ondersteuningen voor het maken van een mesh netwerk                                                                                                                                 | beide               | geschikt voor kleine chips en heeft geen stroom nodig  | Werkt alleen met UDP                                       |
| LoRa     | 3               | LoRa is perfect voor langeafstands-communicatie, maar het heeft een extreem lage datasnelheid                                                                                                 | nee                 | Werkt over een lange afstand zonder internetverbinding | Heeft een radiochip nodig, zeer lage datasnelheid          |
  
# 4 - Conclusie
Alhoewel alle communicatiemethoden geschikt kunnen zijn voor een robot vloot, zijn er toch methoden die een betere kandidaat zijn dan andere. 
  
Gebaseerd op de multi-criteria-analyse dat, ondanks dat het afhankelijk is van een server, MQTT de meest efficiënte communicatie methode is voor een robot vloot. 
  
Ondanks dat CoAp ook een zeer geschikt, serverloos en handig protocol is met de machine-to-machine communicatie en de discovery-of-services, heeft MQTT toch een betere ondersteuning om efficiënter onderlinge communicatie op te zetten tussen robots als het aantal hiervan groeit. 
LoRa heeft zeer sterke eigenschappen met zijn langeafstandscommunicatie en optionele server onafhankelijkheid, maar valt af omdat de datasnelheid te laag is om een plausibele uitkomst te zien in de snelheid waarmee de communicatie plaatsvindt. Zigbee, hoewel deze ook serverloos is, is meer gespecialiseerd op losse componenten zoals sensoren dan op gehele robot vloten, waardoor deze ook afvalt.
  
# 5 - Evaluatie
Hoewel er natuurlijk ruimte is voor een meer gedetailleerd onderzoek in meerdere communicatiemethoden, paste dat niet in de tijd waarin dit onderzoek gemaakt kon worden. 
  
Voor de communicatiemethoden die wél onderzocht waren met de tijd die ik had, beantwoordt het de hoofdvraag “Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots?” goed genoeg. De deelvragen daarentegen waren niet de beste keuze die gemaakt konden worden bij deze hoofdvraag. Hier kwam ik te laat achter om nog andere deelvragen te kiezen.
  
Daarentegen was de keuze om een multi-criteria-analyse te doen voor de gevonden data een betere keuze dan een prototype maken aangezien dat zoveel tijd had gekost dat het onderzoek waarschijnlijk niet op tijd af was gekomen.
  
Qua validiteit van de criteria ben ik van mening dat het de scope goed genoeg afbakent tot wat de deelvragen moeten beantwoorden. Misschien zou ik de volgende keer meer tijd moeten besteden om betere criteria te bedenken om nog betere criteria te krijgen.
  
De uitvoering van dit onderzoek zal kleine variaties hebben afhankelijk van welke google searches je precies uitvoert, maar zolang het in de context van de beschreven queries blijft moet het niet te veel variëren. 
  
Hetzelfde geld voor de reproduceerbaarheid. De methoden en technieken kunnen meet duidelijkheid bevatten. Welke dingen precies weet ik niet precies, maar ik merk dat het beter uitgewerkt kon worden.
  
De samenwerking tussen mij en mijn duo genoot was aanwezig maar niet in overvloed. Ik (Thomas) heb aan deze hoofdvraag gewerkt, terwijl Jelle aan hoofdvraag 8 heeft gewerkt. Dit zorgde ervoor dat er, naast ik die vroeg hoe de progressie ging en wat feedback heen en weer, niet veel onderlinge samenwerking was om deze 2 hoofdvragen uit te onderzoeken.
  
Mijn aanpak voor dit onderzoek was best chaotisch, ik vond het lastig om richting te vinden en waar ik moest beginnen. Mijn keuze om geen generatieve AI te gebruiken voor dit onderzoek, omdat ik wilde kijken of het mogelijk was om dit zonder AI te doen, zorgde ervoor dat ik soms houvast en duidelijkheid miste van wat de beste manier was om dit aan te pakken. Na het maken van dit onderzoek heb ik zeker meer duidelijkheid voor dit probleem en zal het makkelijker gaan.
  
# 6 - Verantwoording gebruik AI-assistent
In dit document is geen gebruik gemaakt van een AI-assistent.
  
# 7 - Bronnenlijst
_RFC 7228: Terminology for Constrained-Node Networks_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7228
  
_RFC 7252: The Constrained Application Protocol (CoAP)_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7252
  
Sarraf, G. (2025, 31 maart). _Robot Communication Protocols: A Comprehensive guide_. ThinkRobotics.com. https://thinkrobotics.com/blogs/learn/robot-communication-protocols-a-comprehensive-guide
  
Wikipedia contributors. (2025a, juni 27). _Constrained Application Protocol_. Wikipedia. https://en.wikipedia.org/wiki/Constrained_Application_Protocol
  
Wikipedia contributors. (2025b, oktober 28). _MQTT_. Wikipedia. https://en.wikipedia.org/wiki/MQTT
  
Wikipedia contributors. (2025c, november 2). _LoRa_. Wikipedia. https://en.wikipedia.org/wiki/LoRa
  
Wikipedia contributors. (2025d, november 18). _Zigbee_. Wikipedia. https://en.wikipedia.org/wiki/Zigbee