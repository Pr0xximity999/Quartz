---
tags:
  - school/robot-fleet
  - school/eindproject
  - taal/engels
  - language/english
---
Zenoh-bridge is het communicatieprotocol die het ROS2 netwerk vergroot tot alle robots op het netwerk. Hierdoor kan er gemakkelijker data over robots worden gestuurd.

>[!important]
>Voordat je deze stappen uit kunt voeren, moet het mesh-netwerk van de routers op de robotvloot opgezet zijn (zie [[School/Year 2/S1/Project Robotfleet/Connecting the router mesh|Connecting the router mesh]]).


>[!info]
> Al deze commandos worden uitgevoerd op de robot, tenzij dit expliciet is aangegeven.
> SSH in je robot voordat je deze commandos uitvoert.
# Installatie
Allereerst moet er een public key van de zenoh repo gedownload worden om de installatie te verifiëren.
```bash
curl -L https://download.eclipse.org/zenoh/debian-repo/zenoh-public-key | sudo gpg --dearmor --yes --output /etc/apt/keyrings/zenoh-public-key.gpg
```

Voeg de zenoh repo toe aan de lijst van system repos.
```bash
# Add repo
echo "deb [signed-by=/etc/apt/keyrings/zenoh-public-key.gpg] https://download.eclipse.org/zenoh/debian-repo/ /" | sudo tee -a /etc/apt/sources.list > /dev/null
# update system repos
sudo apt update
```

Tot slot worden de zenoh-bridge, en de zenoh RMW (Read-Modify-Write) implementatie geïnstalleerd.
```bash
# zenoh-bridge voor ROS2
sudo apt install zenoh-bridge-ros2dds
# RMW gebruikt door zenoh
sudo apt install ros-jazzy-rmw-cyclonedds-cpp
```

# Gebruik
Allereerst moet de juiste RMW gebruikt worden voor ros. Hiervoor moet de `RMW_IMPLEMENTATION` environment variable gezet worden.

Zorg ervoor dat dit bij [[|startup]] van je robot uitgevoerd word.
```bash
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
```

## Op de Main router (coordinator)
Start zenoh-bridge
```bash
zenoh-bridge-ros2dds
```

Zodra andere clients zenoh-bridge opstarten, kun je deze zien met het commando:
```bash
ros2 topic list
```

# Op de sub-routers (robots)
Robots moeten zenoh-bridge starten met wat argumenten om met de main router te verbinden. 

Vervang het IP adres met hetgeen wat je hebt ingesteld in [[School/Year 2/S1/Project Robotfleet/Connecting the router mesh|Connecting the router mesh]] en zet het robot nummer gelijk aan wat het laatste getal in de IP identificatie reeks is (11 → 1, 12 → 2, etc…).
```bash
zenoh-bridge-ros2dds -e tcp/192.168.1.1:7447 -n /robot1
```