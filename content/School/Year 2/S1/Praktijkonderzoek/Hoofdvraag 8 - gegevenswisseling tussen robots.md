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

Bij deelvraag 1 zal er ook prototypes gemaakt worden als er niet teveel communicatiemethoden van pas komen aangezien er maar beperkte tijd is om dit onderzoek te doen. Deze prototypes zullen echter niet op de originele hardware van de robots getest worden, aangezien er geen toegang is tot een robotvloot om dit fatsoenlijk te testen.

Tot slot word er een multi criteria analysis toegepast op deelvraag 2 omdat het onderzoek nuance kan hebben en deze minimaal moet blijven. Deze criteria staan naast andere criteria in [[#2.5 - Criteria]] beschreven.
## 2.3 - Benodigde middelen
Naast triviale elementen zoals een werkende internetverbinding, stroom en een zoekmachine, is tijd vooral van belang als het gaat om een literatuuronderzoek. Een multi-criteria-analyse draait vooral om een kritische blik naar de gegeven informatie en het op een juiste manier afwegen.
## 2.4 - Analysemethoden
De analysemethode zal vooral een kwantitatieve data analyse zijn. Er zal aan de hand van de multi-criteria-analysis en prototype besloten worden welke communicatiemethode het meest geschikt is voor dit project. De verzamelde data zal worden verzameld met gebruik van openbare internet bronnen (zie [[#7 - Bronnenlijst]]).

## 2.5 - Criteria
De criteria waar in dit onderzoek vooral naar gekeken zal worden, is schaalbaarheid en server-afhankelijkheid. De robots moeten op tijd hun status door kunnen geven aan de vloot. Het als het aantal robots toe neemt moet deze snelheid niet verloren gaan.

Of de communicatiemethode serverloos is of niet zal niet een bepalende factor zijn (soms zal de server optie een stuk voordeliger zijn), maar de voorkeur gaat wel uit naar een methode die geen server nodig heeft om goed te functioneren. Desnoods kan 1 robot fungeren als een server, waar de andere robots doorheen communiceren. Daarentegen zal er uit dit onderzoek komen of het inderdaad een betere optie is om wel of niet een server te utiliseren.

Zoals besproken in [[#2.2 - Methoden en technieken]] zullen er alleen maar testopstellingen en prototypen gemaakt worden voor het testen van schaalbaarheid als het aantal communicatiemethode-kandidaten niet te groot is. Het exacte aantal waarop dit niet meer van toepassing is is geen vast getal en zal besloten worden aan de hand van de beschikbare tijd, aantal communicatiemethoden en de complexiteit van alle methoden.

De bronnen die gebruikt worden moeten wel betrouwbaar zijn, hierom zullen alleen bronnen gebruikt worden waarvan bekend is dat deze legitiem zijn (zoals bronnen van google scholar).

Tot slot moet de communicatiemethode simpel zijn om te implementeren. Het moet het liefst het JSON/text format ondersteunen omdat die in het verleden het meest gebruikt is bij school opdrachten. 
# 3 - Analyse & resultaten
## 3.1 - Protocollen
Tijdens het onderzoek kwamen er veel communicatie protocollen voorbij om ervoor te zorgen dat het maken van een testopstellingen haalbaar is word er een top 3 uitgekozen. 
Hier is een lijst van alle protocollen die interessant kunnen zijn voor een robotvloot in geen specifieke volgorde:
### 3.1.1 - Zigbee
Zigbee is een low-power mesh-netwerk protocol dat gemaakt is voor een minimaal vertraagde, draadloze communicatie tussen apparaten die met een batterij aangedreven zijn. Zigbee word meestal gebruikt als communicatie middel in huis-automatiseringsapparaten en industriële doeleinden zoals stoplichten. Het ligt een beetje tussen Bluetooth en Wi-Fi in.

### 3.1.2 - MQTT
Message Queuing Telemetry Transport, of MQTT, is een lichtgewicht subscriber-publisher protocol gemaakt voor IoT apparaten, cloud applicatie en robotvloten. MQTT bestaat uit 2 bestandsdelen: een message broker(server) en een aantal clients. Clients sturen berichten naar een “topic” op de broker, die dan weer doorgestuurd word naar alle clients die een subscriptie hebben naar die topic. 

### 3.1.3 - CoAP
**Co**nstrained **A**pplication **P**rotocol (CoAp) is een UDP-gebaseerd protocol gemaakt voor microcontrollers met lage ROM en RAM, ook wel constrained nodes genoemd. Het protocol is ontworpen voor een machine-to-machine (M2M) applicaties, zoals smart energy of het automatisering van gebouwen. 
CoAP bied een request/response interactie model tussen applicaties, ondersteunt ingebouwde discovery-of-services, concepten zoals URIs en internet media types en kan makkelijk interfacen met HTTP. Het heeft weinig overhead en is erg gemakkelijk in het gebruik.

# 4 - Conclusies

# 5 - Reflectie

# 6 - Verantwoording gebruik AI-assistent
In dit document is geen gebruik gemaakt van een AI-assistent.

# 7 - Bronnenlijst
[Robot Communication Protocols: A Comprehensive Guide](https://thinkrobotics.com/blogs/learn/robot-communication-protocols-a-comprehensive-guide)
[Wikipedia - Zigbee](https://en.wikipedia.org/wiki/Zigbee)
[Wikipedia - MQTT](https://en.wikipedia.org/wiki/MQTT)
[Wikipedia - CoAP](https://en.wikipedia.org/wiki/Constrained_Application_Protocol)
[RFC 7252 - CoAP](https://datatracker.ietf.org/doc/html/rfc7252)
[RFC-7228](https://datatracker.ietf.org/doc/html/rfc7228)