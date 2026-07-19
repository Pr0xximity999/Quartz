---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC reactor.htb
```

# Box info
ports:
- 22/tcp - ssh (OpenSSH 9.6p1 Ubuntu)
- 3000/tcp - ppp?
	- http server


# Port 3000 - Reactorwatch website
It seems to be a reactor information screen which shows a bunch of information.

Two personnel are online:
- Dr. Elena Rodriguez
- Marcus Kim

James Tomphson is offline.

There are no links to other pages, so ill just use a path fuzzing tool. 

Dirbuster is more made for the job, but ffuf is faster in my experience.

```bash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://reactor.htb:3000/FUZZ
```

No matches. Checking dirbuster just to be sure…
```bash
gobuster dir --url http://reactor.htb:3000 --wordlist /usr/share/wordlists/dirb/common.txt
```
Only cgi-bin/ was found, but with a 308 code (permanent redirect).

Trying some other wordlists. None seem to get a hit.

Trying some subdomain enumeration.
```bash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://reactor.htb -H "Host: FUZZ"

ffuf -w /usr/share/wordlists/dirb/common.txt -u http://reactor.htb:3000 -H "Host: FUZZ"
```
No matches as well.

Seeing if burp suite picks up anything. Not really anything.

Ill do a standard port udp scan
```bash
nmap -sU -sC reactor.htb
```

Nothing turned up apart from the dhcp port.