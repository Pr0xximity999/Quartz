---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: false
---
bus# Beschrijving Bedrijf
- Billy Bonka is de grootste chocoladebedrijf van Nederland.
- Produceert in het binnen- en buitenland
- Heeft een speciaal geheim chocoladerecept
- Familie is niet meer actief betrokken bij het dagelijks bestuur
- Locatie bezit:
	- Chocoladefabriek
	- Kantoren
	- Magazijn en distributievoorzieningen
- Werknemers: 250 totaal
	- Fabriekswerkers
	- 50 kantoormedewerkers
	- 10 vrachtwagenchauffeurs
- Omzet:
	- Vorig jaar 200 miljoen euro
	- Dit jaar hetzelfde verwacht
	- Per dag ligt er ongeveer 8 miljoen euro aan chocolade in het magazijn
- Cyber:
	- Productiesysteem word centraal door een IT-systeem aangestuurd
	- Digitale transitie en cyberveiligheid is niet aan bod gekomen door de recente switch
	- Alle gevoelige bedrijfsgegevens staan op de B schijf
		- Bijna alle medewerkers kunnen deze inizien
	- Alle personeelsgegevens staan op de M schijf
	- Recentelijk een security privacy officer gestart
		- Deze is vooral bezig geweest met het ontwikkelen van Informatie beveiliging & Privacy-strategie en bijbehorende plannen
		- Alleen een crisis-organogram is gemaakt
			- Staat de strategische en operationele crisisteam in
	- Geen cyberverzekering

![[Vault-data/Attachments/Challenge - Tabletop.png]]

# Rollen
## Algemeen directeur
Taak:
- Rapporteert direct aan Billy Bonka.

Verantwoordelijk voor:
- strategische en operationele leiding
- ontwikkeling en implementatie van bedrijfsstrategieën
- het beheren van dagelijkse operaties
- het toezicht houden op productie, kwaliteitscontrole, logistiek en financiën

Heeft kennis van:
- marketing- en verkoopstrategieën 
- wetten en duurzaamheidspraktijken.


In het crisisteam:
- Voorzitter van het crisisoverleg
- Leidt en coördineert de gesprekken om snel en efficient te verlopen
- Waarborgt de communicatie, taakverdeling en beslissingen
- Bewaakt voortgang, acties en rapportage aan belanghebbers

## Financieel directeur
Taak:
- Rapporteert direct aan de algemeen directeur en raad van bestuur
- Werkt nauw samen met het managementteam
- geeft leiding aan de financiële afdeling
- Financieel adviseur van langetermijnstrategieën

Verantwoordelijk voor:
- Financieel beheer
- Strategische planning
- Ontwikkeling en implementatie van financiële strategieën
	- Waarborging van winst en groei
- Toezicht op:
	- Financiële rapportage
	- Budgettering
	- Risicoanalyse

Heeft kennis van:
- Optimaliseren van controleprocedures
- Ondersteunen van investeringsbeslissingen
- Financiën

## Operationeel Directeur
Taak:
- Rapporteert rechtstreeks aan de algemeen directeur
- Bevorderen van een veilige en efficiënte werkomgeving
	- Continue verbetering en innovatie

Verantwoordelijk voor:
- Efficiënt beheer van operationele processen
- Houd toezicht op:
	- Productie
	- Logistiek
	- kwaliteitscontrole
	- logistiek
	- engineering
	- onderhoud
	- supply chain
- Producten moeten op tijd en met hoge kwaliteit geleverd worden

Heeft kennis van:
- Ontwikkeling en implementatie van operationele strategieën
	- Lage kosten, hoge productiviteit
- Nauwe samenwerking met andere afdelingen om operationele doelstellingen de aligneren met de bedrijfsstrategie

## Manager HR & Communicatie
Taak:
- Rapporteert rechtstreeks aan de algemeen directeur
- Nauwe samenwerking met het managementteam
- Bevordering van een positieve en productieve werkcultuur
- Versterken van merkidentiteit


Verantwoordelijk voor:
- Ontwikkelen en implementeren van personeelsbeleid
- Interne externe communicatie van het bedrijf
- Werving, training en ontwikkeling van medewerkers
- Prestatiebeheer, arbeidsrelaties en compliance met arbeidswetgeving.
- Vormgeving en uitvoeren van communicatiestrategieën
	- voor het overbrengen van bedrijfsbelangen, extern en intern

In een crisisteam:
- Beheren van crisiscommunicatie

