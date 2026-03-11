---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: true
---

>[!important] Opdracht
>Werk de volgende vragen uit met de projectgroep. Verdiep je in het onderwerp door bronnen te raadplegen. Je mag het werk verdelen, maar zorg dat je de kennis met elkaar deelt en discussies voert over het resultaat. Het is een vrij technisch gerichte opdracht, dus help elkaar!
>1. Voor een static code analysis (SAST) en een open source analyse uit op een serieuze applicatie. Deze mag zelf geschreven of open source zijn (van GitHub). Maak een rapport van de 5 grootste bevindingen en geef een advies om het op te lossen.
>2. Voer een dynamische test (DAST) uit met behulp van de tool ZAP. Pak hiervoor een eigen website of een website met een bounty programma (of Avans). Maak een rapport van de 5 grootste bevindingen en geef een advies om het op te lossen.
>3. Stel secure-by-desii
>4. #nog-af-maken
# Intro
Software moet veilig zijn, er is daar geen twijfel aan.

Ja

Dit is echt een rommelige presentatie.

[[School/Year 2/S2/Cybersecurity Fundamentals/Module 2 - Weerbaarheid/Workshops/3 - Secure Software Development|SSDLC]] enzo. Pentesting en secure coding zijn hier van belang.

# Je code vibe-checken
## Static Code Analysis
Static code analysis houd in dat je je code scant voor bekende problemen, zoals gelekte [[API]] keys, unsanitized input  of bad code practices.

Dit moet gebeuren terwijl je eigenlijk je code maakt. Dit kan geautomatiseerd worden met apps zoals azure DevOps, Jenkins, TeamCity of jetbrains plugins zoals `Synk`.

Het is belangrijk om dit zo snel mogelijk te doen zodat vulnerabilities niet begraaft word onder code.

Synk is hier vooral interessant voor, onderzoek dit.

## Dynamic Code Analysis
Dynamic code analyse is juist geautomatiseerd ipv handmatig. Dit word meer gezien als een “black box” aanpak.

Je gebruikt dit als je een stabiel product hebt met een staging environment als Quality Assurance.

Dynamic code analysis word meer gebruikt voor run-time bugs. Hier komen meer de “script kiddie” problemen naar boven.

Tools zoals ZAP, burp suite en AppScan zijn hier handig voor.

## Open Source Analysis
Open source analyse richt zich meer op het controleren van dependencies van open source bibliotheek versies. Check hier of je een veilige versie van een open source bibliotheek gebruikt.

Doe dit zodra je code de library gebruikt met tools zoals Jenkins of TeamCity voor een geautomatiseerde approach, of WhiteSource, SourceClear of Synk voor een handmatige approach.

Je code is immers zo sterk als je zwakste schakel.

## Software Bill of Materials (SOBM)
Een SOBM is een structured overzicht van alle componenten (dingen zoals libraries, packages, dependencies) die in softwaretoepassingen worden gebruikt. Het is te vergelijken met een ingrediëntenlijst op een voedselverpakking, maar dan voor software.

Een SOBM helpt organisaties met:
 - Inzicht krijgen in wat er precies in een stukje software zit
 - Kwetsbaarheden sneller te vinden
 - Zich te voldoen aan regelgevingen zoals NIS2 or CRA

## Penetration Testing (Hack that shit)
Pentesten is eigenlijk het product hacken alsof je de hacker bent.

Deze stap word uitgevoerd voordat het product word uitgegeven aan het publiek/klanten (de staging environment). Je kan dit ook in productie doen, maar ehhh dat is niet zo slim (dan word je ook ge-pentest door kwaadwillende).

Tools zoals Kali Linux, Nessus, OpenVas.

Let wel op dat je binnen de richtlijnen van de organisatie blijft (als je een third party bent). Je wilt niet in de cel belanden.

>[!important] Tip voor social engineering en inbreken
>- Verkleed je als sinterklaas

# Kwetsbaarheden in software
## MITRE Attack
MITRE ATT&CK is een openbare kennis databank voor tactieken en technieken van real-world scenarios voor ethical hacking.

## OWASP
OWASP mentioned !!!!
OWASP is een site die (onder andere) een top 10 meest gebruikte vulnerabilities van ieder jaar publiceert. Het is basically een vulnerability classification organisatie.


