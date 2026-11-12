---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: true
---

>[!important] Opdracht
>**Opdracht 1: Cyber Resillience Act (CRA)**
>- Verdeel de groep in een Audit en develop team.
>- Auditteam:
>	- Leg in je eigen woorden uit wat de CRA inhoudt
>	- Realiseer een vragenlijst om te toetsen of de software van het developmentteam voldoet aan de CRA en of hun eigen software veilig is.
>- Developmentteam:
>	- Kies met elkaar een software applicatie die je een keer hebt gemaakt
>	- Bereid de audit voor door de architectuur, ontwerpen en software code op orde te brengen.
>	- Evalueer of de software applicatie in deze staat veilig is.
>	- Welke secure-by-design principes jullie vooraf beter hadden moeten meenemen
>- Gezamelijk:
>	- Voer de audit uit met behulp van de vragenlijst en leg het resultaat en conclusie vast. Maak hiervan een paar slides voor de presentatie tijdens de terugkoppeling.
>	
>**Opdracht 2: Architecture Review & Design Requirements**
>- Kies met elkaar een software applicatie die je eerder hebt gerealiseerd.
>- Beschrijf de 3 belangrijkste design requirements die je in een nieuw project altijd zou meenemen om security by design te waarborgen.
>- Maak een architectuur review van jullie huidige software die en identificeer ten minste 2 designkeuzes die security verbeteren en die 2 risico’s opleveren. Motiveer met een onderbouwing waarom een keuze veilig of onveilig is. 
>**Opdracht 3: Security Evaulatie**
>- Kies met elkaar een software applicatie die jullie een keer eerder hebben gerealiseerd.
>- Voer een attack surface analyse uit: Maak een diagram van alle invoer/uitvoer punten en bepaal waar een aanvaller zou kunnen binnenkomen.
>- Maak een threat model en beschrijf 3-5 realistische dreigingen
>- Geef per dreiging aan welke maatregel je kan implementeren of welke maatregel je al heb geïmplementeerd. Lever zowel een ontwerp als een beargumenteerde toelichting van deze maatregelen.
>- Wat valt je op in de samenwerking tussen de technische en niet-technische studenten?
>- Maak van het resultaat een aantal slides voor de presentatie tijdens de terugkoppeling
>**Opdracht 4: Developer Security Training**
>- Kies met elkaar een software applicatie die je al eerder hebt gerealiseerd
>- Stel een voorstel van een ontwerp van een mini trainingsmodule (max 1 A4) op die toekomstige developers van jullie team kunnen volgen om veilig(er) te programmeren. Welke onderwerpen worden behandeld en waarom?
>- Welke secure coding practices moeten verplicht aan bod komen?
>- Hoe zorgen jullie dat het toepasbaar en meetbaar is in het project?
>- De module moet op maat zijn voor jullie softwarecontext, niet een generieke lijst.
>- Maak voor het resultaat een aantal slides voor de presentatie tijdens de terugkoppeling


# Intro
Wanneer is je software veilig? Kan je alleen inloggen met geldige credentials? Is het memory safe?

[[Kernel]]-level [[anti-cheat]] is echt notorious dat het een security issue is.

> “Soms is [[piracy]] terecht” \- Marcel

- Sanitation van je input is belangrijk als je [[remote code execution]] (RCE) wilt voorkomen
- Sandboxing - het afbakenen naar een speciale omgeving met limited access ([[docker|Docker]], [[flatpak|Flatpak]])

# Veilige software
Software is veilig als het de opgestelde security goals heeft bereikt. Deze goals zullen vaak de [[BIV/CIA]] zijn:
- Beschikbaarheid / Availability
	- Een server is beschikbaar en bereikbaar
- Integriteit / Integrity
	- Data is kloppend
- Vertrouwelijkheid / Confidentiality
	- Data komt alleen aan bij de mensen die het moeten zien

Deze goals, of doelstellingen beschrijven de eisen van het softwaresysteem op het gebied van de BIV. Security doelstellingen en eisen worden door een risicoanalyse inzichtelijk gemaakt

# Tegenstrijdige eisen
Veiligheid strijd meestal tegen iets: productiviteit, UX, gebruiksvriendelijkheid, etc…

