---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: true
---


>[!important] Opdracht (Technisch)
>Neem het lesmateriaal door en ga aan de slag met de volgende opdrachten:
>1. Voer opdracht 1 en 2 uit op BrightSpace.
>2. Onderzoek de tor-webpagina en ga op het darkweb en schrijf op wat je hebt geleerd.
>3. Vind je dat het darkweb verboden moet worden?
>4. Op welke manier stel je je laptop forensisch veilig?
>	1. Wat stel je veilig met welke tools?
>	2. Stel je laptop veilig met de tools en sla de bestanden op een USB disk met FTK Imager.
>	3. Controleer of je de gemaakte images kan lezen / mounten (ook met FTP Imager).
>5. Durft je opdracht 5 crime-diggers aan? Kijk hoe ver je komt.

>[!important] Opdracht (Niet-technisch)
>Neem het lesmateriaal door en ga aan de slag met de volgende opdrachten:
>1. Voer opdrachten 1 en 2 uit op BrightSpace
>2. Onderzoek de tor-webpagina en ga op het darkweb en schrijf op wat je hebt geleerd.
>3. Vind je dat het darkweb verboden moet worden?
>4. Onderzoek het Mitre Att&ck Framework (opdracht 4)
>	1. https://attack.mitre.org/groups/ - onderzoek een aantal groepen
>	2. https://attack.mitre.org/software/ - onderzoek een aantal malware
>	3. https://attack.mitre.org/matrices/enterprise/ - onderzoek van iedere stap inde cyber kill chain een drietal tactieken hoe hackers te werk gaan
>	4. Het doel is om écht in de huid van de hacker te kruipen. Maak een kort verslag wat je hierin opvalt en hebt geleerd

# Digitale forensics
Ook wel bekend als computer forensics. Is een onderzoeksproces waarbij elektronische gegevens worden verzameld, geanalyseerd, en bewaard om als bewijsmateriaal te dienen bij een juridische zaak of onderzoek.

Het wordt toegepast om cybercriminaliteit te onderzoeken, zoals hacking, datalekken, fraude, en andere digitale misdrijven.

De basisprincipes van digital forensics richten zich op het waarborgen van de integriteit van de gegevens en het gebruik ervan in juridische contexten om verantwoord bewijs te leveren voor strafzaken, bedrijfsincidenten of andere onderzoeken.

Een aantal kernaspecten van digitale forensics zijn:
1. **Identificatie van Bewijs**: Vaststellen welke gegevens relevant zijn voor het onderzoek. Dit kan echt alles zijn.
2. **Verzameling van Bewijs**: Het veiligstellen en bewaren van elektronische gegevens zonder dat de integriteit van de data in gevaar komt.
3. **Analyse van Bewijs**: Het verwerken en interpreteren van de gegevens om bruikbare informatie te verkrijgen.
4. **Documentatie en Rapportage**: Het opstellen van rapporten en het presenteren van bevindingen in een juridische context.
5. **Bewijsbehoud**: Het waarborgen van de integriteit en authenticiteit van de verzamelde gegevens zodat ze in de rechtbank kunnen worden gebruikt.

Soms kan een crimineel gewoon van zijn computer weg getrokken worden zodat hij niet zijn pc locked.

Voorbeelden:
- Onderzoeken naar hacking-incidenten
- Fraudeonderzoeken
- Herstel van verwijderde bestanden

## Veiligstellen van computersystemen
- Bij digital forensics is het cruciaal dat de integriteit van de gegevens behouden blijft tijdens het veiligstellen van bewijsmateriaal.
- Een van de belangrijkste aspecten is het correct vastleggen van digitale data, zodat deze niet wordt veranderd of gemanipuleerd, wat zou kunnen leiden tot onbruikbaar bewijs in juridische onderzoeken.
- Het veiligstellen van bewijsmateriaal is wettelijk geregeld

## Veiligstellen van het geheugen
Het veiligstellen van het geheugen (ram) is cruciaal voor digital forensics. Het vaststellen van volatiel geheugen (zoals ram) moet zo snel mogelijk gebeuren omdat het verdwijnt zodra het apparaat uit word gezet (of opnieuw word opgestart).

Ram kan waardevolle informatie bevatten, zoals:
- actieve netwerkverbindingen
- lopende processen en applicaties
- wachtwoorden in plaintext
- encryptiesleutels en gegevens over malware in het systeem

### Stappen veiligstellen data
1. Identificeer en documenteer het bewijs:
	1. Docuemnteer eerst de huidige staat van het systeem. Noteer welke apparaten zijn aangesloten, welke processen draaien en wat de netwerkverbindingen zijn.
	2. Maak foto’s of video’s van het fysieke systeem om later te kunnen laten zien hoe het systeem eruit zag
2. Maak een exacte kopie (forensische image) van het geheugen en de schijf:
	1. Maak een forensiche kopie (bit-by-bit image) van de harde schijf of ander opslagmedium. Dit moet een exacte kopie zijn, zonder de originele gegevens te wijzigen.
	2. Gebruik een write-blocker om te voorkomen dat de originele gegevens worden vervangen.
3. Verifieer de integriteit van de hashes
	1. #nog-af-maken 
