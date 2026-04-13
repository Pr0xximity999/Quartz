---
tags:
  - school/2D-graphics
  - language/dutch
  - taal/nederlands
  - school/sofware-dev
  - school/secure-backend
---

This is the list of all requirements.

- [x] set swagger to only run in dev environment.

## Functionele eisen
### Must have

- [x] **Als gebruiker wil ik mezelf kunnen registreren op basis van een gebruikersnaam en wachtwoord.**
	- [x] Er bestaat nog geen gebruiker met deze gebruikersnaam. De gebruikersnaam is uniek.
	- [x] Wachtwoord moet minimaal 10 karakters lang zijn.
	- [x] Wachtwoord moet minstens 1 lowercase, uppercase, cijfer en niet-alfanumeriek karakter bevatten.
	- [x] front-end
	- [x] unit test (kinda optional but also not)
	- Meeste is default al met identity framework

- [x] **Als gebruiker wil ik kunnen inloggen op basis van mijn gebruikersnaam en wachtwoord.**
	- [x] De gebruiker ziet een foutmelding wanneer de gebruikersnaam of wachtwoord niet correct is.
	- [x] front-end
	- [x] unit test (kinda optional but also not)
	- Is standaard met identity framework

- [x] **Als gebruiker wil ik een nieuwe lege 2D-wereld aan kunnen maken.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] De gebruiker moet een naam invoeren voor de nieuwe 2D-wereld.
	- [x] De naam voor de nieuwe 2D-wereld mag niet identiek zijn aan de naam van een al bestaande 2D-wereld van de gebruiker.
	- [x] De naam voor de nieuwe 2D-wereld is minimaal 1 karakter en maximaal 25 karakters lang.
	- [x] De gebruiker mag niet meer dan 5 eigen 2D-werelden hebben.
	- [x] De nieuwe 2D-wereld wordt opgeslagen.
	- [x] front-end
	- [x] unit test (kinda optional but also not)

- [x] **Als gebruiker wil ik een overzicht van mijn bestaande 2D-werelden kunnen bekijken.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] Het overzicht toont de naam van de bestaande 2D-werelden van de gebruiker.
	- [x] Front-end
	- [x] unit test (kinda optional but also not)

- [x] **Als gebruiker wil ik één van mijn bestaande 2D-werelden kunnen bekijken.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] 2D-objecten die gekoppeld zijn aan deze 2D-wereld worden correct getoond op basis van de attributen van het 2D-object.
	- [x] De gebruiker kan alleen één 2D-wereld bekijken.
	- [x] Front-end
	- [x] unit test (kinda optional but also not)

- [x] **Als gebruiker wil ik een 2D-object aan mijn openstaande 2D-wereld kunnen toevoegen.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] De gebruiker kan kiezen uit minimaal 3 beschikbare 2D-objecten.
	- [x] Het nieuwe 2D-object wordt opgeslagen.
	- [x] front-end
	- [x] unit test (kinda optional but also not)

- [x] **Als gebruiker wil ik een door mij gemaakte 2D-wereld kunnen verwijderen.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] De 2D-objecten die gekoppeld zijn aan deze 2D-wereld worden ook verwijderd.
	- [x] front-end
	- [x] unit test (kinda optional but also not)

### Should have

- [ ] **Als gebruiker wil ik de positie, rotatie of schaal van een bestaand 2D-object in een door mij gemaakte 2D-wereld kunnen aanpassen.**
	- [ ] De gebruiker moet ingelogd zijn.
	- [ ] De aanpassing van het 2D-object wordt getoond.
	- [ ] De aanpassing van het 2D-object wordt opgeslagen.

- [x] **Als gebruiker wil ik een 2D-object in een door mij gemaakte 2D-wereld kunnen verwijderen.**
	- [x] De gebruiker moet ingelogd zijn.
	- [x] Het 2D-object wordt niet meer getoond.
	- [x] Verwijderen van het 2D-object wordt opgeslagen.

- [x] **Als gebruiker wil ik de camera kunnen bewegen terwijl ik een 2D-wereld bekijk zodanig dat ik heel de 2D-wereld kan bekijken.**
	- [x] De gebruiker kan de camera naar links, rechts, boven en onder bewegen met de bijbehorende pijltoetsen op het toetsenbord.

