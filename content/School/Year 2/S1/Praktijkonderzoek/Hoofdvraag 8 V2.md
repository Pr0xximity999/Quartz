---
tags:
  - school/praktijkonderzoek
  - language/dutch
  - taal/nederlands
banner:
---
# 1 - Inleiding
In dit document zal er een probleem uitgelegd, opgezet, uitgevoerd en geëvalueerd worden. De onderzoekvraag die behandeld zal worden luid “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots (in een vloot)?*”. 

Een robotvloot kan niet functioneren zonder onderlinge communicatie. Deze communicatie moet snel en eenvoudig gebeuren zodat het zo efficiënt mogelijk is.

In dit onderzoek word er over “communicatiemethoden” en “communicatieprotocollen” geschreven. In de context van dit onderzoek word hiermee het zelfde bedoelt.

Een robotvloot kan ook wel een Multi-Robot System, of afgekort MRS (Jawhar et al., 2018) genoemd worden. De term MRS zal meerdere keren voorkomen in dit onderzoek.

# 2 - Onderzoeksopzet
## 2.1 - Onderzoeksvraag en deelvragen
De hoofdvraag van dit document is: “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots?*”. 

Deze onderzoeksvraag op zichzelf is behoorlijk open en kan op verschillende manieren geïnterpreteerd worden. Daarnaast moeten er ook zekere onduidelijkheden opgeklaard worden om tot een zekere conclusie te komen. 

Hierom worden er een aantal deelvragen opgesteld. Deze vragen zullen de scope van dit onderzoek vastleggen naast dat het ook interpretatie zo veel mogelijk zal minimaliseren.

### 2.1.1 - Context specifieke informatie
Voordat de concretere deelvragen opgesteld worden zullen er alvast aantal definities aangegeven worden.
- Een “communicatiemethode” is een hardware agnostisch communicatie protocol waarmee een computerapplicatie data kan uitwisselen
- De robot zal de rekenkracht hebben van een raspberry pi 4
- Communicatiesnelheid is niet cruciaal, maar moet ook niet merkbaar lang zijn
	- Een stop-commando bijvoorbeeld moet snel genoeg uitgevoerd worden dat de robot niet tegen iets aan rijd
### 2.1.2 - Deelvragen
Deze deelvragen zijn:
1. Wat is benodigd voor onderlinge communicatie in een robotvloot?
2. Wat betekent het voor een communicatiemethode om efficiënt te zijn?
3. Welke communicatiemethoden zijn mogelijk binnen de restricties van de robothardware?
4. Welke communicatiemethode is het meest geschikt binnen de restricties van deelvraag 1 - 3?

## 2.2 - Methoden en technieken
Aangezien er al bestaande informatie en onderzoeken gepubliceerd staan op het internet, is een literatuuronderzoek het meest geschikt om de deelvragen te kunnen beantwoorden.

Zoekmachines zoals Google en Google Scholar zullen gebruikt worden om bronnen met informatie te vinden. Om deze bronnen te vinden worden er search queries gebruikt die betrekking hebben tot communicatieprotocollen en één van de deelvragen, zoals “robot fleet communication requirements”, “list of communication protocols”, “robot fleet communication protocols”, “most efficient communication protocols” of “performance evaluation communication protocols robots”.

Voor het vergelijken van de communicatiemethoden zal er een multi-criteria-analyse gebruikt worden. een MCA is hier perfect voor aangezien communicatieprotocollen veel becijferbare eigenschappen heeft.

## 2.3 - Scope
In dit onderzoek word er niet gekeken naar de beveiligingsaspecten van de communicatiemethoden. In een vervolgonderzoek kan dit wel gedaan worden, maar om de scope van dit onderzoek niet te groot te maken is het besluit genomen om dit achterwege te laten.

## 2.4 - Benodigde middelen
Voor dit onderzoek is een werkende computer nodig met een internet verbinding, waarmee er door gebruik van een zoekmachine (google (scholar) in dit geval) informatie opgezocht kan worden. Voor voor het vergelijken van de informatie over communicatiemethoden met betrekking tot de MCA is er vooral een kritische blik en logische beredenatie nodig om de juiste score te geven.

## 2.5 - Analysemethoden
Informatie analyseren zal vooral kwantitatief zijn aangezien het meer om de karakteristieken gaat dan om de diepgaande betekenis van de communicatiemethoden. Het gaat immers over de efficiëntie van een protocol.

