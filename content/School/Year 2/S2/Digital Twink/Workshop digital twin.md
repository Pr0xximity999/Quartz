---
tags:
  - school/digital-twin
  - taal/nederlands
  - language/dutch
banner:
publish: true
---

# Wat is een digital twin(k)?
Een **digital twin** (digitale tweeling) is een dynamische, virtuele representatie van een fysiek object, proces, persoon of systeem. In tegenstelling tot een statisch 3D model is een digital twin via sensoren en data direct gekoppeld aan de werkelijkheid, waardoor het model in real-time meeverandert met zijn fysieke tegenhanger.

- **Real-time synchronisatie**: Door gebruik te maken van sensoren en [[|IoT]] wordt data uit de fysieke wereld continu naar het digitale model gestuurd.
- **2-Weg interactie**: Inzichten uit de simulatie kunnen vaak direct worden teruggestuurd naar het fysieke object om processen aan te passen of te optimaliseren
- **Levenscyclus**: een digital twin kan een object (process/systeem) volgen van het ontwerp een de productie tot aan het onderhoud en ontmanteling.

## In de praktijk
> Michael Ruijs - Verhoeven family of companies in oss

Michael werkt bij een bedrijf die verschillende productielijnen heeft rondom bakkerij en broodjes.

De productielijn bestond uit PC’s, PLC’s en ander dergelijke programmeerbare onderdelen. Het probleem is dat alle machines uniek zijn. Voor alle machines krijg je dus unieke code per lijn. Maar die machine komt er niet gelijk, daar moet je op wachten.

De software op de machines moet debugged worden. Dit wil je het liefst destijds al wel doen, ook al staat de machine er nog niet. De oplossing hiervoor zijn 3D simulaties. 

3D simulaties kunnen van te voren al worden getest en geprogrammeerd waardoor je veel tijd en geld bespaard. Het probleem is dat je veel rekenkracht nodig hebt om die hele simulatie real-time te draaien. De gekoppelde PLC verwacht dat wel waardoor, samen met andere problemen, het niet synced liep met de simulatie.

Dezer dag is dit wel verbeterd. Simulaties en alles zijn een stuk sneller en accurater, waardoor een digital twin veel meer haalbaar is.

## Voorbeelden digital twin
- Schiphol: BIM model terminal
- Breda: http://bredata.nl/project/de-kansen-van-een-digital-twin/
- XR4Industry: https://www.youtube.com/watch?v=C-A_y4s3Ibw
- Holmatro: Digital twin van een controller, zodat firmware updates (eerst) softwarematig getest kunnen worden, afstudeerproject, 2024
- Disney: https://www.youtube.com/watch?v=-L8OFMTteOo

# Typen toepassingen
- Training van personeel
- Voorspellen en scenario’s
- Ontwerpen & Ontwikkelen
- Visualiseren van processen
- Optimaliseren & verbeteren
- Trainingen
- Marketing & Sales
- Onderhoud

# Wel of niet een Digital Twin?
Wanneer is het de moeite en inspanning waard om een DT te maken?

Voordelen versus uitdagingen/kosten van een simulatie:
- 3D model en visualisatie
- Simulatie en begrijpen werking fysiek asset

# Wat zijn de (globale) eisen voor je Digital Twin?
Als een aan een digital twin project begint moet je eerst denken aan het volgende:
- Wat wil ik bereiken met de simulaite? (**doel**)
- Als je het doel hebt, hoe betrouwbaar, precies en gedetailleerd moeten diens aspecten zijn? (**fidelity**)
- Als je het doel hebt, wat moet de digital twin kunnen? (**Simulatie scenarios** / **Vereiste features**)
- De omgeving zoals externe systemen en interfacing

## Doelen
#nog-af-maken 

## Fidelity
#nog-af-maken 

## Determinisme
#nog-af-maken

## Platform
op welke platformen gaat je digital twin draaien? Denk hierbij aan de doelen en de omgeving waarin de DT gebruikt gaat worden
- Web
- PC
- Mobile

Zijn er koppelingen nodig met externe systemen?
- GIS
- ROS, OPC UA, SCADA, MQTT, REST API

Welke manier/mate van interfacing met externe systemen is nodig?
- stub ←→life, realtime-connection

# Opdracht: Onderzoek een DT
Zoek op internet een aansprekend oorbeeld van een digital twin.

Bereid een pitch (korte presentatie van 5 minuten) voor waarin je verteld:
- Wat is het domein / de context en welk probleem gaat de simulatie oplossen?
- Wat wordt gesimuleerd en voor welke doelen?
- Welke niveau van fidelity is er nodig voor de 3D visualisatie, simulatie en (eventueel) machine learning?
- Beschrijf 1 belangrijk simulatie scenario
- Welke simulatie features verwacht je hierbij?
- Is determinisme belangrijk en waarom?
- Welk target platform is het meest logisch
- Moet de simulatie real-time communiceren met externe systemen of kan de interfacing ook gesimuleerd worden door bijvoorbeeld een stub, preset data of een data export?

# Sources
- [De kansen van een digital twin - Bredata](http://bredata.nl/project/de-kansen-van-een-digital-twin/)
- [XR4Industry - Youtube](https://www.youtube.com/watch?v=C-A_y4s3Ibw)
- [Disney bringing olaf to life - Youtube](https://www.youtube.com/watch?v=-L8OFMTteOo)