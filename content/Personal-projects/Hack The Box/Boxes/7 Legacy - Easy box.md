---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.1.163
```

# Box info
Ports:
- 125 msrpc - Microsoft Windows RPC
- 139 netbios-ssn Microsoft Windows netbios-ssn
- 445 microsoft-ds Windows XP microsoft ds

OS: Windows XP (windows 2000 LAN Manager AKA windows 2000 server)


Looking for windows xp 2000 Lan manager vulnerabilities

`MS08-067` could work; an exploit that leads to remote code execution. found an [exploit written in python](https://gist.github.com/jrmdev/5881544269408edde11335ea2b5438de).

It supposedly works but the netcat connection doesnt start somehow

```
nmap --script smb-vuln-ms08-067 -p445 10.129.1.168
```
shows its vulnerable to `CVE-2008-4250`.

metasploit has an exploit of MS08-067

user and root key grabbed.



