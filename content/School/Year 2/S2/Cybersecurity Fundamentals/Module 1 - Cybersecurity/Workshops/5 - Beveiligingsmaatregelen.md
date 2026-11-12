---
tags:
  - school/cyber-security
  - language/dutch
  - taal/nederlands
banner:
publish: true
---
	
>[!important] Opdracht (size alert)
>**Opdracht A**<br>Verdiep je in het onderwerp door bronnen te raadplegen. Werkverdeling mag, maar zorg ervoor dat je weet wat de ander doet en discuseer informatie.
>1. Neem de iso27002:2022 / IEC62443 door en werk voor 1 maatregel per categorie uit hoe je dat binnen een organisatie zou kunnen implementeren.
>2. Neem het NIST cybersecurity framework door en ferclecteer op hoe dit bijdraagt aan het verbeteren van de cybersecurity binnen een organisatie
>3. Doe een online onderzoek naar hardening van windows 11 (of wat je op je laptop hebt staan) Evalueer hoe het staat met je laptop en wat je hier van meeneemt (technisch)
>4. Bedenkt een pakket van maatregelen om het risico dat een interne medewerker van een organisatie kwaadwillend word of omgekocht word en data steelt of systemen verwoest. Lees je eerst in op het onderwerp “insider threat”
>
>**Opdracht B**<br>Werk deze opdracht uit in een groep
>1. Je hebt een bow-tie diagram gemaakt op basis van een casus. Hiervoor waren nog geen maatregelen bedacht. Ga eerst op onderzoek uit voor iedere consequentie en bedreiging wat voor soort maatregelen hier genomen kan worden. Zorg ervoor dat je de gevonden maatregelen indeeld in het DiD-model
>2. Stel een pakket van maatregelen voor alle bedreigingen en consequenties samen en zet deze in de bow-tie. Challenge elkaar en beargumenteer waarom dit het juiste pakket is. welke maatregelen pakken de bedreiging/consequentie/risico bij de bron aan en waarom?
>3. Bepaal de nieuwe kans en impact als alle maatregelen zijn toegepast en noteer je argumentatie. Maak een nieuw risico register
>4. Bekijk de maatregelen en bespreek met elkaar de effectiviteit hiervan. Wat kunnen redenen zijn waarom de effectiviteit afneemt? Zijn er mogelijkheden om de effectiviteit te borgen met andere maatregelen?
>5. Maak een presentatie, zodat je deze aan management kan presenteren.
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
**NIST Cybersecurity Framework 2.0**<br>![[Vault-data/Attachments/5 - Beveiligingsmaatregelen.png]]<br>Het NIST Cybersecurity Framework 2.0 biedt een gestructureerde aanpak voor het beheren en verbeteren van cybersecurity-risico’s. De weerbaarheid zit vooral in het beschermen tegen impact en in de onderdelen detect respond en recover.

> ISO27002:2022.

## EU cybersecurity Act Annex 1 - Eisen
De EU heeft een aantal eisen dat, onder andere, producten met digitale elementen zodanig moeten worden ontworpen, ontwikkeld en geproduceerd, dat zij een passend cyberbeveiligingsnieau hebben op basis van de risico’s.

Digitale producten moeten dus gemaakt worden op een manier dat bekende kwetsbaarheden niet aanwezig zijn om uitbuiting te voorkomen. Deze producten moeten ook zo ontworpen zijn dat de gevolgen van een incident beperkt worden door het gebruik van passende mechanismen en technieken.

## Hardening
Hardening is het proces van het beveiligen van een systeem door middel van het verminderen van kwetsbaarheden. Door het verminderen van aanvalshoeken en de openstaande paden te beveiligen maak je het moeilijker om in te breken.
## Security concepten
- **Secure-by-design**: iets is veilig bij het ontwerp van het systeem.
- **Secure-by-default**: standaard staan niet alle poorten en services open, waardoor het standaard veilig is
- **Privacy-by-design**: iets is ontworpen om het privacy secure te houden
- **Privacy-by-default**: standaard is je privacy instellingen goed ingesteld

# Maatregelen
Waar het mogelijk is, moet je maatregelen nemen bij de bron van een risico. Deze maatregelen moeten passen bij de organisatie, cultuur en het risico.

De **effectiviteit** van maatregelen moeten worden geëvalueerd. Het is belangrijk dat er ook word gekeken naar maatregelen om de bestaande maatregelen effectief te houden. Een voorbeeld is het gepiep die je hoort als je je gordel niet om doet.

Andere voorbeelden die effectiviteit van maatregelen kan verbeteren zijn:
- Training van medewerkers
- Stickers met herinneringen om de deur op slot te doen
- Cybersecurity video basismaatregelen voor leveranciers
- een interne of externe audit
- Automatisch locken van je laptop
- Blokkeren van USB poorten die je niet nodig hebt
- Regelmatig incident response plannen oefenen

Maar wanneer heb je nu genoeg maatregelen getroffen? Hackers hebben maar één kwetsbaarheid nodig om binnen te komen. Een goede risico-analyse is hier belangrijk bij. Controleren of alle digitale middelen uitgestippeld zijn of goed inzicht in de hackers om je heen helpen hier ook bij.
- Kijken naar best-practices en pakket van maatregelen
- Kijken naar securitystandaarden en -richtlijnen
- Gezond verstand

# Cybersecurity verzekering
Een cyberverzekering is om kosten te vergoeden in het geval van een cyberincident (verrassend). Denk hierbij aan:
- Reparatie of vervangen van hard- en software
- Herstelling van data
- Terugvinden van informatie en opnieuw opbouwen van de administratie
- Inhuren van specialisten voor herstel
- Verlies van uren of omzet

Een cyberverzekering is meestal opgebouwd uit 3 onderdelen:
- Voorkomen van ongevallen, checken van risico’s
- Herstellen van schade
- Vergoeden van schade

## Andere mogelijke (extra) diensten
Andere punten die kunnen helpen met verbeterde veiligheid is:
- Bewustwording, kennis en kunde van het personeel of de ondernemer (online trainingen)
- Incident ondersteuning (zoals een 24/7 alarmcentrale)
- Juridische ondersteuning (AVG)
- Forensische diensten (voor uitzoeken wie er achter een aanval zit)

# Sources
- https://en.wikipedia.org/wiki/Defence_in_depth
- https://www.nist.gov/cyberframework