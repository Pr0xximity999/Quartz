---
tags:
  - school/cyber-security
  - taal/engels
  - language/english
banner:
publish: true
---

>[!important] Opdracht
>Je gaat met je projectgroep aan de slag met de volgende opdracht. Een aantal groepen zullen volgende les een presentatie geven hierover
>
>**Opdracht A**
>*Deze opdracht is ook input op de volgende opdracht!!!*
>1. Zoek op het internet echte voorbeelden van aanvallen en verschillende kwaadwillenden
>2. Maak een risicomatrix waarbij je je eigen invulling geeft van de verschillende impact niveaus. Zorg ervoor dat je hier vanuit meerdere hoeken uit kijkt
>3. Formuleer een antwoord op welke manier je de kans van de risico’s kan beoordelen. Dit kan je uit werken door de hand van je eigen gekozen voorbeeld
>4. Zoek door middel van een literatuuronderzoek de meest bekende kwetsbaarheden en dreigingen en zet deze in een lijst. Deze moet je gebruiken in je risicoassessment
> 
>**Opdracht B**
>*Deze opdracht is ook input op de volgende opdracht!!!*
>1. Verdiep jezelf in IT en OT en maak een presentatie waarin je de verschillen tussen beide punten kan uitleggen en de belangrijkste aspecten van deze twee
>2. Zoek verschillende definities van IT en OT systemen. Onderbouw welke van de 2 het makkelijkst te hanteren is. Kijk of je in 1 zin kan uitleggen wat het verschil is.
>3. Verdiep je in genoemde standaarden voor risicoanalyse. Vergelijk deze en beargumenteer op welke wijze je de risico analyse en -assessment gaat uitvoeren. Maak een uitvoering van 1 A4’tje lang hoe je dit bij een bedrijf zal doen. 
>4. Onderzoek de bow-tie methodiek en maak een diagram op basis van een van de onderstaande casussen, waarbij 1 top event “loss of control” word genomen. Houd hierbij rekening met de CIA driehoek: verlies van integriteit, vertrouwelijkheid en beschikbaarheid. Schrijf al de aannames die je doet op.
# Intro
Zoals [[School/Year 2/S2/Cybersecurity Fundamentals/Module 1/Workshops/3 - Governance van Cybersecurity|voorheen]] besproken, is governance de regels en cultuur binnen een organisatie die de veiligheid van een bedrijf bepalen.

## De Hack-Driehoek
Een hack kan alleen plaatsvinden op het moment dat aan alle drie de voorwaarden voldaan word. Deze voorwaarden kunnen ook gebruikt worden ter verdediging. Deze drie punten zijn:
- Kwetsbaarheid
- Kwaadwilligen
- Kroonjuwelen

![[Vault-data/Attachments/4 - Risicoanalyse en -assessment hack=driehoek.png]]

Kroonjuwelen kan van alles zijn. Van een wachtwoord tot een stukje gevoelige software tot een geheim document of persoonsgegevens (BSN, huisnummer, etc..). 

Ook al denk je dat je geen waardevolle gegevens hebt, kun jij *zelf* het kroonjuweel zijn in de zin van toegang tot een systeem. Bijna alles tegenwoordig kan een kroonjuweel zijn, aangezien alles van waarde is voor iemand.

Kwaadwillenden kunnen individuen en groepen zijn met verschillende motivaties, en kwetsbaarheden zijn zwaktes in systemen…of mensen.

### Kwaadwillende
Wie zijn de hackers die jouw systeem aanvallen?

**Georganiseerde misdaad / cybercriminelen**<br>Deze mensen hebben puur geld als motief (9 van de 10 keer)

**Statelijke actoren (state sponsored actors / Advanced Persistent Threats)**<br>Aanvallen worden gepleegd van militaire doeleinden tot profijtdoeleinden voor een staat/land of politieke redenen. Van (industriële) sabotage tot ontwrichting van de maatschappij (disruptie en destructie) .

**Hacktivisme**<br>Hackers met activistische doeleinden. Het blootleggen van informatie van (in hun ogen) kwaadwillende entiteiten tot het belemmeren van diens acties. Soms verbergen statelijke actoren zich als hacktivisten om geen oorlog uit te lokken.

**Script kiddies**<br>Vaak zijn dit individuen die rondkijken en dingen uit testen zonder de consequenties te weten, allemaal voor “fun and games”. Ook is de intentie niet inherent kwaadwillend, kan het voor veel schade zorgen omdat deze mensen niet weten wat ze nu precies aanrichten.

**Insider threats**<br>Ontevreden of omgekochte medewerkers of medewerkers met slechte intenties (zoals geldwinning). Soms is de aanvaller dichterbij dan je denkt.

# Risico-analyse
Een cyberrisicoanalyse is een structureel process waarin de mogelijke cyberrisico’s in kaart worden gebracht.

