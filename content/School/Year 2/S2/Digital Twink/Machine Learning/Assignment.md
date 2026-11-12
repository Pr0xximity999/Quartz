---
tags:
  - school/digital-twin
  - school/machine-learning
  - taal/nederlands
  - language/dutch
banner:
publish: false
---
# Opdracht 1
Voor dit voorbeeld heb ik pong gebruikt.

States:
- Positie paddle
- Positie paddle tegenstander
- Positie bal
- bewegingsvector bal

Actions:
- Beweeg paddle naar boven
- Beweeg paddle naar beneden

Rewards:
- Sla de bal terug (+1)
- Scoor een punt (+10)
- Mis de bal (-10)

Doel:
- Versla de tegenstander, terwijl je zelf niet de bal mist.


Het doel is om een agent te maken die goed word in pong. Deze moet altijd de bal terug schieten en zo snel mogelijk zijn tegenstander uitschakelen.