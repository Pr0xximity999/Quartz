---
tags:
  - school/robot-fleet
  - school/eindproject
  - language/dutch
  - taal/nederlands
banner:
---
Het is altijd verstandig om een aantal regels te maken op je main en dev branch. Je wilt namelijk niet dat iemand per ongeluk zijn development code naar main pushed, en dat het door de CI-CD pipeline word opgepakt. En daarnaast moet branch code altijd gereviewed worden voordat het naar dev mag mergen.

Op deze repo zijn er een aantal regels ingesteld voor de `main` en `dev` branch.
# Main branch
De main branch heeft de restrictie dat er alleen gemerged kan worden als de verplichte pull request **6** approvals heeft. Het is 6 omdat dat het aantal mensen in deze groep is. Dit betekent dat er alleen naar main gemerged kan worden als *iedereen* het ermee eens is.

Hiernaast kan main niet verwijderd worden.

# Dev branch
De dev branch heeft ook een merge restrictie, alleen heeft deze een approval requirement van **2**. Dev kan, net zoals main, niet verwijderd worden.
