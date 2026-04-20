---
tags:
  - school/cyber-security
  - taal/nederlands
  - language/dutch
banner:
publish: true
---
> Politieagent van de digitale recherche

*Zelfs de politie kent niet al de wetten uit zijn hoofd.*
# Inrichting nationale politie
De politie is ingedeeld in eenheden, die dan weer is onderverdeeld in districten. Je wilt als politie van Brabant niet helemaal naar zeeland rijden.

## Team cybercrime
Dit team is multidisciplinair:
- Teamleider
- Coordinator
- Digitaal specialist
- Financieel specialisten
	- Crypto valt hier ook onder
- Tactisch specialisten en rechercheurs
- Analisten
- Interventie specialisten
- Accountmanager Publiek Private Samenwerking

# Spelregels en wettjes
De taak van de politie is zorgen voor de openbare orde en veiligheid en wetshandhaving: 

> De politie heeft tot taak in ondergeschiktheid aan het bevoegd gezang en in overeenstemming met de geldende rechtsregels te zorgen voor de daadwerkelijke handhaving van de rechtsorde en het verlenen van hulp aan hen die deze behoeven.
- Artikel 3 Politiewet 2012

De geldende rechtsregels → wetboeken:
- Wetboek van Strafrecht (WvSr)
	- Strafbare feiten en (maximum) straffen
- Wetboek van Strafvordering (WvSv)
	- Hoe strafbare feiten onderzocht en vervolgd worden (spelregels!)
- Bijzondere wetten:
	- Politiewet
	- Wegenverkeerswet
	- Opiumwet
	- wet wapens en munitie
	- Arbo-wet
- Internationale verdragen
	- Verdrag inzake de bestrijding van strafbare feiten verbonden met elektronische netwerken
		- Cybercrimeverdrag
		- etc

# Cybercrime
Cybercriminaliteit! Mensen willen geld of dingen verstoren. Of je bent lekker modern en doet aan gedigitaliseerde criminaliteit.
- Cybercrime: ICT is middel en doel
	- Computervredebreak
	- DDOS-aanval
	- Verduistering digitale gegevens
- Gedigitaliseerde criminaliteit: Oude crime in een nieuw jasje
	- Oplichting
	- Sextortion

[[School/Year 2/S2/Cybersecurity Fundamentals/Module 2 - Weerbaarheid/Gastsprekers/Politie#Wetten en zo|Artikel 138ab]] mentioned !!

Een voorbeeld van strafrecht is achterhalen personalia bij IP-adres

>[!important]
>Als de politie gegevens wilt hebben, moeten ze toestemming hebben met een goede reden voordat ze het krijgen. Dit kan echter aangevochten worden.

>[!info] Artikel 97 feitje (wetboek van strafvordering)
>> Voor een doorzoeking als bedoeld in het eerste lid heoeft de officier van justitie de machtiging van de rechter-commissaris. Deze machitiging is met redenen omkleed. Hoe zwaarder het middel, hoe zwaarder de toetsing
>
>Een vrachtwagenchauffeur die slaapt in zijn vrachtwagen word zelfs gezien als iemand in een woning, en zelf dan heb je een machtiging nodig.

## Hosting
Om een website te maken heb je nodig:
- Computer
- Internet aansluiting
- Code
- Etc…

Maar als je hem 24/7 draaien, moet je een hosting(provider) hebben:
- Shared: Iedereen heeft dezelfde server
- [[Info-tidbits/Vps/Installing a VPS|VPS]]: Je eigen stukje van een server
- Dedicated: Je hebt je eigen server

Wat voor sporen kan je hier op vinden?
- Registratie gegevens (server en domeinnaam)
- Betalingsgegevens (Server en domeinnaam)
- [[School/Year 2/S1/Computer Networks/3 - Ip stack|IP-adressen]] (registraties en gebruik)
- Bestanden op een server

Dit is geen probleem…tenzij je een bad guy bent. Tenzij…
- Je een VPN gebruikt
	- Maar dan ben je weer te traceren
- Betalen met crypto
	- Niet te traceren
- Vals ID opgeven bij registraties
	- Kopen op de zwarte markt
- Bulletproof hosting (de party poopers, volgens de politie)
	- Faciliteeren cybercrime organisaties
	- Hostingbedrijven die opsporingsbedrijven en overheden tegenwerkt
	- Leggen weinig gegevens vast
	- Informeren klanten als politie langs komt
	- Betalen in crypto
	- Laten strafbare feiten toe
	- Geen of trage reacties op vragen
	- Verschillende soorten
		- Offshore: vanuit “lastige” landen
			- Vage eilandgroepen enzo
		- Reseller hosting: Wederverkoop

In 2026 komt er nieuwe wetgeving richting bulletproof hosting: in 2025 was de eerste veroordeeld.

# Onderzoeken

## Opsporing
- Onderzoek klantgegevens
	- Opvragen via hoster (via de nieuwe 2026 EU wet)
- Onderzoek servers / infrastructuur
	- Beslag via hoster of datacenter beheerder
- Follow the crypto
	- Betalingen van klanten en infrastructuur
	- Met crypto kan je niet brood kopen, dus je moet het ergens bij een exchange omzetten
	- Alhoewel een crypto wallet anoniem is, kan hij wel door iedereen ingezien worden wat er in een uit de wallet gaat

## Interventies
- Overname infrastructuur
	- Servers / domeinnamen
	- Autonomous systems (IP-block)
- Beslaglegging crypto
- Sanctioneren
- Operation end-game (naming en shaming, publiekelijk gezet https://operation-endgame.com)
	- Mensen kunnen zich willingly in draaien

> Operation end game video is ai generated 😔

Als je bijvoorbeeld kijkt naar de interventie van de hack forum cracked.io:
- Het had een nl subforum en IP-adressen
- Na filtering waren 700 accounts gevonden
- Image van forum
	- E-mailadres en IP-adressen
	- Berichten (posts en DM’s)
	- Crypto currency adressen
	- Social media (telegram, Discord)
- OSINT
	- Zoekmachines, zoals zoals [EPIEOS](https://epieos.com/)
- Politie systemen om alles te linken
- Interventies op verdachten
	- Email berichten
	- Brieven + e-mailberichten
	- STOP-gesprekken
	- OM-hoorgesprekken
	- Strafrechtelijk vervolgen
- Preventieve interventies
	- Valentijnscampagne
		- Dit onderzoek liep rond Valentijnsdag 
	- Mediaberichten
# Stages en vacatures
Ben je talent bij IT? Maak er je werk van!

Werkvelden zoals:
- Data science
- Cybercrime aanpakken
- Legaal hacken
- Digitaal politiewerk
- informatiebeveiliging
- DevOps
- Open source intelligence
- IT-infrastructuur
# Operation game-play
Voor deze opdracht moeten we een hackers case oplossen.

Je moet een groepnaam verzinnen en een mail adres geven aan de docenten.

# References
- [operation end-game](https://operation-endgame.com/)
- [EPIEOS - The ultimate OSINT tool](https://epieos.com/)