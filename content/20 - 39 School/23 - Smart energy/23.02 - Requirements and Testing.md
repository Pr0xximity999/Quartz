---
tags:
  - school/smart-energy
  - school/sofware-dev
  - language/dutch
  - taal/nederlands
---
> **Requirement**: Hetgeen wat nodig is voor de software die je moet maken
> **Testing**: Het testen van je software is cruciaal


# Agenda
- lesdoelen
- requirements Engineering
- Plaatsing binnen SDLC
- Testing

# lesdoelen
Je leert requirements herkennen, wat de requirements zijn en hoe je tot de requirements kan komen. Je leert ook hoe je requirements kunt valideren.

## Wat zijn requirements volgens jou?
> **Osiris**: een cijfer registratie platform

Wat zou een software requirement zijn voor osiris?

- Dat je alleen je cijfers in kan zien
- Dat leeraren alleen zelf zijfers kan maken / leerlingen kunnen hun cijfers niet aanpassen
- Cijfers moeten opgeslagen kunnen worden
- Studenten moeten overzicht van alle vakken hebben
- Website moet live updaten
- Cijfers moeten in een database opgeslagen kunnen worden

Sommige van deze zijn functioneel, en sommige zijn wel functionele requirements


# Requirements Engineering
> **Requirements engineering**: Het defineren, documenteren en onderouden van requirements gedurentde de levenscyclus van de ontwikkeling van een (informatie)systeem. 
> Hierbij kunnen veschillende belangen spelen vanuit meerdere stakeholders.

# Requirements Opschrijven

## De SMART-notatie
Requirements worden opgeschreven volgens de volgende principes:
> **Smart**: 
> - **Specifiek**: Je moet de instructies specifiek opschrijven zodat een gebruikter het begrijpt.
> - **Meetbaar**: Hoe snel iets moet gebeuren, kan soms niet meetbaar zijn ("Zo snel mogelijk", kan 1 uur zijn, kan 2 minuten zijn)
> - **Testbaar**: De software moet testbaar kunnen zijn om te kijken of het werkt
> - **Acceptabel**: De requirements moeten wel acceptabel kunnen zijn
> - **Realistisch**: De requirements moeten mogelijk zijn, te doen
> - **Tijdsgebonden**: De requirements moeten binnen een bepaalde tijd behaald worden.


## Vermijd vaagheid
Gebruik geen termen zoals "gebruiksvriendelijk" of "snel" zonder te specificeren wat dit preceis betekent. Elke requirement moet ondubbelzinnig zijn

## Zorg voor traceerbaarheid
Koppel elke requirement aan specifieke bedrijfsdoelen of use cases. Dit zijn altijd de belangen van één of meerdere stakeholders. Dit maakt het eenvoudiger om te verifiëren en te volgen wie wat wil.


## Voorbeeld

### Functioneel of niet functioneel
>*"Het systeem moet middels een zoekopdracht naar een ISBN nummer een boek uit de collectie kunnen selecteren en weergeven"* 

Iets zoals "Als ik x doe, dan gebeurt dit" is functioneel "Het moet binnen 2 seconden gebeuren" is niet functioneel.


# Proces van Requirements Engineering

## Requirement Elicitation
Je gaat informatie over de requirements ophalen. Dit kan door bijvoorbeeld een meeting af te spreken met een stakeholder, of wat onderzoek te doen bij de stakeholders/gebruikers.

## Requirements Analysis
Je gaat de requirements documenteren. Een stakeholder wilt een ding wel, maar een andere stakeholder wilt dat niet. Je kijkt naar tegenstrijdigheden, kijkt naar de belangens, en probeert het conflict op te lossen in bijvoorbeeld een meeting.

## Requirements Specification
Je gaat de requirements vastleggen, en kijken naar de (acceptatie)criteria. Als je deze criteria hebt opgesteld, dan kan je de requirements tests opzetten.

## Requirements Validation
/
## Requirements Management
Je werkt de requirements bij afhankelijk van de meningen van stakeholders (soms gebeurt dit binnen de development cycle). Je documenteert dit en zorgt ervoor dat de requirements up to date blijven

## Smart energy
In het algemeen worden 3 aspecten behandeld:
1. Hoe gaat het nieuwe systeem er uit zien?
	- wireframes. Wireframes zijn blanco layouts van de applicatie hoe je kan zien hoe het eruit gaat zien.
2. Welke functionaliteiten / functies gaat het systeem bevatten?
	- Use cases, scenario's, specificaties. Je maakt een diagram van hoe de gebruikers/stakeholders met het systeem omgaan.
3. Welke gegevens zijn van belang in het systeem?
	- Entity Relationship Diagram (ERD). Bijvoorbeeld: een student of vak is een entiteit. Je gaat dan laten zien hoe deze data met elkaar omgaat (de relatie)

# Belang an Requirements Engineering
- Minder fouten in requirements en daardoor minder fouten na ingebruikname
JE wilt duidelijkheid in de opdracht, dat het pakket voldoet aan de eisen van de klant

- Sneller ontwikkeltraject en minder herstelwerk gedurende het traject
Miscommunicatie zorgt voor problemen onder het ontwikkelen als iets niet naar wens is


# Software Development Life Cycle(SDLC)
![[1_GU-YWDqM-ZljYHGs1iDNPg.jpg]] 

- Plan van aanpak
	- Planning
- Functioneel ontwerp
	- Analysis
- Technisch ontwerp
	- Design
- Source code
	  Implementation
- Test Plan
	- Testing & integration
- Deployment plan
	- Maintenance

Deze cirkel blijft door gaan. Je onderhoud je software en voegt er dingen aan toe of past dingen aan.




# Testen is...
> **Testen**:Systematisch controleren of een programma werkt zoals verwacht, door bugs op te sporen en de kwaliteit en betrouwbaarheid van de sotware waarborgen

## Verschillende vormen van testen

## Functionele testen
- Unit tests
- Integratietests
- Systeemtesten
- Acceptatietesten
- Regressietesten

## Niet-fuctionele testen
- Belastbaarheid testen
- Stresstesten
- Penetratietesten

# Testplan
Er komt een testplan voor de studenten vanuit school.

Zo'n document kan er zo uit te komen zien:
- Inleiding
- Testmethodologie(soorten tests)
- Hulpbronnen en omgeving
- testcases
- Rapportage en afronding
