---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
publish: true
---
Your program does not always work, sometimes stuff just does not work. You need a way to remedy fixes if needed.

# Some issues you might run into
**Your application does not compile**: Look at the errors your compiler gives you. They usually tell you the line number in what file what a rough error of what went wrong.

**Your application crashes (Exception)**: Step trough your code, one line at a time (debugging) to look at what line it crashes, or place down print statements (don’t forget to remove them after :P)

**Your application gives false data back(bug)**: Know how the process works, and analyse how each step works. Maybe you just made a calculation error somewhere.

**Your application doesn’t communicate (well) with another process or server**: Ping the host so see if it’s available (be certain that the firewall doesn’t block pings). Check the host if the process is running at all. Send the host a connection request using something like Telnet.

# Connecting
Your connection fails to be created. What steps can you take?

Get more info about your request using commands like:
- ipconfig / ifconfig (windows/linux)
- arp
- ping
- traceroute

Use network analysis tools like:
- netstat (get all current network requests)
- nmap (network mapping, scans ip addresses and open ports)

For deeper analysis, you can use wireshark. Wireshark can be used to track all ongoing network traffic on your current connected router and can be used to listen in on http traffic (also https but that is encrypted). Wireshark does this by setting your network card in “Promiscuous mode”, which analyses everything that goes trough it.

Wireshark can log in to a wpa2 wifi connection and grab every handshake key that comes after it, being able to listen in on https network.