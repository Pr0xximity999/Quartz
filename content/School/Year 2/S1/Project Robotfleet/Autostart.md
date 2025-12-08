---
tags:
  - school/robot-fleet
  - school/eindproject
  - language/dutch
  - taal/nederlands
---
Linux services worden op de achtergrond gedraaid met een programma genaamd systemd.

# Een systemd service aanmaken
Allereerst moet er een script aangemaakt worden. Schrijf de benodigde code in een scripting language naar keuze. Alles werkt zolang het executable is vanuit de terminal (`chmod +x`). Plaats deze in `usr/bin/scripts`, maakt deze folder aan als die niet bestaat. 

sudo systemctl enable /opt/startup_services/zenoh.service

sudo chmod 664 /etc/systemd/system/zenoh.service    

