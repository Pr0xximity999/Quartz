---
tags:
  - school/gastcollege
  - language/dutch
  - taal/nederlands
  - school/robot-fleet
publish: "true"
---
>[!info] Bij deel 1 was ik niet
>Hier zijn dus geen notities over :P


Er word verwacht dat rond 2023 6G uitkomt.

# Standaardisatie
Zonder standaardisatie waren mobiele netwerken 1 grote puinhoop.

De VN heeft een organisatie genaamd de ITU(international telecom union) die frequenties voor mobiele communicatie bepaald, satelliet communicatie regelt en andere dergelijke plannen.

De IETF legt standards vast voor communicatie methoden (de onderhouden de RFC’s die op het internet staat).

3gpp maakt specificaties voor mobiele netwerken, en uitrusting voor mobiele providers

GMSA regelt specificaties voor internationale netwerken en dingen zoals simkaarten, e-simkaarten, internationale roaming.

# Vroeger…
Vroeger kom je niet bellen en internet tegelijkertijd hebbem (2G/3G).

Bij 4G en 5G verbind je eerst met een data netwerk, die dan beslist of je internet heb en kan bellen.


# Lagen
De core network architectuur bestaat uit 3 lagen.

De eerste laag is de database laag. Deze bevat data voor abonnementen, regels, en hoe de bundels van gebruikers in elkaar zit (overige data etc.).

De tweede laag is de control plane. Dit is de communicatie laag tussen de database laag en user plane.

De user plane is waar je mee verbind, vanaf hier worden user input geregeld.


# Gebruikers identiteiten in een core network

**MSISDN**: Mobile Station Internation Subscriber Directory Number. Je telefoon nummer. Dit nummer staat niet op je simkaart (06xxxxx)

**IMSI**: International Mobile Subscriber Identity: je simkaart identificatie nummer. Deze word gebruikt op systemen voor jou specifieke telefoon. (voor nederland start bij met 204xxxxxx)

**IMEI**: International Mobile Equipment Identity: Een uniek nummer voor je telefoon waar je model en software informatie in staat. Kan gebruikt worden om telefoons te blokkeren als hij bijvoorbeeld gestolen.


# Wat gebeurt er als je een nieuwe telefoon krijgt

1. ***De simkaart word gemaakt in een fabriek.*** 
   Gebeurt allemaal veilig in een afgesloten omgeving omdat er encryption keys staat op je sim. Super beveiligt.
2. ***De simkaart gaat naar de provider.*** 
   Er zijn 5 tot 10 bedrijven die de simkaarten rondbrengen omdat het ook veilig is.
3. **Een klant koopt een sim.**
   Hij word geregistreerd en gekoppeld, gekoppeld met een KYC systeem (know your customer), bijvoorbeeld een betaling van 1 cent.