Maatregelen maken voor een risico is pas mogelijk als deze is geïdentificeerd, dus het goed vaststellen van diens eigenschappen is de eerste stap. Voorbereiden is belangrijk, want een risico kan zomaar gebeuren. 

>[!important] Risicoanalyse stappenplan
>1. Bepaal wat je wil beschermen (asset-lijst)
>2. Identificeer de risico’s
>3. Analyseer de gevonden risico’s (risicoregister)
>4. Besluit wat je gaat doen (weeg de gevolgen af):
>	- Accepteren
>	- Oplossen (of mitigeren)
>	- Overdragen
>	- Stoppen

>[!note] (herhaling) wat is een risico?
>Een risico is een **kans** dat een bepaalde **gebeurtenis** plaatsvind met een bepaald (negatief)**gevolg**.
>
>Een risico in formule vorm: 
>`Risico = Bloodstelling * Kans * Gevolg` / `R = B * W * E`. 
>
> - **Blootstelling** (B): Wanneer en waar het gevaar zich voordoet
> - **Kans** (waarschijnlijkheid, W): De waarschijnlijkheid dat de gevolgen optreden naar aanleiding van de blootstelling
> - **Gevolg** (effect, E): Het effect of de consequentie van het optreden van een incident
## Risicobron
>**Risicobron**: Een bron van gevaar (hazard)

Een gevaar is een bron waar potentiële schade uit kan ontstaan of nadelige gevolgen. Denk aan gevaar voor ongeval, verlies van eigendommen of apparatuur of schade aan het milieu.

# Risk security standards
Er zijn genoeg standards rondom risico assessment en management:
- [ISO 270001](https://connect.nen.nl/Family/Detail/65256) 
- [ISO 270005](https://connect.nen.nl/Family/Detail/61519) - Risk management process
- [NIST SP-800-30](https://csrc.nist.gov/pubs/sp/800/30/r1/final) - Risk assessment process
- [IRAM2](https://www.securityforum.org/solutions-and-insights/information-risk-assessment-methodology-2-iram2/) - Information and Risk Assessment Methodology, version 2

Een Nederlandse standaard die veel in de overheid gebruikt word is MAPGOOD.
Het MAPGOOD-model is gemaakt voor het in kaart brengen van bedreigingen en risico’s op het gebied van informatiebeveiliging. Het somt een aantal invalshoeken op waar rekening mee gehouden moet worden als er naar dreigingen en risico’s gekeken word.<br>Het MAPGOOD-model kijkt naar de volgende invalshoeken:
- **Mens**: Mensen die nodig zijn om het informatiesysteem te beheren en gebruiken (direct of indirect)
- **Apparatuur**: Apparatuur die nodig is voor het functioneren van het informatiesysteem (webservers, applicaties, werkstations, etc…) 
- **Programmatuur**: Programmatuur waaruit het informatiesysteem bestaat
- **Gegevens**: Gegevens die door het systeem worden verwerkt
- **Organisatie**: Organisatie die nodig is om het informatiesysteem te laten functioneren
- **Omgeving**: Omgeving waarin het informatiesysteem functioneert
- **Diensten**: Externe diensten die nodig zijn om het systeem te laten functioneren


# Bow-tie diagram
Een bow-tie diagram is een gestructureerde methode om een risico in kaart te brengen. Onderdelen zijn:
- Gevaar
- Hoofd-gebeurtenis
- Ongeval
- Consequentie
- Preventieve barrière
- Herstellende barrière
- Escalatie factor (hoe kan het erger worden)
- Escalatie factor barrière

Een template en voorbeeld van een bow-tie diagram zien er als volgt uit:<br>
![[Vault-data/Attachments/4 - Risicoanalyse en -assessment bowtie example 1.png]]
<br>
![[Vault-data/Attachments/4 - Risicoanalyse en -assessment bowtie exmaple 2.png]]

# IT vs OT
IT → Information Technology<br>OT → Operation Technology.

OT is usually a lot more sensitive to downtime, requiring it to stay running as much as possible. Fabrics, generators or assembly lines are OT.

IT is more data directed like computer systems or networks.

>[!note] Informational videos of OT systems being attacked
> - [YouTube - STUXNET: The Virus that Almost Started WW3](https://www.youtube.com/watch?v=7g0pi4J8auQ)
> - [YouTube - Aurora Generator Cyber Test in 2 x mins](https://www.youtube.com/watch?v=9pkDmvF8C2A)
> - [YouTube - Staged aurora cyber attack reveals vulnerability in power grid](https://www.youtube.com/watch?v=fJyWngDco3g)

# Sources
- https://en.wikipedia.org/wiki/Information_technology
- https://en.wikipedia.org/wiki/Operational_technology
- https://www.ncsc.nl/ot-operational-technology
- https://www.cisco.com/site/us/en/learn/topics/industrial-iot/what-is-ot-vs-it.html
- https://xenoncyber.ca/ot-vs-it/