# Algemene kwetsbaarheden
Vulnerabilities van een API, race conditions, structured outputs.

Overal in je computer kunnen kwetsbaarheden zitten.
- Je toetsenbord kan gespoofed worden met een rubber ducky
- Je processor kan malifiede code uitvoeren
- Je geheugen kan ook malifiede code uitvoeren

## Memory management vulnerabilities
Programmeertalen gebruiken geheugen voor variabelen en andere waarden: allocate, use, deallocate.

Een **spatial vulnerability** is een fout wanneer een programma een array indexeert dat buiten het gealloceerde geheugen ligt. Dit is meestal een buffer overflow

Een buffer overflow is dus dat er teveel data word gegeven, waardoor het in de heap op zon manier word neergezet dat de computer het interpreteert als code.

Een **temporal vulnerability** is een fout wanneer geheugen word gebruikt dat reeds is opgeruimd: Een pointer wijst naar freed memory.

Memory management problemen kan ervoor zorgen dat hackers arbitrary code can uitvoeren in een applicatie om zo toegang te krijgen tot een systeem, of om data te lekken.

Een manier hoe windows dit voorkomt is door bijvoorbeeld het geheugen te jumblen. Dit heeft wel impact op performance.

## Structured output
#nog-af-maken
## Race conditions
Race condities zijn wanneer een programma op 2 plekken op het zelfde moment een stukje geheugen aanvraagt. Dit is dus een timing based aanval. Dit kan toegepast worden bij bijvoorbeeld webapplicaties om hogere privéleges te krijgen.

## API vulnerabilities
Niet alleen web-APIs!! word gebruikt om communicatie tussen applicaties te realiseren. Soms worden errors niet goed afgehandeld, input word niet gecontroleerd, authenticatie problemen… Kan allemaal leiden tot het lekken van data of zelfs toegang tot een database.

## Side-channel vulnerabilities
Een side-channel kwetsbaarheid is dat het systeem of omgeving extra informatie genereert op basis van de implementatie van het protocol, software of hardware.

Denk aan de analyse van de timing tussen bepaalde componenten, deze kan afhankelijk zijn waar in het geheugen opgeslagen staat.

Bijvoorbeeld een ping naar een [[IP]] address is al genoeg om een operating system te raden (kijk naar de TTL van de traceroute packet).

# Verkleinen impact
- Sandboxen: je applicatie in een eigen omgeving zetten
- Defense in depth: laagjes aanbrengen (something something Shrek)
- Niet alles met elkaar verbinden als het die verbinding nodig heeft

“de beste code is geen code” \- marcel, of “de beste data is geen data” \-odido

# Ecosystemen
Een overzicht maken van het gehele ecosysteem van de software geeft veel inzicht op het gebied van het aanvalsoppervlak.

Geef claude niet toegang tot je pc, tenzij je wilt dat al je mails of HEEL JE C SCHIJF word verwijdert.
[lol](https://www.pcmag.com/news/meta-security-researchers-openclaw-ai-agent-accidentally-deleted-her-emails)

# Cyber weerbaaheid
#nog-af-maken 
# Maatregelen weerbaarheid
Weerbaarheid houd in dat je aanvallen kan:
- Anticiperen
- Weerhouden
- Herstellen van
- Tot kan aanpassen
- Stressbestendig bent

# Red and Blue teaming
![[Vault-data/Attachments/4 - Weerbaar software en hardware.png]]

# Isolation Running Process (afbakenen)
Containers, virtualisatie en chroot! ik hoop dat er geen gevangenis bij komt te kijken.

## Chroot (jail)
Chroot is een afbakening van user rights door de root folder aan te passen naar een specifieke plek.

Chroot zou dus path traversal voor wachtwoorden tegen moeten houden.

## Containers
Google [[docker]]. Het is gedeelde resources en memory, maar het is zn eigen kleine omgeving die altijd op dezelfde manier draait, ongeacht van system specs. Je kan uit een container breken, maar het is technisch gezien een sandbox.


# References
- https://attack.mitre.org/
- https://cwe.mitre.org/
- https://owasp.org/
- https://owasp.org/www-project-top-ten/
- https://www.pcmag.com/news/meta-security-researchers-openclaw-ai-agent-accidentally-deleted-her-emails