Er zijn altijd afwegingen die gemaakt moeten worden. Strengere beveiligingsmaatregelen die slopen vaak andere aspecten van de eisen van een klant.

Om de juiste afwegingen te maken kun je de volgende aspecten doornemen:
1. Risicoanalyse
	- Voer een grondige risicoanalyse uit om te bepalen welke beveiligingsmaatregelen het meest kritieke zijn voor je organisatie.
2. Beveiligingsbeleid
	- Ontwikkel een evenwichtig beveiligingsbeleid dat rekening houdt met de verschillende trade-offs
3. Gebruikers- en stakeholdersinput
	- Betrek gebruikers en stakeholders bij het proces om een balans te vinden tussen de werkbaarheid en beveiliging
4. Kosten-baten analyse
	- Analyseer de kosten en baten van beveiligingsmaatregelen om te bepalen welke investeringen gerechtvaardigd zijn.
![[Vault-data/Attachments/3 - Secure Software Development.png|659]]

# Opstellen van de securityeisen (de must-haves)
Als je eisen voor beveiliging opstelt, moet je meerdere aspecten in overweging houden:
- Internationale (security) standaarden (IEC62443, ISO27002)
- Wetgevingen (NIS, CRA, AI act, …)
- Stakeholders
- Gebruikers
- Maatschappelijke belangen
- Ethiek: normen en waarden
- Risicoanalyse
# CRA - Cyber Resilience Act
Het doel van de CRA is het versterken van de cyberveiligheid van digitale producten (hardware & software) binnen de EU.
- Geldt voor alle producten met digitale elementen die verbonden zijn met een netwerk of apparaat (zoals IoT-apparaten, software, smart devices)
- Er zijn uitzonderingen zoals niet-commerciële open-source software, medische apparatuur, auto’s (die hebben een eigen wetgeving)
- Eind 2024 in werking en eind 2027 van toepassing

## CRA verplichtingen
- Cybersecurity by design: Beveiliging moet vanaf de ontwerpfase worden meegenomen
- Verplichte beveiligingsupdates: Gedurdende de hele levenscyclus van het product
- Beoordelingen voor derden: Voor kritieke producten is een externe veiligheidsbeoordeling vereist.

Als je aan al deze dingen voldoet krijgt je een **CE-markering**.

Er is ook een **meldplicht**. Actief misbruikte kwetsbaarheden moeten binnen 24 uur worden gemeld aan ENISA. De verantwoordelijkheid ligt dus bij de fabrikant, niet bij de gebruiker.

# Veilige software gaat niet alleen om coderen!
Het is ook commitment van **management** zelf. Er moet ook een goede insteek zijn in de **organisatiecultuur**.

De **omgeving** moet ook veilig zijn. Want als die in te breken is kan je software super veilig zijn, maar nogsteeds ingebroken worden via een backdoor in de omgeving.

Het **testen** van de security via pentesting of automatische testen, **secure code practices**, of **secure deployment** zijn ook belangrijk hier bij.

Andere aspecten zoals (veilige) hashing of signeren van builds zijn hier ook slim om uit te voeren.

>[!note] En wat te doen na deployment?
>- Het vinden en monitoren (external libraries) van kwetsbaarheden
>- Bug bounty programma’s
>- Incident response
>- Update en patch management
>- Herstelplannen en -procedures.

# Kwetsbaarheden met mogelijke grote gevolgen?
- Onvoldoende testen van software update
	- Crowdstrike AV blue screen of death
- Eenvoudig te raden wachtwoord
	- Administrator account van een nucleaire raketinstallatie
- Downloaden van Rocket League met ransomware (foute bron)
	- Op een werklaptop van een ziekenhuis alles offline
- Backdoor geïmplementeerd door hackers
	- In een network management applicatie gebruikt door 8 miljoen bedrijven

# CVSS (Common Vulnerability Scoring System)
CVSS is een gestandaardiseerd raamwerk om de ernst van beveiligingslekken gevonden in software te beoordelen en communiceren. Het geeft een numerieke waarde (van 0,0 tot 10,0) die de ernst van een beveiligingskwetsbaarheid beoordeelt, gebaseerd op verschillende criteria zoals uitvoerbaarheid, impact en complexiteit.