## 2.6 - Criteria
De criteria opgesteld voor dit onderzoek zijn zo geschreven dat alles een deelname kan nemen aan de MCA. Deze criteria worden dus opgesteld zodat iedere communicatiemethode met elkaar vergeleken kan worden.

De criteria waarmee de communicatiemethoden worden vergeleken zijn:
1. Latency
	Al hoewel de vertraging in communicatie niet extreem cruciaal is voor dit onderzoek, word het wel meegenomen in deze criteria (al is dit wel met een lagere weging ten opzichte van andere criteria)
2. Percentage van succesvolle berichtoverdrachten
	Een bericht wat heel soms niet door komt is geen probleem, maar dit moet niet te vaak gebeuren.
3. Schaalbaarheid
	Des te groter de vloot, des te meer load komt op het hele netwerk. De methode moet goed om kunnen gaan met het groeien van het netwerk.
4. Geheugen gebruik / CPU load / Stroomverbruik
	Een raspberry pi 4 heeft niet als te veel geheugen, maar 1, 2, 4, of 8 GB (Raspberry Pi Foundation, z.d.). Dit onderzoek gaat uit van 8 gigabytes aan geheugen.
	Hiernaast moet de belasting op de processor ook niet dusdanig veel zijn dat het opereren van de robot word belemmerd en word de robot gevoed door een batterij die zo lang mogelijk mee moet gaan.
5. Server-afhankelijkheid
	Een centrale server draaien voor een robotvloot, op een robot of een aparte Raspberry pi, kan voor onnodige druk / gebruik van cruciale resources zorgen.

