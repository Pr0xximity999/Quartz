---
tags:
  - school/robot-fleet
  - school/eindproject
  - language/dutch
  - taal/nederlands
banner:
---
Inloggen met SSH op de robot kan onhandig worden als je steeds opnieuw je wachtwoord moet invullen. Gelukkig is hier een oplossing voor bedacht: pubkey authenticatie. Pubkey authenticatie werkt als volgt:

# Zet pubkey authentication aan op de server
- Log in op de server met ssh (voer je wachtwoord voor nu nog in)
- 

# Genereer een ssh keyset
linux en windows moeten hiervoor dezelfde commando hebben: `ssh-keygen`.

- Voer `ssh-keygen` uit in een terminal naar keuze
	- Installeer de package als je die niet hebt
- Voer een pad/naam in of laat het leeg voor de default naam
- voer een passphrase in (wachtwoord) of laat het leeg voor geen passphrase (aanbevolen)
- bevestig de passphrase

# Kopieer de pubkey naar de server
Het is belangrijk bij deze stap dat je de `[naam].pub` pakt en **niet** de `[naam]`.
- voer `scp ~/.ssh/[naam].pub user@machine:~/.ssh/` uit in een terminal naar keuze