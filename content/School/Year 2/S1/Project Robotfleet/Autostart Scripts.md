---
tags:
  - school/robot-fleet
  - school/eindproject
  - language/dutch
  - taal/nederlands
---
Linux services worden op de achtergrond gedraaid met een programma genaamd systemd.

# Een systemd service aanmaken
Allereerst moet er een script aangemaakt worden. Schrijf de benodigde code in een scripting language naar keuze. Alles werkt zolang het executable is vanuit de terminal (`chmod +x`). Plaats deze in `usr/bin/scripts`. Maakt deze folder aan als die niet bestaat. 

## Een unit file aanmaken
Dit bestand word de service die aangeroepen word en de gelinkte script runt. Plaats dit bestand in `/opt/startup_services/servicenaam.service`. Maak deze folder als die niet bestaat.

```service
[Unit]
Description=Beschrijving van de service.

[Service]
Type=simple
ExecStart=/bin/bash /usr/bin/scripts/scriptnaam
Restart="always"

[Install]
WantedBy=multi-user.target
```

Link de unit file door het volgende commando te runnen:
```bash
sudo systemctl enable /opt/startup_services/servicenaam.service
```

# De systemd service starten
Zodra de script, unit file en link gemaakt zijn kun je je service starten met het volgende script:
```bash
sudo systemctl start servicenaam
```

Als alles goed is gegaan kun je de status van de service zien met:
```bash
sudo systemctl status servicenaam
```

Stop en restart de service met:
```bash
sudo systemctl stop servicenaam
sudo systemctl restart servicenaam
```

En tot slot, als je de service bij het opstarten wilt aanroepen, type je:
```bash
sudo systemctl enable servicenaam
```