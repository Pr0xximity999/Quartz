---
tags:
  - school/cyber-security
  - taal/engels
  - language/english
banner:
publish: true
---

>[!important] Opdracht
>**Opdracht A**<br>Verdiep je in het onderwerp door bronnen te raadplegen. Werkverdeling mag, maar zorg ervoor dat je weet wat de ander doet en discuseer informatie.
>1. Neem de iso27002:2022 / IEC62443 door en werk voor 1 maatregel per categorie uit hoe je dat binnen een organisatie zou kunnen implementeren.
>2. Neem het NIST cybersecurity framework door en frclecteer op hoe dit bijdraagt aan het verbeteren van de cybersecurity binnen een organisatie
>
>**Opdracht B**<br>Werk deze opdracht uit in een groep
>3. Je hebt een bow-tie diagram gemaakt op basis van een casus. Hiervoor waren nog geen maatregelen bedacht. Ga eerst op onderzoek uit voor iedere consequentie en bedreiging wat voor soort maatregelen hier genomen kan worden. Zorg ervoor dat je de gevonden maatregelen indeeld in het DiD-model
# Intro
Leg de hacker driehoek goed uit in je portfolio met een foto als toelichting.

>[!note] Herhaling risicoanalyse
> 1. bepaal wat je wilt beschermen door een organisatie en hun systeem te onderzoeken
> 2. Identificeer de risico’s
> 3. Analyseer deze risico’s. Wat zijn de eigenschappen van een risico? Hoe impact het de BIV? Wat zijn de gevolgen?
> 4. Besluit wat je gat doen om deze risico’s aan te pakken:
> 	- Accepteer het risico, werk met de consequenties
> 	- Mitigeer het risico
> 	- Stop het risico
> 	- Verplaats het risico

Door middel van het gebruik van de risicomatrix kun je besluiten welke van de aanpakmethodes je gebruikt.

# Defense In Depth Model
De Defense in Depth model (DiD) is een cybersecurtystrategie die meerdere lagen van bescherming gebruikt om een systeem te beveiligen. Het idee van dit model is als 1 line of defense faalt, dat niet het hele systeem overgenomen it.

Een voorbeeld is dat verschillende rollen binnen een bedrijf verschillende rechten hebben tot een systeem. Een schoonmaker moet niet bij dezelfde systemen als een CISO kunnen. Een ander voorbeeld is dat een systeem een firewall heeft, een intranet en een database, die allemaal gescheiden van elkaar zitten (natuurlijk heeft alles wel een firewall). Zie het als een doos met een slot, waar een doos met een slot in zit, waar een doos met een slot in zit…..

Het gebruik van meerdere lagen zorgt dus voor meerdere beveiligingsmaatregelen tegen een aanvaller, waardoor hij meer dan 1 maatregel moet omzeilen. Dit verhoogt de kans dat een aanval word gedetecteerd. Door het combineren van verschillende beveiligingsmaatregelen creëert Defense in Depth een robuuster beveiligingsmodel dat beter bestand is tegen de diverse en complexe bedreigingen van vandaag.

![[Vault-data/Attachments/5 - Beveiligingsmaatregelen did model.png]]

# Security standaarden
**NIST Cybersecurity Framework 2.0**<br>Het NIST Cybersecurity Framework 2.0 biedt een gestructureerde aanpak voor het beheren en verbeteren van cybersecurity-risico’s. De weerbaarheid zit vooral in het beschermen tegen impact en in de onderdelen detect respond en recover.
\[nog niet af]

> ISO27002:2022.

# Security concepten
- **Secure-by-design**: iets is veilig bij het ontwerp van het systeem.
- **Secure-by-default**: standaard staan niet alle poorten en services open, waardoor het standaard veilig is
- **Privacy-by-design**: iets is ontworpen om het privacy secure te houden
- **Privacy-by-default**: standaard is je privacy instellingen goed ingesteld

# Effectiviteit van Maatregelen
\[nog niet af]


# Sources
- https://en.wikipedia.org/wiki/Defence_in_depth