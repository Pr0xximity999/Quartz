---
tags:
  - school/praktijkonderzoek
  - language/dutch
  - taal/nederlands
banner:
---
# 1 - Inleiding
Dit document zal ingaan op de vraag wat het meest geschikte communicatiemethode is voor gegevensuitwisseling tussen robots.

Allereerst zal het gaan over de probleemanalyse en onderzoeksopzet om een duidelijk beeld te krijgen van het probleem en onderzoek. Daarna zullen de gevonden resultaten en analyse gedeeld worden. Tot slot zal er een conclusie over het onderzoek en een reflectie plaats vinden. Onderaan dit document kunnen de bronnen gevonden worden die gebruikt zijn in dit onderzoek.
# 2 - Onderzoeksopzet
## 2.1 - Onderzoeksvraag en deelvragen
De hoofdvraag van dit document is: “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots?*”. 

Deze vraag is op zichzelf al best open geformuleerd, maar kan verduidelijkt worden door het stellen van de 2 deelvragen:
1. Welke communicatiemethode is het meest schaalbaar?
2. Is een serverloze communicatiemethode beter of slechter voor een robotvloot?

Hulpvragen bij het onderzoeken van deze vragen kunnen zijn:
- Welke communicatiemethode geeft een acceptabele schaalbaarheid?
- Welke communicatiemethode is licht genoeg voor een raspberry pi?
- Welke communicatiemethode is haalbaar om te implementeren op de robot?
## 2.2 - Methoden en technieken
Omdat het om al bestaande communicatiemethoden gaat zal er voor deelvraag 1 en 2 zal gebruik worden gemaakt van literatuuronderzoek. Er is genoeg informatie op het internet te vinden over dit onderwerp, dus andere vormen van onderzoek zullen niet nodig zijn.

