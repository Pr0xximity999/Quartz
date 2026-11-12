---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC netmon.htb
```

# Box info
ports:
- tcp/21 - ftp (anonymous allowed)
	- preview shows some files already.
- tcp/08 - http Indy 18.1.37.13946 (Paessler PRTG bandwidth monitor)
- tcp/135 - Microsoft Windows RPC
- tcp/139 - netbios-ssn
- tcp/445 - microsoft DS (server 2008 R2)
- tcp/5985 - http Microsoft HTTPAPI httpd 2.0
- tcp/47001 - idem
- tcp/49664-49669 - Microsoft Windows RPC

# Port 21: ftp
Usually, i’d start at the website, but the ftp is just too much of low hanging fruit to not see if i can get user.

Yep. User flag got

Admin folder is restricted, so let’s look at the website

# Port 80: Indy http
Landing on a login page, first thing what ill do it look up the version number and check the inspector tabs.

Version shows [some cve’s](https://www.cybersecurity-help.cz/vdb/soft/paessler_ag/prtg_network_monitor/18.1.37.13946/) but ill first check the inspector tab a bit more. Doesnt show anything of use.

Ran sqlmap against it, but it didnt find anything