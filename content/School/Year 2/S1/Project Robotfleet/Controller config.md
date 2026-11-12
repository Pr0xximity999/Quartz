---
tags:
  - school/robot-fleet
  - school/eindproject
  - language/dutch
  - taal/nederlands
---
# locatie
De locatie van de `teleop_twist_joy` package is `/opt/ros/jazzy/share/teleop_twist_joy/`. In de `/config` folder bevinden zich de controller configuration files.

# Symlink uitleg
De Logitech controller config staat in `~/rens_ws/joy_config/`. In plaats van dat deze config in de juiste folder word gezet, wordt er een symbolic link gemaakt, of `symlink`. Een symlink creëert een bestand op de gekozen locatie die verwijst naar een ander bestand. Een symlink kan een folder of bestand zijn.

Door het gebruik van een symlink kun je bestanden of folders kopiëren zonder dat ze extra ruimte op nemen,  paden naar folders korter maken of, in ons geval, een bestand ‘mirroren’ waardoor je op een makkelijke locatie iets aanpast en alle symlinks passen ook aan.

# Symlink maken
Je creëert een controller config symlink door het volgende commando uit te voeren:
```bash
sudo ln -s /home/rens/rens_hardware/joy_config/logitech.config.yaml /opt/ros/jazzy/share/teleop_twist_joy/config/
```
