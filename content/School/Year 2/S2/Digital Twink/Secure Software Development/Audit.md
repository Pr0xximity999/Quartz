---
tags:
  - school/secure-software-dev
  - school/digital-twin
  - language/dutch
  - taal/nederlands
banner:
publish: true
---
# Intro
Dit zijn alle dingen die bij de audit besproken worden en die dus bij je applicatie moeten zitten (in iets zoals een document).
# Security Requirements
- Er is gebruik gemaakt van een standard voor security requirements

# Threat Modeling
- 1 threat model maken
	- Threat model moet 2 levels hebben: niveau 0 en 1.
- Bij architectuurwijzigingen moet dit threat model geupdated worden

# Secure Coding
- Het team ontwikkelt volgens de secure coding practices
- De secure coding practices zijn vastgelegd in een coding standard document

# Secure CI/CD
- De build & deploy pipeline is geautomatiseerd, reproduceerbaar en integer
- Secrets worden centraal beheerd, niet in code
- SAST draait op elke build, builds die niet aan targets voldoen falen
- SCA word op elke build uitgevoerd, kwetsbare builds falen

# Pentesting
In verband met de opzet van de casus is pentesting niet altijd even makkelijk om uit te voeren en dus **optioneel**.
- Pentesten worden uitgevoerd en geregistreerd
- Pentesten richten zich op de OWASP Top 10

Je levert bewijs aan zodat we de vragen kunnen beantwoorden. Het format is vrij (map in repo, ZIP, of wiki) mits het **leesbaar, vindbaar en herleidbaar** is. Voeg altijd een korte index toe die verwijst naar de relevante bewijsstukken.

Wat andere tips zijn:
- We schrijven geen standaard, tool of omgeving voor. Jullie kiezen zelf, maar moeten wel aantonen dat de criteria is voldaan.
- De audit kijkt naar het bewijs dat *voor* het freeze moment(inlevermoment) is ontstaan.
- Maak het leesbaar, een index bestand met linkjes maakt het overzichtelijk
- Versies & data: zet versies en datums op documenten en diagrammen
- Minstens 1 fail example voor SAST en SCA laat overtuigend zien dat de gate echt werkt.