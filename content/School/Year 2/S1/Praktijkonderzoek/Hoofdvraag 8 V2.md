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
	Een bericht wat soms niet door komt is geen probleem, maar dit moet niet te vaak gebeuren.
3. Schaalbaarheid
	Des te groter de vloot, des te meer load komt op het hele netwerk. De methode moet goed om kunnen gaan met het groeien van het netwerk.
4. Geheugen gebruik / CPU load
	Een raspberry pi 4 heeft niet als te veel geheugen, maar 1, 2, 4, of 8 GB (Raspberry Pi Foundation, z.d.). Dit onderzoek gaat uit van 8 gigabytes aan geheugen.
	Hier naast moet de belasting op de processor ook niet dusdanig veel zijn dat het het opereren van de robot belemmerd
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

Een aspect wat niet vergeten moet worden, is **latency**. 


1. Latency
	Al hoewel de vertraging in communicatie niet extreem cruciaal is voor dit onderzoek, word het wel meegenomen in deze criteria (al is dit wel met een lagere weging ten opzichte van andere criteria)
2. Percentage van succesvolle berichtoverdrachten
	Een bericht wat soms niet door komt is geen probleem, maar dit moet niet te vaak gebeuren.
3. Schaalbaarheid
	Des te groter de vloot, des te meer load komt op het hele netwerk. De methode moet goed om kunnen gaan met het groeien van het netwerk.
4. Geheugen gebruik / CPU load
	Een raspberry pi 4 heeft niet als te veel geheugen, maar 1, 2, 4, of 8 GB (Raspberry Pi Foundation, z.d.). Dit onderzoek gaat uit van 8 gigabytes aan geheugen.
	Hier naast moet de belasting op de processor ook niet dusdanig veel zijn dat het het opereren van de robot belemmerd
5. Server-afhankelijkheid
	Een centrale server draaien voor een robotvloot, op een robot of een aparte Raspberry pi, kan voor onnodige druk / gebruik van cruciale resources zorgen.


## 3.3 - Deelvraag 3

## 3.4 - Deelvraag 4 (MCA)

# 4 - Conclusie

## 4.2 Aanbevelingen
Door dit onderzoek heen kwamen er een aantal punten aan het licht wat ik de toekomst aangepast kan worden om dit onderzoek accurater of relevanter te maken:
1. Houd rekening met de beveiliging van een communicatiemethode
	De veiligheid van een communicatiemethode kan de deciding factor zijn in sommige situaties waar de integriteit van informatie cruciaal is.
2. Latency meer naar de voorgrond brengen (?)

# 5 - Reflectie

# # 6 - Verantwoording gebruik AI-assistent
In dit document is geen gebruik gemaakt van een AI-assistent.
# 7 - Bronnenlijst
Raspberry Pi Foundation. (z.d.). _Raspberry PI 4 Model B Specifications_. https://www.raspberrypi.com/products/raspberry-pi-4-model-b/specifications/.

Gielis, J., Shankar, A., & Prorok, A. (2022). A Critical Review of Communications in Multi-robot Systems. _Current Robotics Reports_, _3_(4), 213–225. https://doi.org/10.1007/s43154-022-00090-9

_A review of research in multi-robot systems_. (2012, 1 augustus). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/6304778

_Coordinated multi-robot exploration_. (2005, 1 juni). IEEE Journals & Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/1435481

Reynolds, C. W. (1987). Flocks, herds and schools: A distributed behavioral model. _Symbolics Graphics Division_, 25–34. https://doi.org/10.1145/37401.37406