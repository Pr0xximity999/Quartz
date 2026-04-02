---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: true
---

>[!note]
>Next part found [[School/Year 2/S2/Cybersecurity Fundamentals/Module 3 - Mens en Techniek/Workshops/5 - Cyber kill chain 2|here]].
>

>[!important] Opdracht - hack!!
>Voor deze opdracht moet je “de student” aanvallen. Zodoende gaan jullie veldwerk doen. Dat betekent rondlopen en goed kijken naar kwetsbaarheden in de leefomgeving van de “student”. **Het resultaat van deze opdracht heb je nodig voor de volgende workshop**.
>1. Welke waardevolle spullen heeft de student? (Denk ook out-of-the-box)
>2. Welk aanvalsoppervlak heeft de student?
>3. Welke kwetsbaarheden kan je vinden in het aanvalsoppervlak? (Leg dit ook vast met foto’s of schermafdrukken)
>	- Onderzoek de fysieke omgeving (gebouw) van de “student”
>	- Onderzoek de digitale omgeving (applicaties en tools) van de “student”
>	- Onderzoek de “student” zelf en zijn/haar interesses
>	- …Bedenkt zelf ook een paar interessante onderzoeken
>4. Werk een aanvalsplan uit op welke manier je de waardevolle spullen van de “student” kan bemachtigen door de gevonden kwetsbaarheden te misbruiken.
>5. Maak een **presentatie** waarin de bovenstaande punten terugkomen. Het aanvalsplan mag als een infographic getoond worden.

# De cyber kill chain
De cyber kill chain is de definities van een model wat verschillende fasen van een cyberaanval in kaart brengt; van verkenning tot het uiteindelijke doel.

De USA gebruikt het bijvoorbeeld voor cyberaanvallen tegen andere landen.

De cyber kill chain helpt bij het begrijpen van de tactieken en technieken van aanvallers en biedt aanknopingspunten voor het opzetten van een effectieve verdediging.

Een cyberaanval kan als een kettingreactie gezien worden: Het breken van een schakel maakt het moeilijker voor de aanvaller om naar de volgende schakel te springen.

De cyber kill chain bestaat uit 3 fasen:
1. Preparation
	- Reconnaissance
	- Weaponization
2. Intrusion
	- Delivery
	- Exploitation
	- Installation
3. Breach
	- Command and control
	- Actions on objective

## Fase 1: Voorbereiding
- **Reconnaissance (footprinting)**
	- Informatie verzamelen (systemen, mensen, procedures)
	- Zwakke plekken identificeren
	- Passive footprinting: publiek toegankelijke informatie ([[OSINT]])
	- Active footprinting: interactie met organisatie / social engineering
- **Weaponization**
	- Voorbereiden van een aanval
	- O.b.v. de gevonden kwetsbaarheden
	- Malware, exploits, tools ontwikkelen of kiezen
	- De payload configureren

Samengevat: Je kan dit vergelijken van het plannen van een overval. Herken je doelwit en kijk hoe je de zwakheden kan exploiteren.

## Fase 2: Intrusion
- **Delivery**
	- De payload (schadelijke code) bij het doelwit afleveren
	- Hacking, gadgets (USB-sticks) ‘laten vinden’
	- Social engineering
		- (spear)phishing
		- Vishing: Impersonation via telefoon; iemand iets laten installeren
- **Exploitation**
	- Een kwetsbaarheid in een systeem van het doelwit misbruiken om toegang te verkrijgen (mogelijk met de hulp van ‘iets’ gekeverd ub de delivery stap)
- **Installation**
	- Zorgen dat de aanvaller blijvende toegang heeft tot het systeem (ook na een reboot)

Je kan deze stap vergelijken met het binnendringen van een goed beveiligt gebouw:
- Eerst moet je een manier vinden om binnen te komen (delivery)
- Dan de beveiliging omzeilen (exploitation)
- En tot slot zorgen dat je later terug kunt komen (installation), door bijvoorbeeld het ontgrendelen van een branddeur.
	- Note: sommige (geavanceerde) malware is non-persistent (in-memory only). Maakt detectie (minder IoC’s) weer stukje lastige

## Fase 3: Breach
- **Command & Control (C2)**
	- Communicatiekanaal opzetten tussen de aanvaller en het gecompromitteerde systeem
	- Communicatie verbergen of onschuldig laten lijken
		- https://blog.gigamon.com/2021/01/20/dns-c2-sandwich-a-novel-approach/
	- Toegang tot systeem behouden
- **Actions & Objectives**
	- Het geplande doel voltooien
	- Data exfiltratie, sabotage (wiperware), spionage, ransomware, cryptojacking, etc...
	- Deze stap kan heel lang duren!
		- https://arstechnica.com/security/2023/11/hackers-spent-2-years-looting-secrets-of-chipmaker-nxp-before-being-detected/

Vergelijk het met het plunderen van de kluis nadat je het bankgebouw bent binnengedrongen (intrusion). Je hebt nu controle (C2) en kunt je slag slaan (actions on objective), afhankelijk van wat het doel was.