- [x] **Als gebruiker wil ik de grootte van mijn 2D-wereld specificeren in maximale lengte (X) en maximale hoogte (Y) wanneer ik een nieuwe lege 2D-wereld aanmaak.**
	- [x] De maximale lengte moet een geheel getal zijn tussen 20 en 200.
	- [x] De maximale hoogte moet een geheel getal zijn tussen 10 en 100.
	- [x] De positie van 2D-objecten in deze 2D-wereld mag zich niet buiten de maximale lengte of maximale hoogte van de 2D-wereld bevinden.

- [ ] **Als gebruiker wil ik een door mij gemaakte 2D-wereld kunnen delen met een andere gebruiker op basis van hun gebruikersnaam.**
	- [ ] De gebruiker voert de gebruikersnaam in van de user waarmee ze hun 2D-wereld willen delen.
	- [ ] De gebruiker ontvangt geen feedback over de ingegeven gebruikersnaam, enkel bevestiging dat de 2D-wereld met deze user nu gedeeld is.
	- [ ] Indien de gebruikersnaam bestaat kan de gebruiker van dit account de gedeelde 2D-wereld vanaf nu bekijken.

- [ ] **Als gebruiker wil ik dat een 2D-object een animatie afspeelt wanneer het in de 2D-wereld wordt geplaatst.**

- [ ] **Als gebruiker wil ik dat een 2D-object een animatie afspeelt wanneer ik erop klik.**

### Nice to have
- [x] **Als gebruiker wil ik dat door mij aangemaakte, aangepaste en verwijderde 2D-objecten pas worden opgeslagen wanneer ik kies om mijn uitgevoerde acties op te slaan in plaats van dat deze onmiddellijk opgeslagen worden.**  
	- [x] Data over aangemaakte, aangepaste en verwijderde 2D-objecten worden pas opgeslagen wanneer de gebruiker op een Save-knop klikt.

## Requirements Checklist

### Must have
- [x] **Als developer wil ik dat er unittesten worden opgesteld voor de secure backend zodanig dat de betrouwbaarheid van de code verbeterd wordt.**  
	- [x] Er zijn unit testen opgesteld voor minstens 3 acceptatiecriteria.  
- [x] Als developer wil ik dat er systeemtesten worden opgesteld voor de secure backend zodanig dat de betrouwbaarheid van het systeem verbeterd wordt.  
- [x] Als developer wil ik dat de secure backend gedeployed is in cloud zodanig dat deze online beschikbaar is.  
- [x] Als developer wil ik dat de code van de Unity applicatie onder version control staat op een git repository in cloud.  
- [x] Als developer wil ik dat de code van de secure backend onder version control staat op een git repository in cloud.  
- [x] Als developer wil ik dat een push naar de git repository van de secure backend zorgt voor het automatisch uitvoeren van de unittesten.  
- [x] Als developer wil ik dat een push naar de git repository van de secure backend zorgt voor het automatisch deployen van de API en database naar cloud indien de testen slagen.  
- [x] Als developer wil ik dat credentials in cloud op een veilige manier worden behandeld zodanig dat deze niet door personen buiten mijn developer team kunnen bekeken of gebruikt worden.  
- [x] Als developer wil ik dat de client applicatie met de API communiceert via een beveiligde HTTPS verbinding zodanig dat niet geautoriseerde personen of applicaties de verstuurde berichten niet kunnen lezen of aanpassen.  
- [x] Als gebruiker wil ik dat mijn gegevens beschermd worden tegen SQL injection.  

### Should have
- [ ] Als developer wil ik dat er unittesten worden opgesteld voor de Unity applicatie zodanig dat de betrouwbaarheid van de code verbeterd wordt.  

### Nice to have
- [ ] Als gebruiker wil ik dat de Unity applicatie beschikbaar is via browser als een webapplicatie zodanig dat ik deze applicatie niet op mijn computer hoef te installeren.  
- [ ] Als developer wil ik dat er systeemtesten worden opgesteld voor de Unity applicatie zodanig dat ik weet dat het systeem correct werkt.  
- [ ] Als developer wil ik dat een push naar git repository van de Unity applicatie zorgt voor het automatisch uitvoeren van de unittesten.  
- [ ] Als developer wil ik dat een push naar de git repository van de Unity applicatie zorgt voor het automatisch deployen van de API en database naar cloud indien de testen slagen.  
- [x] Als developer wil ik dat de Unity applicatie automatisch de token vernieuwd bij de secure backend wanneer de token verlopen is zodanig dat de gebruiker niet opnieuw in moet loggen.
	1. in the `HandleLoginError` check wether it is a 401
	2. do a call to the backend to refresh the token
	3. save the new token
	4. send to login screen