## Manager IT
Taak:
- Rapporteert rechtstreeks aan de algemeen directeur
- Nauwe samenwerking met meerdere IT en OT leveranciers
	- Voor het integreren van IT oplossingen binnen de organisatie

Verantwoordelijk voor:
- Ontwikkeling en implementatie van IT-strategieën voor bedrijfsdoelen
- Een klein team IT’ers binnen de organisatie
- Toezicht houden op IT-projecten om voor een verbetering van efficiëntie en productiviteit
- IT budgetbeheer
- Oplossen van technische problemen
- Digitale transformatie en innovatie

## Security & Privacy Officer
Taak
- Rapporteert rechtstreeks aan de algemeen directeur
- Nauwe samenwerking met IT en andere afdelingen
- Aanspreekpunt voor alle zaken m.b.t. informatiebeveiliging en privacy

Verantwoordelijk voor:
- Ontwikkelen en implementeren van informatie beveiliging en privacybescherming
- Naleving van wet- en regelgevingen rondom gegevensbescherming
- Het uitvoeren van risicoanalyses voor het identificeren van kwetsbaarheden om deze dan op te lossen

Heeft kennis van / houd toezicht op:
- Bedrijfsmaatregelen en protocollen
	- om de integriteit, beschikbaarheid en vertrouwelijkheid te waarborgen (van klant en organisatie)
- Zorgt voor bewustzijn en training in het gebied van privacy en beveiliging

In een crisisteam:
- Ondersteunt de beperking van reputatieschade bij een datalek
- Onderhoud contact met Autoriteit Persoonsgegevens (AP)
- Bij een datalek is hij verplicht om dit binnen 72 uur te melden bij het AP

# Architectuur en Cyberveiligheid
## Applicaties
- Smeltlijn:
	- SIMATIC S7-1200 PLC
	- Gemonitord en eventueel stop-baar door operator
- Gietlijn:
	- SIMATIC S7-1200 PLC
	- Gemonitord en eventueel stop-baar door operator
- Engineering station
	- Kan de PLC’s programmeren
	- Productie kan gevolgd en bestuurd worden
	- OS: Windows 10
- GBS Station
	- Engineers kunnen inloggen op gebouw beheer systeem
		- HVAC en koelingsysteem
		- Systemen aanpassen
	- OS: Windows XP
- Supervisor station
	- alle lijnen monitoren
	- overbrugging naar engineer station
	- OS: windows 10
- NAS
	- PLC backups
	- proceshistorie opgeslagen
	- Synology 2023 NAS
- Gateway
	- Verbinding naar de buitenwereld
	- kan vanuit buiten op ingelogt worden
		- jumphost
	- OS: Windows server 2022
- GBS Server
	- Hart van de HVAC en koeling
	- OS: Windows server 2012
- HVAC
	- aparte Koeling en luchthandeling systeem
- Koeling
	- Eigen besturing; door leverancier 24/7 gemonitord
- Brandmeldcentrale
	- Detecteert brand; activeert sprinklers
	- Kan gemonitord worden
	- heeft internetverbinding voor brandweer
	- Is oud; tijdens het bouwen van de fabriek geinstalleerd
- Datacenter
	- Serverhost
	- Heel het internet van de organisatie gaat hier doorheen
- FileShare B-disk
	- Bedrijfgegevens; iedereen kan die inzien in de organisatie
- FileShare M-disk
	- Persoonsgegevens; beperkt afgeschermt
- Authenticatieserver
	- Inloggen voor alle werknemers
- Backup server
	- belangrijke backups van werkplekken en servers
- Operator station
	- 2 operator plekken houden zicht op de productielijnen vanuit het kantoor
	- word niet gebruikt om te sturen, tenzij je anders inlogt
- Werkplek laptops
	- Standaard laptops met MS office
	- Gebruikt fileshares
	- andere apps word door IT geinstalleerd

## Processen
### Productie & Operations
- Inkoop van grondstoffen
- Verwerking van de productielijn
- Kwaliteitscontroles, voedselveiligheid en receptuur
- Gebruikt PLC’s, SCADA systemen
- *zonder productie stopt de levering van chocolade volledig*

### Logistiek & distributie
- Vervoeren van grondstoffen en eindproducten
- Voorraad beheer, transportplanning en samenwerken met logistieke partners
- *Verstoring zorgt voor lege schappen en omzetverlies*

### Orderverwerking & Klantcommunicatie
- Ontvangen, verwerken en bevestiging van klantbestellingen
- Communicatie met retailers
- CRM-systemen en orderportalen spelen een rol hier
- *Verstoring zorgt voor geen orders en dus reputatie- en omzetverlies*