Hoeft niet altijd digitaal te zijn! kijk naar [[#References|stuxnet]]

# Actoren
Cybercriminelen
- Financieel gewin

State actors (APT* groepen)
- Spionage, sabotage, manipulatie

Hacktivists
- Ideologisch / politiek statement
- Stiekem vaak toch state actors

Insider threats
- Wraak, financieel gewin

Script kiddies
- Vandalisme, ‘voor de lulz’, status
- ‘targets of opportunity’
- Vaak minder gestructureerd
- Maar kan net zo desastreus zijn:
	- Lapsus$:
		- https://www.bbc.com/news/technology-66549159 )

# Open Source Intelligence
Openbaar gevonden informatie wat legaal en openbaar beschikbaar is. You know the drill by now. Kan je gebruiken om te analyseren. Zowel verdedigers als aanvallers kunnen dit gebruiken.

Bronnen zoals:
- Social media
- Publicaties van bedrijven (website, maar ook b.v. jaarverslagen!)
- Zoekmachines (Google, **Shodan**, DuckDuckGo, Bing)
- https://osintframework.com/

# Social engineering
Social engineering is het manipuleren van mensen om informatie te verkrijgen die gebruikt kan worden bij een cyberaanval.

Social engineering kan variëren van iemand bellen en je voordoen als een IT-medewerker om wachtwoorden te ontfutselen, tot het opbouwen van valse online relaties om vertrouwelijke informatie los te weken.

“Poster boy” van vroeger: Kevin Mitnick

Een voorbeeld van social engineering is de XZ backdoor hack:<br>
![[Vault-data/Attachments/4 -Cyber kill chain.png]]

# Dumpster Diving
Een afval kliko heeft vaan nuttige info loggen
- Opslag media, formuleren, rapporten.
- Lastiger met ‘paperless office’

Vaak is er een vernietiging proces aanwezig, maar die word niet altijd gevolgd.

Legaliteit? https://www.reddit.com/r/juridischadvies/comments/djjzzt/hoe_legaal_is_dumpster_diving/ - NOT LEGAL ADVICE!!

# Technische OSINT
- www.google.nl
- google hacking – Johnny Long: "intitle:nessus scan report" "this file was generated by nessus"
- Website mirroring (webripper)
- DNS: whois, nslookup, dig –t any
- Traceroute: traceroute -m 200 -I jmnl.nl
- Shodan
- Wigle
- nmap

# Ethical Hacker?
Een ethische hacker (white hat hacker) is iemand die dezelfde tools en skills gebruikt als een malifiede hacker (black hat hacker), maar dan met toestemming en support van een client om deze te helpen met het beveiligen van een systeem of netwerk.

Een ethische hacker gebruikt alleen legale informatiebronnen.

Bij actieve stappen ALLEEN met toestemming en supervisie (https://www.divd.nl/what-we-do/code-of-ethics/)

# Veilig software downloaden
Hoe weet je dat de software die je download ook echt is wat je wilt?

Een checksum is een [[School/Year 2/S1/Computer Networks/5 - Cryptography|hash]] van het bestand wat je download wat mee word gestuurd, wat je kan gebruiken om je bestand’s integriteit te checken.

Lees [[School/Year 2/S1/Computer Networks/5 - Cryptography|hier]] meer over cryptografie en encryptie.

## PGP encryptie
Om onze communicatie te versleutelen gebruiken we a-symmetrische [[School/Year 2/S1/Computer Networks/5 - Cryptography|encryptie]]. Een van die encryptie methoden is de PGP algoritme (pretty good privacy). De package of software die dit gebruikt heet GPG (Gnu-pgp). 

Voor GPG downloads kan je [hier](https://gnupg.org/download/index.html) kijken

## Secure hash functie karakteristieken
1. De output van de hash h(x) of bericht x is altijd het zelfde
2. Snel
3. Kleine aanpassingen in x veranderd de hash gelijk volledig
4. Avoid collisions: er moeten geen 2 verschillende waarden van x zijn die dezelfde hash geven.

- https://en.wikipedia.org/wiki/Secure_Hash_Algorithms
- https://andersbrownworth.com/blockchain/hash

Encryptie en hashing word gebruikt voor:
- Versleutelen van data (confidentiality)
- Integriteit van data bewaken (integrity)
- Je identiteit bevestigen (integrity)
- Blockchain integriteit (integrity)
- Licenties uitsturen (integrity)

Ja vooral dus om integriteit van data te bewaken.

![[Vault-data/Attachments/4 - Cyber kill chain.png|367]]

# References
- [DNS C2 Sandwich](https://blog.gigamon.com/2021/01/20/dns-c2-sandwich-a-novel-approach/)
- [Hackers were in a chipmaker system for 3 years before being detected](https://arstechnica.com/security/2023/11/hackers-spent-2-years-looting-secrets-of-chipmaker-nxp-before-being-detected/)
- [black energy](https://arstechnica.com/information-technology/2016/01/analysis-confirms-coordinated-hack-attack-caused-ukrainian-power-outage/)
- [Stuxnet 1 - Volkskrant](https://www.volkskrant.nl/kijkverder/v/2024/sabotage-in-iran-een-missie-in-duisternis~v989743/)
- [Stuxnet 2 - blog](https://arstechnica.com/tech-policy/2016/02/massive-us-planned-cyberattack-against-iran-went-well-beyond-stuxnet/)
- [Stuxnet 3 - YouTube](www.youtube.com/watch?v=7g0pi4J8auQ)
- [Stuxnet 4 - Podcast](https://open.spotify.com/show/4XPl3uEEL9hvqMkoZrzbx5)
- [Lapsus$ - Teenagers found being on hacking spree](https://www.bbc.com/news/technology-66549159)
- [shodan - IOT search engine](https://www.shodan.io/)
- [OSINT framework](https://osintframework.com/)
- [Kevin Mitnick - A very good social engineer (YouTube)](https://www.youtube.com/watch?v=YmGwdoS706M)
- [Hoe legaal is dumpster diving? - Reddit](https://www.reddit.com/r/juridischadvies/comments/djjzzt/hoe_legaal_is_dumpster_diving/).
- [DIVD - Code of Ethics](https://www.divd.nl/what-we-do/code-of-ethics/)
- [GPG download sources](https://gnupg.org/download/index.html)
- [Secure Hashing Algorithms - Wikipedia](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms)
- [SHA256 hashing](https://andersbrownworth.com/blockchain/hash)


