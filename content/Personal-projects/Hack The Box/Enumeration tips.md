---
tags:
banner:
publish: false
---
# Linux enumeration
- [linpeas](https://github.com/peass-ng/PEASS-ng/tree/master/linPEAS)
- [linux exploiter suggester](https://github.com/The-Z-Labs/linux-exploit-suggester)
- https://juggernaut-sec.com/manual-enumeration-lpe/
	- https://juggernaut-sec.com/weak-file-permissions/
	- ![[Vault-data/Attachments/Enumeration tips file perms.png]]
- https://hacktricks.wiki/en/linux-hardening/privilege-escalation/index.html`service --status-all`
- https://angelica.gitbook.io/hacktricks
## External enumeration
- `nmap -p- -sV -sC <ip>`
- `ftp <ip>` (check for anonymous login)
## Internal service enumeration
- `sudo -l`
- `ss -tulpn`
- `cat /etc/passwd | grep -i '/bin/.*sh'` to see all users with shell
- `ps aux`
- `service --status-all`
- `ls -l /etc/passwd`
- `ls -l /etc/shadow`