4. ***Alle informatie over je identiteit en simkaart word in de database gezet.***
   Je [[#Gebruikers identiteiten in een core network|identiteiten]] komen hier terecht
5. **Je sim word geactiveerd**
6. **Authenticatie en netwerk verbinding**
7. **je service producten word geactiveerd**

# Wat gebeurt er als je van verbinding wisselt
1. **Je telefoon scant voor beschikbare netwerken**
   Op je sim staat met werk netwerk je moet verbinden (de HPLMN, Home Public Land Mobile Network, je provider voorkeur). Als er meerdere mogelijke netwerken zijn, en de eerste werkt niet, zal je met een ander netwerk verbinden.
2. **Selecteer netwerk en registreer de gebruiker door de user data database**
   Er zit een controller genaamd de mobility management unit in het systeem, die regelt dat je van toren naar toren kan verbinden terwijl je rond beweegt. 
   Roaming is hier iets anders in, in het buitenland kan je constant verbinding met een toren verliezen, waardoor je helemaal opnieuw moet beginnen met het verbinden. Alleen krijg je een stukje van het netwerk, die dan ook weer met de database in nederland moet verbinden.
3. **Start een data sessie, zet polis regels en start het aftrekken van je krediet**
   Een sessie manager houd je abonnement data bij
4. **Selecteer de user plane gateway naar het netwerk en zorg ervoor dat je data krijgt**
   Je hebt 2 data verbindingen: een internet en telefonie verbinding, die dan weer onderliggende “Bearers” hebben die je verbinding onderhouden.



# Quality of Service Class Identifier
Binnen een telefoon netwerk zijn verschillende services. Deze hebben allemaal een bepaalde Quality of Service (QoS) identificatie. Deze identificaties hebben allemaal een minimale delay wat het nog verdraagbaar maakt.

# Technologie geschiedenis
Vroeger werd alles gebouwd door Nokia, Ericsson, Huawei allemaal zelf gemaakt. Allemaal gemaakt voor hun eigen bedrijf. 

Later werden systemen gevisualiseerd door bedrijven zoals HPE en Dell. Alles werd op virtual machines gemaakt en dat word op hardware gedraaid.

Tegenwoordig word alles op containers gedraaid in programma’s zoals Kubernetes, alles is cloud native en veel makkelijker om mee om te gaan.

Qua hardware was het iets meer, maar qua kosten was het een stuk goedkoper. Het kan werken op commerciële hardware.

# Terminology
>**Network function**: een gestandaardiseerd, goed gedefinieerde functionele blok in de Core network architecture. Een network function geeft dezelfde functie voor alle providers.


# 5G core
In 5G zijn allemaal verbeteringen gemaakt. Natuurlijk gewoon de internet verbindingen, maar ook dingen zoals:
- media versturen, journalisten hebben geen satellietbussen meer nodig
- voertuigen besturen en infrastructuur, bussen die verbindingen kunnen gebruiken bijvoorbeeld
- Kritische besturing van afstand bestuurbare apparaten
- Interactie tussen mensen en IoT (internet of things), nog in ontwikkeling

het 5G core netwerk word dan bovenop bestaande infrastructuur bebouwd, wat soms goed werkt voor oude functies, maar niet voor de nieuwe functies. Daarom worden er steeds meer netwerken volledig vervangen door 5G dominante opstellingen, wat sneller en veiliger is. Momenteel is het in nederland nog in ontwikkeling, maar er word verwacht dat het rond 2026 allemaal overgezet is.


## Locaties
Qua Europa loopt nederland behoorlijk achter. Veel delen van de wereld zijn al overgestapt (natuurlijk hebben de meeste landen nog niet eens 4G).

## Use cases
**eMBB**: evolved mobile broadband → veel gebruikers, veel data, mindere latency is minder belangrijk. (grotendeels voor gebruikers)

**URLLC**: Ultra Reliable Low Latency Communication → minder gebruikers, latency is erg belangrijk, net zoals data gebruik. (robotica, gaming, medische doeleinden)

**MMTC**: Massive Machine Type communication → Heel veel apparaten, kleine beetjes data. (moet super veel apparaten ondersteunen)

Network Slicing → virtuele netwerken met specifieke eigenschappen (moet een beetje van alle use cases coveren)
Network Exposure → een “programmeerbaar netwerk”; externe applicaties kunnen network functionaliteit gebruiken voor bijvoorbeeld locatie, authenticatie en berichten sturen.

## Architectuur
5G architectuur heeft ook weer 3 lagen, maar er lopen meer functies in parallel. Functies spreken met elkaar door middel van interfaces.

Een andere methode die word toegepast is de **service bus** architectuur. Alles is parallel op 1 laag, en je “subscribed” naar een functie (zoals in mqtt). Je stuurt al je data naar 1 punt, die het dan onderling regelt en alles terug stuurt wat je nodig hebt. De overhead en bouwen van dit soort netwerk is moeilijker, maar het is veel makkelijker en sneller om mee te werken.

# Networks slicing
Slicing zorg ervoor dat gebruikers in bepaalde slices worden gestopt, waardoor je buiten bepaalde netwerken kan zitten en toch in drukke plekken een goede verbinding hebben. Bijvoorbeeld een journalist fotograaf in een druk voetbal stadion. De redactie bepaald voor een andere “slice” waardoor ze toch een goede verbinding hebben.

# Hoe kan je low latency realiseren
Soms kan je latency erg oplopen, terwijl je met de server aan de andere kant van de gang te verbinden? 

Een manier is om een antenne en user gateway op te zetten in je eigen gebouw.

# Netwerk exposure door API’s
Deze informatie is allemaal super nieuw.

Als je functionaliteit wilt bieden over 5G, moet je er wel voor zorgen dat het werkt voor alle providers. Door middel van meerdere API’s kunnen deze functionaliteiten worden opengesteld voor verschillende providers.