Het lijkt op een [[CVE]], maar is toch net anders.
![[Vault-data/Attachments/3 - Secure Software Development-1.png]]
# De SSDLC
[[School/Year 1/P1/Smart-energy/Requirements and Testing#Software Development Life Cycle(SDLC)|SDLC]] Jumpscare. You know the drill. De andere leuke S staat voor Secure → de Secure Software Development Life Cycle. Deze is net iets anders omdat hij ✨secure✨ is.

![[Vault-data/Attachments/3 - Secure Software Development-2.png]]

## Security training
Een basic security training is handig om vaak voorkomende problemen en indicatoren van kwetsbaarheden te leren. Zoiets gebeurt meestal jaarlijks of als nieuwe medewerker.

Het herhalen en nadrukken hiervan is belangrijk omdat het een secure mindset geeft, je leert hoe je kennis moet delen over dit onderwerp en word er zelf ook slimmer van. 

## Threat modeling
Het verbinden van assets, protectie en bedreigingen. Begrijpen van de bedreigingen (threat actors). Dat is threat modeling.

Je doet dit als:
- Je architectuur is goedgekeurd
- Data flow diagrams beschikbaar zijn
- Connectieontwerp beschikbaar is

Waarom doe je dit? Het sluit makkelijke aanvalsmogelijkheden uit. (Promise dit is niet met ChatGPT geschreven).

Tools die je hiervoor gebruikt is:
- Microsoft Threat Modeling Tool
- OWASP Threat Dragon
- Irus Risk (https://community.iriusrisk.com/)
- Handmatig tekenen is ook goed!!!

# SecDevOps - Want alles moet nu een secure variant heben
![[Vault-data/Attachments/3 - Secure Software Development-3.png]]

![[Vault-data/Attachments/3 - Secure Software Development-4.png]]

Met leuke pijltjes om te laten zien wat je ermee kan.

![[Vault-data/Attachments/3 - Secure Software Development-5.png]]

# Security concepten (herhaling)
- Secure-by-design
	- Ontwerp je software om het secure te hebben uit de structuur
	- Risk assessment
	- Security requirements
	- Threat modeling
	- Attack surface analysis
- Secure-by-default
	- De configurations in je software moeten bij default veilig zijn
- Privacy-by-design
	- secure-by-design maar dan met privacy
- Privacy-by-default
	- secure-by-default maar dan met privacy
- Hardening
	- Voor zorgen dat je aantal endpoints open naar het internet dicht zijn

# Threat modeling
Het identificeren van risico’s in een gestructureerde aanpak, het kwantificeren en adresseren van een applicatie is threat modeling
\[#nog-af-maken]

## Stap 1: Scope van threat modeling
\[#nog-af-maken]

## Stap 2: Bepalen van kwetsbaarheden en bedreigingen
- identificeren van de bedreigingen en kwetsbaarheden
- STRIDE toepassen:
	- Spoofing
	- Tampering
	- Reputation
	- Information Disclosure
	- Denial of Service
	- Elevation of privilege
- Alternatieven: DREAD, PASTA, LINDDUN, OCTAVE, VAST (leuk om deze te googlen…ooit)
Het doel is om de aanvalsmogelijkehden vanuit een aanvaller te bekijken zoals data bronnen, processen, datastromen en interacties met gebruikers.

## Stap 3: Bepalen van (tegen)maatregelen
\[#nog-af-maken]

## Stap 4: Valideer
- Valideer of de maatregelen effectief zijn
\[#nog-af-maken]

# Data Flow Diagram
Dit is het threat model, gwn een leuk flowchartje met pijltjes en vormpjes

# Stride framework
\[#nog-af-maken]

## Threat modeling with stride
\[#nog-af-maken]

# Volwassenheids-niveauw
Im going to be honest with you chief, im out of focus (if you couldn’t tell). 
Filling the rest later
\[#nog-af-maken]
# Sources
- https://digital-strategy.ec.europa.eu/nl/policies/cyber-resilience-act
- pimol \- jasper
- [https://en.wikipedia.org/wiki/2024_Lebanon_electronic_device_attacks](https://en.wikipedia.org/wiki/2024_Lebanon_electronic_device_attacks "https://en.wikipedia.org/wiki/2024_Lebanon_electronic_device_attacks") - “Operation Grim Beeper” LMAO
- https://community.iriusrisk.com/