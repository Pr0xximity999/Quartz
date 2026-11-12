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


Html check. There seems to be a lot of scripts, most seem to push some kind of json. The website is made on the react framework Next.js. Tryign to find the react version using the react devtools browser extension.

Version is definetly <16.5.

Googling if there is a version checker script for nmap.

![[Vault-data/Attachments/13 Reactor - Easy box.png]]

https://github.com/MoisesTapia/http-react2shell hmmmmmm

The exploit is about CVE-2025-55182 / CVE-2025-66478

```bash
nmap -p3000 --script http-react2shell reactor.htb
```
Only works for port 80 and 433, going to look for the exploit itself instead. Landed on a blogpost for CVE-2025-55182 that had a POC: https://github.com/lachlan2k/React2Shell-CVE-2025-55182-original-poc. Not sure how i am supposed to run this.

Searching metasploit for a vulnerability with the name react2shell. Yes there is. I’m in. No user yet though.

# node@reactor user (no flag)
spawned inside the `/opt/reactor-app/` folder.

reading the `.env` folder.
DB type is sqlite3.
SENSOR_API_KEY=rw_sk_7f8a9b2c3d4e5f6g7h8i9j0k

opening the `reactor.db` file inside the folder using `sqlite3 reactor.db`, reading all tables using `.tables`. Reading the users folder.

using hashcat. It’s an MD5 hash.

engineer password is `reactor1`. It’s for the ssh login.

# engineer@reactor user
user flag in home folder.

user cannot run sudo.

linux kernel version 6.8.0-177-generic, ubuntu 24.04.4 LTS

`ss -tulpn`:
- UDP/53 - DNS
- UDP/68 - DHCP
- TCP/53 - DNS
- TCP/22 - SSH
- TCP/9229 - Likely Node.js debugging and v8 engine


`px aux` doesnt show anything of interest.

Looking into the node debugger port. https://angelica.gitbook.io/hacktricks/linux-hardening/privilege-escalation/electron-cef-chromium-debugger-abuse

looking at `ps aux`, there is a node worker started with the --inspect flag, which starts a debugger.

Looking for exploits that can work trough the debugger, which can be ran with `node inspect 127.0.0.1:9229`.

Tried a metaspoilt exploit `nodejs_v8_debugger` that did not seem to work.

the debugger lets me run node commands, including the `require("child_process")` module that lets me spawn shells, but doesn’t seem to let me get a revshell.

the command structure is:
```
exec("process.mainModule.require('child_process').execSync('cat /root/root.txt').toString()")
```

yippiee