![image](https://assets.raspberrypi.com/static/blueprint-labelled-97975f4b1159239a8e248d180be87e3e.svg)
*Figuur 1: Raspberry Pi 4 Tech Specs (Raspberry Pi Foundation, z.d.)*


# 3 - Data Verzameling & Analyse
## 3.1 - Deelvraag 1
> “***Wat is benodigd voor onderlinge communicatie in een robotvloot?***”

Het gebruik van meerdere, *verbonden* robots in plaats van alleenstaande robots zorgt voor een verbetering in distributie en specialisatie. Het toepassen van deze robots vereist goede communicatie en onderlinge uitwisseling van informatie (Gielis et al., 2022). 

Wanneer het bijvoorbeeld gaat om ontdekking van terrein is het essentieel dat de robots onderling communiceren en bijhouden waar ze al geweest zijn en in de toekomst, moeten ze deze kaart kunnen gebruiken om efficient onderling paden en routes te plannen (_Coordinated Multi-robot Exploration_, 2005).

Een van de meest belangrijke vormen van coördinatie in een multi robot systeem word gezien wanner robots onderling samenwerken om in een formatie te bewegen en die formatie aan te houden, zoals een zwerm vogels. “Flocking” is een vorm van groepscoördinatie met meerdere robots met hetzelfde doeleind (_A Review Of Research in Multi-robot Systems_, 2012)


Voor een succesvolle vloot zijn er 3 heuristische regels opgesteld door Reynolds in 1987:
1. Vloot centralisatie: Probeer dichtbij andere vlootgenoten te blijven
2. Obstakel ontwijking: Ontwijk botsingen met vlootgenoten te voorkomen
3. Snelheidsafstemming: Probeer even snel te gaan als vlootgenoten
(Reynolds, 1987)

Deze regels worden ook wel cohesie, scheiding en opstelling genoemd.

Het benodigde in een robotvloot wat betreft communicatie is dus dat informatie over diens positie, snelheid en omgeving efficient doorgestuurd kan worden op een betrouwbare, snelle manier.

## 3.2 - Deelvraag 2
> “***Wat betekent het voor een communicatiemethode om efficiënt te zijn?***”

Zoals besproken in deelvraag 1 moet een robotvloot onderling informatie over zichzelf en zijn omgeving uitwisselen. Hieruit kunnen kan geconcludeerd worden dat de efficiëntie van een communicatiemethode hem vooral ligt in de juiste werking van de gegevensuitwisseling en dat deze dus zo min mogelijk belemmerd moet worden.

In het hoofdstuk [[#2.6 - Criteria]] waren er een aantal criterium vastgesteld die in de vergelijking van de communicatiemethoden gebruikt zullen worden. Deze zijn daarentegen ook een perfecte opsomming om uit leggen wat efficiëntie betekent in de context van communicatiemethoden.

Een aspect wat niet vergeten moet worden, is latency. Latency word vaak onderschat hoe belangrijk het kan zijn. Robots worden in real-time bestuurd, wat betekent dat commandos binnen een bepaalde deadline uitgevoerd moeten worden. Als deze deadline in bijvoorbeeld een robotarm niet word behaald, kan dat tot schokkerige bewegingen leiden (Enner, 2016).

Daarnaast moet een communicatiemethode ook betrouwbaar/consistent zijn. Des te meer berichten correct aankomen des te beter. Als er teveel berichten niet aankomen kan dit tot nadelige gevolgen leiden in de vloot. Een robot is immers constant aan het communiceren met andere vlootgenoten en deze data moet consistent zijn. (_Coordinated Multi-robot Exploration_, 2005) (Yan et al., 2013).

Naar mate een een robotvloot groeit in het aantal robots, stijgt ook het dataverkeer. Het schaalbaarheidsvermogen van een communicatiemethode of het zogenoemde “robot fleet management system” is cruciaal als je wilt dat een robotvloot optimaal blijft werken. (_A Review Of Robot Fleet Management_, 2025)
![[Vault-data/Attachments/Hoofdvraag 8 V2 robot fleet management.png]]
*Figuur 2: Een robot fleet management loop (A Review Of Robot Fleet Management, 2025)*

Verder is het efficient gebruiken van de computer resources ook een grote bepalende factor. Als een robot’s acties belemmerd word doordat processen moeten wachten op vrije cpu-tijd of geheugen, staat de hele robot te wachten of zelfs helemaal stil. (Meertens, 2019) en als de robot leeg is, rijd deze al helemaal niet meer.

Tot slot kan de afhankelijkheid van een server de efficiëntie van een communicatiemethode beïnvloeden. Een centraal punt van communicatie kan leiden tot een bottleneck of single point of failure. Als er dus een centrale server aanwezig is, moet deze betrouwbaar zijn en tegen het drukke dataverkeer kunnen.

Dus samengevat kan een communicatiemethode gezien worden als efficient als deze een lage latency heeft, betrouwbaar is berichten overdracht, schaalbaar is, efficient kan omgaan met computer resources en is of niet afhankelijk van een server, of heeft een server die betrouwbaar is in zijn opereren binnen een robotvloot.

## 3.3 - Deelvraag 3
> ***“Welke communicatiemethoden zijn mogelijk binnen de restricties van de robothardware?”***

Er zijn meerdere protocollen die robot communicatie ondersteunen, maar ze zijn niet allemaal geoptimaliseerd voor batterij-gevoede robots. 
hiervoor zijn gespecialiseerde communicatieprotocollen gemaakt, zoals MQTT-SN en CoAp. MQTT daarentegen is ook zeer geschikt voor een robotvloot door de ondersteuning van een groot aantal apparaten (Amaran et al., 2015). 

### CoAP
**Co**nstrained **A**pplication **P**rotocol (CoAP) is een UDP-gebaseerd protocol gemaakt voor microcontrollers met lage ROM en RAM, ook wel constrained nodes genoemd (_RFC 7228: Terminology For Constrained-Node Networks_, z.d.-b). Het protocol is ontworpen voor machine-to-machine (M2M) applicaties, zoals smart energy of de automatisering van gebouwen (_RFC 7252: The Constrained Application Protocol (CoAP)_, z.d.). 
CoAp voegt maar 4 bytes toe aan de applicatie laag en gebruikt Representational State Transfer (REST). Hierdoor is het makkelijk te gebruiken met HTTP zonder dat er een complexe vertaler nodig is. Ten slotte ondersteunt CoAp ook een “Piggybacked Response”, wat betekent dat een ACK message meegestuurd kan worden met een response bericht, wat communicatie verder vermindert. (_A Comparison Of Lightweight Communication Protocols in Robotic Applications_, 2015).

### MQTT
Message Queuing Telemetry Transport, of MQTT, is een lichtgewicht subscriber-publisher protocol gemaakt voor IoT apparaten, cloud applicatie en robot vloten (Wikipedia contributors, 2025). MQTT bestaat uit 2 bestanddelen: een message broker(server) en een aantal clients. Clients sturen berichten naar een “topic” op de broker, die dan weer doorgestuurd wordt naar alle clients die een subscription hebben naar dit topic. 

MQTT werkt op drie verschillende modes: QoS 0, 1 en 2. QoS staat voor Quality of Service. QoS 0 stuurt een pakketje zonder te checken of deze aan komt. QoS 1 checked 1 keer of een pakketje is aangekomen door middel van een MQTT ACK en QoS 2 zorgt ervoor dat een pakketje maar 1 keer is verstuurd. Daarentegen werkt MQTT over TCP, wat op een lager niveau nog steeds een ACK terug stuurt.

MQTT is gemaakt om een groot aantal berichten per seconde te kunnen verwerken zonder grote vertraging. Vergeleken met HTTPS, is MQTT 10% meer stroom-efficient dan HTTP en kan het 10 keer zoveel meer berichten sturen binnen een uur (_A Comparison Of Lightweight Communication Protocols in Robotic Applications_, 2015).

![[Vault-data/Attachments/Hoofdvraag 8 V2 mqtt.png]]
*Figuur 3: Een MQTT protocol diagram (What is MQTT (MQ Telemetry Transport), 2025)*

### MQTT-SN
Message Queuing Telemetry Transport For Sensor Nodes (MQTT-SN) is een variant van MQTT dat gefocust is op constrained devices. In tegenstelling tot MQTT kan MQTT-SN ook communiceren over UDP, waardoor het niet een handshake nodig heeft om berichten te sturen. Hier naast heeft MQTT-SN een speciale gateway en forwarder waarin MQTT-SN packets worden omgezet naar standaard MQTT packets. Hierdoor kunnen MQTT-SN en MQTT toch nog met elkaar communiceren als dat nodig is (_A Comparison Of Lightweight Communication Protocols in Robotic Applications_, 2015).

Al 3 van deze protocollen zijn zeer geschikt voor een robotvloot door of ervoor gemaakt te zijn, of omdat het erg schaalbaar is.

## 3.4 - Deelvraag 4 (MCA)
> ***”Welke communicatiemethode is het meest geschikt binnen de restricties van deelvraag 1 - 3”***

In dit onderdeel word er met behulp van een Multi Criteria Analyse (MCA) en de gevonden informatie beschreven in deelvraag 1 - 3 een meest efficiënte communicatiemethode gekozen.

De MCA zal als meetbaren waarden de criteria besproken in [[#2.6 - Criteria]] gebruiken. De scores zijn gebaseerd op **Amaran et al. (2015)** (_A Comparison Of Lightweight Communication Protocols in Robotic Applications_, 2015) en de voorheen beschreven informatie.
### 3.4.1 - Wegingen
De criteria worden allemaal rond het zelfde aantal gewogen, alleen zijn server afhankelijkheid en latency iets minder belangrijk, omdat een server geen grote impact heeft en latency (zoals eerder besproken) niet op en top snel hoeft te zijn.

Daarentegen worden schaalbaarheid en resource gebruik zwaarder gewogen omdat een robotvloot duurzamer is als deze minder hoeft op te laden en een goed schaalbare communicatiemethode de druk van een groeiende vloot goed moet kunnen weerstaan.
- **Latency**: 15%
- **Betrouwbaarheid**: 20%
- **Schaalbaarheid**: 25%
- **Resource gebruik**: 25%
- **Server afhankelijkheid**: 15%
### 3.4.2 - MCA Tabel
De scores die zijn gegeven zijn een mix van de vergelijkingen beschreven in _A Review Of Research in Multi-robot Systems_, 2012, de informatie die al is beschreven in dit onderzoek en mijn persoonlijke interpretatie van deze 2 dingen.


*Tabel 1: Een multi-criteria analyse tabel*

| Methode | Latency | Betrouwbaarheid | Schaalbaarheid | Resource gebruik | Server afhankelijkheid |
| ------- | ------- | --------------- | -------------- | ---------------- | ---------------------- |
| MQTT    | 2       | 5               | 4              | 2                | 2                      |
| MQTT-SN | 4       | 4               | 3              | 5                | 3                      |
| CoAP    | 3       | 4               | 3              | 5                | 5                      |
#### 3.4.2.1 - Toelichting
- Latency:
	MQTT-SN is sneller dan CoAP bij het versturen van dezelfde payload over UDP. MQTT heeft een grotere vertraging doordat het over TCP moet communiceren.
- Betrouwbaarheid:
	Alle communicatiemethoden hebben een ACK response systeem, maar MQTT heeft daar bovenop nog een Quality of Service systeem waardoor deze net iets hoger scored. 
- Schaalbaarheid:
	MQTT is een protocol gemaakt voor grotere systemen en kan daardoor een grotere robotvloot aan. MQTT-SN en CoAp zijn gemaakt voor klein tot middelgrote netwerken, waardoor ze iets lager scoren.
- Resource gebruik
	Doordat MQTT gemaakt is voor grotere systemen en omdat het een broker vereist gebruikt het meer stroom, CPU- en Geheugen capaciteit. MQTT-SN en CoAP zijn zeer lichtgewicht en voegen minimale overhead toe.
- CoAp kan zonder centrale server opereren, waardoor de afhankelijkheid het laagst is. MQTT-SN heeft technisch gezien geen server zelf nodig door een gateway, maar moet uiteindelijk met een MQTT broker server verbinden. MQTT kan helemaal niet opereren zonder server en krijgt daarom de laagste score.

#### 3.4.2.2 - Score telling MCA
Als alle scores opgeteld worden op basis van de bovenstaande wegingen en tabel komt er de volgende score uit:
```
MQTT    = 2*0.15 + 5*0.2 + 4*0.25 + 2*0.25 + 2*0.15 = 3.10
MQTT-SN = 4*0.15 + 4*0.2 + 3*0.25 + 5*0.25 + 3*0.15 = 3.85
CoAP    = 3*0.15 + 4*0.2 + 3*0.25 + 5*0.25 + 5*0.15 = 4.00
```
Hieruit kan geconcludeerd worden dat CoAP het beste scoort op basis van de opgestelde criteria en wegingen.
# 4 - Conclusie
De hoofdvraag van dit onderzoek luid:
> “*Welke communicatiemethode is het meest efficiënt voor gegevensuitwisseling tussen robots?*”

Uit dit onderzoek komt naar voren dat, alhoewel alle opties geschikt zijn, CoAp de meest efficiënte communicatiemethode is voor gegevensuitwisseling tussen robots.

Door zijn lage latency, betrouwbare communicatie, acceptabele schaalbaarheid, uitermate goede efficiëntie als het gaat om resource gebruik en geen server afhankelijkheid, is het de beste optie als je een robotvloot wilt laten communiceren.
## 4.1 Aanbevelingen
Door dit onderzoek heen kwamen er een aantal punten aan het licht wat ik de toekomst aangepast kan worden om dit onderzoek accurater of relevanter te maken:
1. Houd rekening met de beveiliging van een communicatiemethode
	De veiligheid van een communicatiemethode kan de deciding factor zijn in sommige situaties waar de integriteit van informatie cruciaal is.
2. Latency meer naar de voorgrond brengen.
	Aan het begin van dit onderzoek was er vast gesteld dat latency niet een als te grote rol speelt in een robotvloot. Nu was deze aanname aangehouden tijdens dit onderzoek, maar uiteindelijk kwamen uit de onderzoeken voort dat dit niet helemaal klopt. Latency moet in het vervolg meer rekening mee gehouden worden.

# 5 - Reflectie
Als ik terug kijk naar dit onderzoek is het een stuk beter gegaan dan de eerste keer. Naast dat er veel meer informatie in staat, is er dit keer ook meer diepgang in de bronnen en heb ik mijzelf meer uitgedaagd om naar academische informatie te zoeken. 

Ik ben tevreden met de structuur en hoeveelheid informatie die ik heb verzameld. Dit voelt echt meer als een officieel onderzoek en minder als een school opdracht. Naarmate ik dit onderzoek uitvoerde leerde ik meer over communicatiemethoden en zag ik zelfs patronen ontstaan, met dat verschillende losse onderzoeken het over hetzelfde onderwerp en punt hadden.

Een puntje waar ik vooral moeite mee had daarentegen was het vinden van informatiebronnen, dus als verbeterpunt neem ik mee dat ik vooral meer moet uitzoeken hoe je het beste informatie kan vergaren. Natuurlijk zal het hele onderzoek.

De reproduceerbaarheid van dit onderzoek is hoog, met de beschreven search queries, deelvragen die je leiden door de stappen in het onderzoek en opgestelde criteria om het onderzoek af te bakenen, die allemaal leiden tot een gestroomlijnd onderzoek die andere mensen ook kunnen uitvoeren. Hoewel ik bij de MCA een deel zelf kritisch nadenken heb toegepast, is de rest van de informatie die hier geschreven staat gevonden in onderzoeken met voornamelijk google scholar.

# 6 - Verantwoording gebruik AI-assistent
In dit document is geen gebruik gemaakt van een AI-assistent.
# 7 - Bronnenlijst
Raspberry Pi Foundation. (z.d.). _Raspberry PI 4 Model B Specifications_. https://www.raspberrypi.com/products/raspberry-pi-4-model-b/specifications/.

Gielis, J., Shankar, A., & Prorok, A. (2022). A Critical Review of Communications in Multi-robot Systems. _Current Robotics Reports_, _3_(4), 213–225. https://doi.org/10.1007/s43154-022-00090-9

_A review of research in multi-robot systems_. (2012, 1 augustus). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/6304778

_Coordinated multi-robot exploration_. (2005, 1 juni). IEEE Journals & Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/1435481

Reynolds, C. W. (1987). Flocks, herds and schools: A distributed behavioral model. _Symbolics Graphics Division_, 25–34. https://doi.org/10.1145/37401.37406

Enner, F. (2016, 20 september). _A Practical Look at Latency in Robotics : The Importance of Metrics and Operating Systems_. Software For Robots. https://ennerf.github.io/2016/09/20/A-Practical-Look-at-Latency-in-Robotics-The-Importance-of-Metrics-and-Operating-Systems.html

Yan, Z., Jouandeau, N., & Cherif, A. A. (2013). A Survey and Analysis of Multi-Robot Coordination. _International Journal Of Advanced Robotic Systems_, _10_(12). https://doi.org/10.5772/57313

_A Review of Robot Fleet Management_. (2025). IEEE Journals & Magazine | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/11072173

Meertens, R. (2019, 2 november). iRobot’s Experience in Running ROS2 on Linux-Based Embedded Platforms. _InfoQ_. https://www.infoq.com/news/2019/11/ros2-linux-embedded-platform

Amaran, M. H., Noh, N. A. M., Rohmad, M. S., & Hashim, H. (2015). A Comparison of Lightweight Communication Protocols in Robotic Applications. _Procedia Computer Science_, _76_, 400–405. https://doi.org/10.1016/j.procs.2015.12.318

_RFC 7228: Terminology for Constrained-Node Networks_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7228

# 6 - Verantwoording gebruik AI-assistent
In dit document is geen gebruik gemaakt van een AI-assistent.
# 7 - Bronnenlijst
Raspberry Pi Foundation. (z.d.). _Raspberry PI 4 Model B Specifications_. https://www.raspberrypi.com/products/raspberry-pi-4-model-b/specifications/.

Gielis, J., Shankar, A., & Prorok, A. (2022). A Critical Review of Communications in Multi-robot Systems. _Current Robotics Reports_, _3_(4), 213–225. https://doi.org/10.1007/s43154-022-00090-9

_A review of research in multi-robot systems_. (2012, 1 augustus). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/6304778

_Coordinated multi-robot exploration_. (2005, 1 juni). IEEE Journals & Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/1435481

Reynolds, C. W. (1987). Flocks, herds and schools: A distributed behavioral model. _Symbolics Graphics Division_, 25–34. https://doi.org/10.1145/37401.37406

Enner, F. (2016, 20 september). _A Practical Look at Latency in Robotics : The Importance of Metrics and Operating Systems_. Software For Robots. https://ennerf.github.io/2016/09/20/A-Practical-Look-at-Latency-in-Robotics-The-Importance-of-Metrics-and-Operating-Systems.html

Yan, Z., Jouandeau, N., & Cherif, A. A. (2013). A Survey and Analysis of Multi-Robot Coordination. _International Journal Of Advanced Robotic Systems_, _10_(12). https://doi.org/10.5772/57313

_A Review of Robot Fleet Management_. (2025). IEEE Journals & Magazine | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/11072173

Meertens, R. (2019, 2 november). iRobot’s Experience in Running ROS2 on Linux-Based Embedded Platforms. _InfoQ_. https://www.infoq.com/news/2019/11/ros2-linux-embedded-platform

Amaran, M. H., Noh, N. A. M., Rohmad, M. S., & Hashim, H. (2015). A Comparison of Lightweight Communication Protocols in Robotic Applications. _Procedia Computer Science_, _76_, 400–405. https://doi.org/10.1016/j.procs.2015.12.318

_RFC 7228: Terminology for Constrained-Node Networks_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7228

_RFC 7252: The Constrained Application Protocol (CoAP)_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7252

_A Comparison of Lightweight Communication Protocols in Robotic Applications_. (2015). Sciencedirect.com. https://www.sciencedirect.com/science/article/pii/S1877050915038193?via%3Dihub


‌
_RFC 7252: The Constrained Application Protocol (CoAP)_. (z.d.). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc7252

_A Comparison of Lightweight Communication Protocols in Robotic Applications_. (2015). Sciencedirect.com. https://www.sciencedirect.com/science/article/pii/S1877050915038193?via%3Dihub


‌