Voor het onderzoeken van beide deelvragen zal er een multi-criteria-analyse toegepast worden omdat het onderzoek nuance kan hebben en deze minimaal moet blijven. Deze criteria staan naast andere criteria in [[#2.5 - Criteria]] beschreven.
## 2.3 - Benodigde middelen
Naast triviale elementen zoals een werkende internetverbinding, stroom en een zoekmachine, is tijd vooral van belang als het gaat om een literatuuronderzoek. Een multi-criteria-analyse draait vooral om een kritische blik naar de gegeven informatie en het op een juiste manier afwegen.
## 2.4 - Analysemethoden
De analysemethode zal vooral een kwantitatieve data analyse zijn. Er zal aan de hand van de multi-criteria-analyse besloten worden welke communicatiemethode het meest geschikt is voor dit project. De verzamelde data zal worden verzameld met gebruik van openbare internet bronnen (zie [[#7 - Bronnenlijst]]).

## 2.5 - Criteria
De criteria waar in dit onderzoek vooral naar gekeken zal worden, is schaalbaarheid en server-afhankelijkheid. De robots moeten op tijd hun status door kunnen geven aan de vloot. Het als het aantal robots toe neemt moet deze snelheid niet verloren gaan.

Of de communicatiemethode serverloos is of niet zal niet een bepalende factor zijn (soms zal de server optie een stuk gunstiger zijn), maar de voorkeur gaat wel uit naar een methode die geen server nodig heeft om goed te functioneren. Desnoods kan 1 robot fungeren als een server, waar de andere robots doorheen communiceren. Daarentegen zal er uit dit onderzoek komen of het inderdaad een betere optie is om wel of niet een server te utiliseren.

De bronnen die gebruikt worden moeten wel betrouwbaar zijn, hierom zullen alleen bronnen gebruikt worden waarvan bekend is dat deze legitiem zijn (zoals bronnen van google scholar en Wikipedia) en wiens informatie overeen komt met meerdere websites.

Tot slot moet de communicatiemethode simpel zijn om te implementeren. Het moet het liefst het JSON/text format ondersteunen omdat die in het verleden het meest gebruikt is bij school opdrachten. 
# 3 - Onderzoeksresultaten & Analyse
## 3.1 - Onderzoek naar protocollen
Tijdens het onderzoek kwamen er veel communicatie protocollen voorbij (Sarraf, 2025). Uit deze protocollen zijn er 4 gekozen die interessant kunnen zijn voor een robotvloot:
### 3.1.1 - Zigbee
Zigbee is een low-power mesh-netwerk protocol dat gemaakt is voor een minimaal vertraagde, draadloze communicatie tussen apparaten die met een batterij aangedreven zijn met een berijk tussen de 10 en 100 meter en een datasnelheid rond de 250 kbit/s. Zigbee word meestal gebruikt als communicatie middel in huis-automatiseringsapparaten, sensoren en industriële doeleinden zoals stoplichten. Het ligt een beetje tussen Bluetooth en Wi-Fi in. Zigbee heeft geen server nodig en communiceert direct tussen apparaten.

(Wikipedia contributors, 2025d)
### 3.1.2 - MQTT
Message Queuing Telemetry Transport, of MQTT, is een lichtgewicht subscriber-publisher protocol gemaakt voor IoT apparaten, cloud applicatie en robotvloten. MQTT bestaat uit 2 bestandsdelen: een message broker(server) en een aantal clients. Clients sturen berichten naar een “topic” op de broker, die dan weer doorgestuurd word naar alle clients die een subscriptie hebben naar die topic. MQTT is gemaakt om een groot aantal berichten per seconde te kunnen verwerken zonder grote vertraging. De snelheid van MQTT is afhankelijk van de internetsnelheid van de server en client.

(Wikipedia contributors, 2025b)
### 3.1.3 - CoAP
**Co**nstrained **A**pplication **P**rotocol (CoAp) is een UDP-gebaseerd protocol gemaakt voor microcontrollers met lage ROM en RAM, ook wel constrained nodes genoemd (_RFC 7228: Terminology For Constrained-Node Networks_, z.d.-b). Het protocol is ontworpen voor een machine-to-machine (M2M) applicaties, zoals smart energy of het automatisering van gebouwen. 
CoAP bied een request/response interactie model tussen applicaties, ondersteunt ingebouwde discovery-of-services, concepten zoals URIs en internet media types en kan makkelijk interfacen met HTTP. Het heeft weinig overhead en is erg gemakkelijk in het gebruik.

(Wikipedia contributors, 2025a)
(_RFC 7252: The Constrained Application Protocol (CoAP)_, z.d.)

### 3.1.4 - LoRa
Het **L**ong **R**ange protocol LoRa is een radiocommunicatieprotocol die op de fysieke laag werkt met een openbare, licentie-vrije radiofrequentie.
LoRa is ontworpen voor apparaten met een lage rekencapaciteit en geheugen en werkt over lange afstanden (tussen de 330 kilometer in perfecte omstandigheden, tot 10 kilometer in gewone omstandigheden). Deze eigenschappen zorgt wel voor een ander probleem: LoRa, met een datasnelheid tussen de 0.3kbit/s en 27kbit/s is het de laagste communicatiesnelheid van de 4 beschreven protocollen.

(Wikipedia contributors, 2025c)

## 3.2 - Multi-criteria-analyse
Aan de hand van de verzamelde data word er een tabel gemaakt met de scores, serverafhankelijkheid, plus- en minpunten en een verklaring die de communicatiemethoden krijgen. 

De score zal 1-5 punten zijn, waar 1 het laagst is en 5 het hoogst, serverafhankelijkheid zal een simpele ja of nee zijn, plus- en minpunten en verklaringen zullen in tekst geschreven worden.

| Protocol | Schaalbaar-heid | Verklaring                                                                                                                                                                                    | Server-afhankelijk? | Pluspunt(en)                                           | Minpunt(en)                                                |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| Zigbee   | 2               | Zigbee is een meshnetwerk protocol die ontworpen is om meerdere apparaten aan elkaar te verbinden, maar door zijn lage datasnelheid is het niet geschikt voor een constante, grote datastroom | nee                 | Laag stroomverbruik, draadloos                         | Het is meer geschikt voor sensoren dan voor een robotvloot |
| MQTT     | 5               | Schaalbaarheid en het ondersteunen van veel apparaten is waar MQTT voor is gemaakt                                                                                                            | ja                  | Werkt met veel apparaten                               | Heeft een server nodig                                     |
| CoAP     | 3               | CoAp heeft ondersteuningen voor het maken van een meshnetwerk                                                                                                                                 | beide               | geschikt voor kleine chips en heeft geen stroom nodig  | Werkt alleen met UDP                                       |
| LoRa     | 3               | LoRa is perfect voor langeafstands-communicatie, maar het heeft een extreem lage datasnelheid                                                                                                 | nee                 | Werkt over een lange afstand zonder internetverbinding | Heeft een radiochip nodig, zeer lage datasnelheid          |


# 4 - Conclusie
Alhoewel alle communicatiemethoden geschikt kunnen zijn voor een robotvloot, zijn er toch methoden die een betere kandidaat zijn dan andere. Gebaseerd op de multi-criteria-analyse dat, ondanks dat het afhankelijk is van een server, MQTT de meest efficiënte methode is als het gaat om schaalbaarheid. Ondanks dat CoAp ook een zeer geschikt en handig protocol is, heeft MQTT toch een betere ondersteuning om efficienter (en met minder werk) onderlinge communicatie op te zetten tussen robots.

# 5 - Reflectie

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