### Financieel & Administratief
- Boekhouding, facturatie en betaling aan leveranciers
- Salarissen voor werknemers
- Rapportages, belastingaangiftes en naleving van financiële wetgevingen
- *Onderhoud liquiditeit en vertrouwen van personeel en partners*

### Hr & Personeelsbeheer
- Planning van personeelsroosters in de fabriek
- Salaris administratie, on-boarding en training van personeel
- Naleving van veiligheids- en hygiënevoorschriften
- *Verstoring zorgt voor vastlopende roosters en productieplanning en kan personeel niet goed ingezet worden*

### IT
- IT-systemen die bedrijfsvoer mogelijk maken
	- Voorraad en productieplanning
	- Klantbeheer
	- Email
	- Communicatieplatformen
	- Documentmanagement
	- Cybersecurity
- *Verstoring zorgt voor het stilzetten van alle essentiële processen voor coördinatie besluitvorming en continuïteit*

### Onderzoek & Ontwikkeling
- Ontwikkelen en testen van nieuwe recepten en producten
- Uitvoeren van proefproducties en verbeteren van al bestaande producten
- Is niet vitaal voor dagelijkse productie, maar wel cruciaal op langer termijn qua concurrentie productie en innovatiekracht
- *Verlies van R&D data of vertraging kan zorgen voor gemiste marktkansen en reputatieschade*

## Cybersecurity
- Info vanuit IT systeembeheerder
	- Systemen worden niet up-to-date gehouden
	- Backups zijn er, maar die zijn nooit getest of die teruggezet kunnen worden.
	- Multi-factor authenticatie is niet in gebruik
	- Security training is nonexistent
- CEO directeur
	- “Wij zijn een chocoladefabriek, geen bank” is een CRAZY statement
	- Het is duidelijk dat de CEO niet weet wat de omvang van een cyberaanval is
	- De termen NIS2 of ISO 27001 zeggen de CEO weinig
		- “IT regelt het wel”
	- Geld uitgeven aan security staat niet op de takenlijst
		- “het kost teveel”
		- “Mijn assistente heeft al mijn wachtwoorden, anders kom ik nergens in”
- Operator (productielijn)
	- gebruikt standaardwachtwoorden die iedereen kent
	- IT word eigenlijk niet ingelicht omdat dat teveel werk is
	- Waarschuwingen worden vaak genegeerd
		- “als ik alles moet lezen, staat de band stil”
	- Phishing word weggewuifd alsof er niks aan de hand is
	- Geen cybertraining gehad

# Opdracht
>[!important] Opdracht 2
>- Maak een Business Impact Analysis (BIA): Welke processen en systemen zijn vitaal voor Billy Bonka?
>- Ontwikkel een Business Continuity Plan (BCA) voor jullie als crisis team.
>- Besteed ook aandacht aan de interne dreigingen (insiders) en hoe de organisatie daartegen weerbaar kan zijn.

## Business Impact Analysis
Bij Billy Bonka staat de productie en distributie van chocolade centraal. Als de productie van chocolade stopt, stop alles. Daarentegen zijn er naast de centrale chocoladeproductie zijn er ook nog een ander aantal vitale processen:
- De orderverwerking: Het ontvangen, verwerken en bevestigen van klantbestellingen.
	- Verstoring van de orderverwerking zorgt ervoor dat orders niet gemaakt kunnen worden, wat voor order- en reputatieverlies zal zorgen.
- IT systemen: De IT systemen regelen alle communicatieve en digitale onderdelen van de fabriek, wat onder andere het klantbeheer, communicatieplatformen, voorraad en productieplanning en cybersecurity is.
	- Het stilzetten van dit zal dus ook tot een totale stilstand van operaties en communicatie zorgen

Hiernaast zijn er nog interne processen die niet inherent voor het stilzetten van productie of verkoop zorgt, maar wel voor problemen op langer termijn:
- Financieel & administratief: Boekhouding, facturatie en betaling aan leveranciers.
	- Hieruit worden leveranciers en personeel betaalt, en rapportages en belastingaangiftes vanuit geregeld
	- Een stilstand van financiële en administratieve zaken op langer termijn zorgt verstoring in vertrouwen vanuit klanten en personeel.
- Human Resources & Personeelsbeheer: Personeelsrooster planning, on-boarding en training van personeel.
	- Verstoring hierin kan voor vastlopende roosters en planningen zorgen, waardoor mensen niet goed ingezet kunnen worden.