---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
  - "#school/scoliosis"
banner:
publish: true
---

>[!note]
>Previous part found [[School/Year 2/S2/Cybersecurity Fundamentals/Module 3 - Mens en Techniek/Workshops/4 - Cyber kill chain 1|here]].

>[!important] Opdracht
>Je hebt een goed idee hoe je een “student” moet aanvallen. Bereid nu echt een aanval voor op de “student” om waardevolle spullen te stelen. Voer deze niet in het echt uit, maar je mag het wel simuleren en een korte video over maken.
>1. Gebruik de gevonden kwetsbaarheden of de gepresenteerde kwetsbaarheden
>2. Zorg ervoor dat je je aanval goed plant en dat je alle componenten van de aanval realiseert (technisch en niet-teschnisch)
>3. Let op: zorg dat de aanval ook echt werkt
>4. maak een video waarin:
>	1. Je laat zien op welke manier de student in jouw aanval tuint en zo zijn waardevolle spullen kwijt raakt en
>	2. Waarin je uitlegt hoe de aanval in elkaar zit, uit welke kwetsbaarheden het bestaat en waarom je deze opzet heb gekozen (gebruik hier de kwetsbaarheden die je hebt gevonden)
>5. In de volgende workshop worden de videos bekeken



# Cyber kill chain: Weaponization
>**Weaponization**: Het selecteren of ontwikkelen van de tools en technieken die gebruikt kunnen worden om kwetsbaarheden te misbruiken die tijdens de [[School/Year 2/S2/Cybersecurity Fundamentals/Module 3 - Mens en Techniek/Workshops/4 - Cyber kill chain 1|reconnaissance]] fase zijn ontdekt.

Een paar begrippen die hier bij passen zijn: Malware, Exploits, Payloads.

Deze stap is het gereed maken van je arsenaal. De aanvaller heeft al inzicht in de zwakke plekken van het doelwit en kiest nu de wapens die het meest effectief zullen zijn.

## Malware
- **Mal**afide sof**ware**

[[Malware]] is ontworpen om computersystemen, servers, netwerken of mobiele apparaten te beschadigen, te verstoren of ongeoorloofde toegang te verkrijgen.

Doelen van malware kunnen zijn:
- Datadiefstal
- Schade
- Spionage
- Controle overnemen
- Geld verdienen

Er zijn verschillende soorten malware:
- Virussen: Infecteert bestanden en verspreid zich naar andere systemen
- Wormen: Verplaatst zich zelfstandig via netwerken
	- Funfact: de eerste worm was iemand die [vulnerabilities in het internet van 1988 wilde laten zien!](https://en.wikipedia.org/wiki/Morris_worm)!
- Trojan (horse): Doet zich voor als legitieme software met een verborgen functie
- Ransomware: Blokkeert toegang tot je data tot je betaald
- Spyware: Spioneert op een gebruiker door stiekem informatie te stelen

## Exploits
> **Exploit**: Vertaald uit het Engels: “Misbruik”

Een exploit is een stukje code dat misbruik maakt van een gevonden kwetsbaarheid in software of hardware. Exploits misbruiken dus kwetsbaarheden gevonden in de recon fase.

Je gebruikt het voor:
- Toegang krijgen tot een systeem
- Rechten op systemen verhogen (privilege escalation)
- Data stelen of manipuleren
- Systemen beschadigen of onbruikbaar maken
- Malware op de juiste plek krijgen

Tijdens de weaponization fase gaat de aanvaller opzoek naar bestaande exploits voor de gevonden kwetsbaarheden (of deze worden zelf geschreven).

Hoe je malware ongedetecteerd kan leveren:
- NTFS hidden steams
	- https://www.forensicfocus.com/articles/dissecting-ntfs-hidden-streams/
	- https://superuser.com/questions/11822/why-the-heck-does-ntfs-allow-invisible-executables
- Autorun
	- https://security.stackexchange.com/questions/267255/is-it-recommended-to-disable-autoplay-in-windows-11-from-a-security-perspective
- Executable code embedded in data files
	- https://security.stackexchange.com/questions/8113/how-to-inject-executable-malicious-code-into-pdf-jpeg-mp3-etc
- LLM’s: prompts in code comments (prompt injection) / “invisible” UTF-8 tekst

## Exploit kits
Malware als een service is ook een ding. Evil programmeur. Sommige individuelen of groepen verkopen exploit kits die je kan gebruiken als hacks. Basically dus een kant-en-klare exploit die je leuk kan gebruiken om evil dingen te doen.

TE koop of te huur:
- Legaal voor overheden (????) (bv. NSO Group, cellebrite)
- Overigen: darkweb (Tor / I2P / Freenet marketplace)
	- 2026: Coruna, Roundish, MuddyWater, Sednit
- Maken geavanceerde aanvalstechnieken toegankelijk voor minder ervaren aanvallers
- AI als een multiplier en/of enabler
	- “script kiddie” op niveau van APT
- De meest bekende: [Metasploit](https://www.metasploit.com/)

## Phising
Nepmailtjes! pas op dat je een mailtje krijgt van “microsoft” en niet “rnicrosoft”!!!
- ![[Vault-data/Attachments/4 - Cyber kill chain 2.png]]

Ook kan je de russiche a (bijvoorbeeld) gebruiken.
- ![[Vault-data/Attachments/4 - Cyber kill chain 2-3.png]]

asnbank is niet het zelfde als аsnbank!
- ![[Vault-data/Attachments/4 - Cyber kill chain 2-1.png]]
- ![[Vault-data/Attachments/4 - Cyber kill chain 2-2.png]]

### Waterhole attack
- Recon / weaponization / delivery fase
- Aanvaller compromitteert een website / service waarvan hij weet dat het beoogde slachtoffer deze regelmatig bezoekt

## En nu…
Delivery! De “wapens” zijn geselecteerd en voorbereid. De volgende stap is nadenken over de aanval en de manier waarop de aanval ingezet gaat worden.

# Honorary mention: QR codes
Een qr code kan ook malafide zijn! mensen worden er steeds meer bewust van, maar het is heel makkelijk om een qr code gewoon over te plakken naar jouw website.

# References
- https://catnipderby.nl/
- [DigiNotar hack](https://nl.wikipedia.org/wiki/Hack_bij_DigiNotar)
- [The first worm](https://en.wikipedia.org/wiki/Morris_worm)
- [Hidden NTFS steam](https://www.forensicfocus.com/articles/dissecting-ntfs-hidden-streams/)
- [Why the heck does NTFS allow hidden files? - stackoverflow](https://superuser.com/questions/11822/why-the-heck-does-ntfs-allow-invisible-executables)
- [Is it recommended to autoplay in windows 11 from a security standpoint?](https://security.stackexchange.com/questions/267255/is-it-recommended-to-disable-autoplay-in-windows-11-from-a-security-perspective)
- [How to inject executable malicious code in pdf, jpeg, mp3, etc…](https://security.stackexchange.com/questions/8113/how-to-inject-executable-malicious-code-into-pdf-jpeg-mp3-etc)
- https://www.metasploit.com/
- [Metasploitable - self-hosted hacking environment](https://docs.rapid7.com/metasploit/metasploitable-2/)