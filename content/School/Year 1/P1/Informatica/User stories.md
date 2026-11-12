---
tags:
  - language/dutch
  - taal/nederlands
  - school/planning
  - school/informatica
  - school/smart-energy
publish: "true"
---
>[!tip]- Dit is een toevoeging op de college les
> De college notities kan je [[School/Year 1/Colleges/Requirements|hier]] vinden

>[!important]- Gebruikte bron
>https://se-education.org/se-book/specifyingRequirements/index.html#user-stories

>[!abstract]- De tool die ik gebruik om diagrammen te tekenen
> Zelf gebruik ik [draw.io](https://draw.io), maar school raad ook de volgende websites aan:
> - [Astah UML](https://astah.net/products/free-student-license/)
> - [Visual Paradigm](https://www.visual-paradigm.com/download/community.jsp)
> - [Lucidchart](https://www.lucidchart.com/pages/usecase/education)
> - [UML Use Case Diagram Tutorial](https://www.lucidchart.com/pages/uml-use-case-diagram)
# Wat is een user story?
Een user story is een korte en simpele beschrijving van een feature die vanuit het perspectief van de gebruiker word verteld. De gebruiker is het persoon die de feature zal gebruiken.

Een veel gebruikt formaat van een user story is het volgende:
``Als een {gebruiker type/rol} wil ik {functie} zodat {voordeel}``

>[!example] Voorbeelden
> - Als een **tuinman** wil ik **een grasmaaier met een lange batterijduur** zodat **ik langer gras kan maaien voordat ik de grasmaaier weer moet opladen**.
> - Als een **student** wil ik **gastcolleges terug kunnen vinden op brightspace** zodat **ik er later nog terug naar kan kijken**.
> - Als een **programmeur** wil ik **een IDE met een snelle build tijd** zodat **ik minder hoef te wachten**.

Het fijne aan dit soort user stories is dat het kort en bondig is, waardoor je het op dingen zoals sticky notes of Trello items kan schrijven.

# User story details

## Je kan een deel weglaten (soms)
Soms is het ``{voordeel}`` gedeelte van de user story al van zelf sprekend en kan je deze weglaten van de story.

>[!example] Voorbeeld
> - Als een **programmeur** wil ik **een IDE met een snelle build tijd** ~~zodat **ik minder hoef te wachten**~~

Let op als je dit doet, dat er **geen ruimte ontstaat voor interpretatie**
Een manier om meer context toe te voegen kan zijn om de ``{gebruiker rol}`` uit te bereiden.

>[!example] Voorbeeld
> - Als een **==Drukke== programmeur** wil ik **een IDE met een snelle build tijd**

Op deze manieren kan je het kort houden terwijl je geen concreetheid verliest
## Je kan overkoepelende verhalen schrijven
Soms heb je een requirement die te breed is voor één user story. In dit geval kan je er een **epic(of thema)** van maken. Deze kan je dan ontleden tot meerdere user stories.

>[!example] Voorbeeld
> \[epic] Als een programeur wil ik minder wachten op mijn IDE
> - Als een programmeur wil ik dat mijn IDE sneller build
> - Als een programmeur wil ik dat intellisense gelijk opstart
> - Als een programmeur wil ik dat mijn IDE onder 10 seconden opstart
> - Als een programmeur wil ik dat ik bepaalde features van mijn IDE uit kan zetten zodat ik meer performance krijg

## Je kan voldoening condities toevoegen
Soms is het handig als je kan specificeren **wat er gedaan moet worden** zodat er beter geweten kan worden wanneer deze user story *af* is.
Door een lijst aan condities toe te voegen aan de user story kan je dit makkelijker maken.

>[!example] Voorbeeld
> Als een programmeur wil ik het koffiezetapparaat aan kunnen zetten vanaf mijn bureau zodat mijn koffie klaar is als ik bij het koffiezetapparaat ben aangekomen.
> Condities:
>- [ ] Installeer een koffieknop op het bureau
>- [ ] Maak een draadloze verbinding tussen de knop en het koffiezetapparaat
>- [ ] Zorg ervoor dat het koffiezetapparaat uit zichzelf een kopje koffie kan zetten

>[!note] Overige details
>- **Prioriteit**: Geef aan hoe belangrijk de user story is
>- **Formaat**: Geef aan hoeveel werk de user story gaat kosten
>- **Urgentie**: Geef aan hoe snel de user story af moet zijn