4. Bewaar het origineel veilig
	1. Nadat de data is veilig gesteld, moet het originele opslagmedium verzegeld worden en op een veilige plaats worden opgeslagen.
	2. Werk altijd op een kopie van de data om te voorkomen dat het originele bewijs word vervangen.

## Termen
> **Indicators of Compromise (IOCs)**: Indicaties dat er malware aanwezig is op het systeem

> **Tactics, Techniques and Procedures (TTP)**: Beschrijft het gedrag, processen, acties en strategien de gebruikt worden door een bad actor om threats te ontwikkelen en cyberaanvallen te plegen.

# Mitre ATT&CK
- Het MITRE ATT&CK Framework is een openbaar toegankelijk kennismodel dat veelvoorkomende technieken, tactieken en processen van cyberaanvallers in kaart brengt.
- Dit framework helpt beveiligingsteams om aanvallen beter te begrijpen, detecteren en bestrijden.
- https://attack.mitre.org/

# Tools
- Data-acquisitie van harde schijven, mobiele apparaten, netwerken en RAM-geheugen.
- Bestandsherstel en analyse van verwijderde of versleutelde gegevens.
- Onderzoeken van netwerkverkeer en mobiele data.
- Forensische analyse van cyberaanvallen en verdachte activiteiten.
- Elke tool heeft zijn eigen specialisatie en wordt vaak gecombineerd gebruikt voor uitgebreide forensische onderzoeken. De keuze van de tool hangt af van het type onderzoek (bijv. mobiel, netwerk, of pc-gebaseerd).

Een (grote) lijst met tools zijn:
- FTK manager
- AUTOPSY & SLEUTH kit
- Volatility
- Wireshark
- Foremost
- Scapel
- Bulk extractor
- Hashdeep
- Chrootkit
- Exiftool
- Binwalk
- Testdisk & Photorec
- CAINE- COMPUTER AIDED INVESTIGATIVE ENVIRONMENT

# Het Open, Deep en Dark web
![[Vault-data/Attachments/6 - Forensics en Dark web.png]]

Het open web is ongeveer 4.5% van het internet. Dat is het gedeelte die je kan inden op google  of andere zoekmachines.
- Iedereen kan dit vinden
- Voorbeelden: wikipedia, youtube, social media, nieuws websites

Het deep web is ongeveer 90-95% van het internet. Dit gedeelte word niet geïndexeerd door zoekmachines. Deze laag bevat vaak legitieme of privé informatie.
- Heeft vaak een login nodig
- Bedrijfsdatabases, medische dossiers, academische tijdschriften, webmail, online bankieren

Het dark web is het kleinste deel van het internet. Je hebt hier vaak speciale software nodig, zoals de [tor browser](https://www.torproject.org/download/). Het dark web, vanwege de anonimiteit, heeft de mogelijkheid voor zowel legitieme als illegale activiteiten.
- Vereist speciale software zoals een tor browser.
	- Sommige websites kunnen alleen gevonden worden in tor (.onion websites).
- Illegale marktplaatsen
- Klokkenluidersplatformen
- Fora voor journalisten
- Word al helemaal niet geindexeerd door standaard zoekmachines en is vaak versleuteld

## TOR: The Onion Router
de tor browser is een open-source platform dat door vrijwilligers wordt beheerd en, wegens zijn onion routing, gebruikers geanonimiseerd die websites en servers via dit netwerk openen. Tor laat je eerst via ongeveer 3 “hops” over random servers voordat je met het internet verbind.

De browser word bijvoorbeeld door journalisten gebruik en gebruikers die hun identiteit moeten beschermen, als ze bijvoorbeeld bij iets juridisch de oppositie onderzoeken (of concurrenten).

Tor is dus handig voor de recon stap. Zorg ervoor dat je geen persoonlijke informatie deelt!

![[Vault-data/Attachments/6 - Forensics en Dark web-1.png]]

## Het gevaar van het dark web
- Door de anonimiteit van tor word het dark web gebruikt voor veel illegale ondernemingen. zoals:
	- Zwarte marktplaatsten voor wapens
	- Sites voor pedofielen
	- Hackers
	- Oplichters

Daarentegen is het gebruik van tor niet inherent illegaal. Het word wel afgeraden om van tor weg te blijven als je er niks te zoeken hebt: je kan besmet worden met virussen of ongewenste sites vinden.

## Navigeren op het dark web
Gebruiken van darkweb directories:
- Hidden wiki
- DuckDuckGo, of andere zoekmachines
- Gebruik https://tails.net/ als je een OS wilt.

## Analyseren Dark Web
Er zijn monitoring tools beschikbaar voor het dark web, zoals:
- [DarkOwl](https://www.darkowl.com/)
- [Datadome](https://datadome.co/)
- [Chainalysis](https://www.chainalysis.com/)

# References
- [Phishing campaign website](https://getgophish.com/)
- [MITRE attack framework](https://attack.mitre.org/)
- [Tor browser](https://www.torproject.org/download/)
- [Tor operating system (TAILS)](https://tails.net/)
- Darknet data tools:
	- [DarkOwl](https://www.darkowl.com/)
	- [Datadome](https://datadome.co/)
	- [Chainalysis](https://www.chainalysis.com/)