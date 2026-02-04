---
tags:
banner:
publish: "false"
---
# Service enumeration
```
nmap -p- -sV --script=banner 10.129.2.196
```
![[Vault-data/Attachments/Weekly box - Facts (Easy).png]]

More in depth info:
```bash
nmap -p- -sC -sV 10.129.2.196
```
Optionally, add `-T4` (1-5, default=3) to speed things up, but you might miss something due to connection stability shenanigans.

Banner grabbing info:
https://nmap.org/nsedoc/scripts/banner.html
https://en.wikipedia.org/wiki/Banner_grabbing

## port 22/tcp
openSSH 9.9p1 Ubuntu 3ubuntu3.2
## port 80/tc
nginx V 1.26.3 (ubuntu)
## port 54321/tcp
Golang server

MinIo: blob storage database with api capabilities. Runs on [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3)

https://en.wikipedia.org/wiki/MinIO

Minio has a CLI client, `mc`.

# Web enumeration

## Directories
[Gobuster](https://en.wikipedia.org/wiki/MinIO)

```bash
gobuster dir --url http://facts.htb --wordlist /usr/share/wordlists/dirb/common.txt
```

use `--timeout 20s` or/and `--retry true` (or a higher timeout value) if a timeout occurs due to htb being slow as shit

admin page found: `http://facts.htb/admin`

you could redo enumeration of these things if you had admin credentials

### Admin login page
https://www.kali.org/tools/burpsuite/

## Dns subdomain
dns subdomain enumeration
https://github.com/ffuf/ffuf
```bash
ffuf -w /usr/share/wordlists/wfuzz/general/medium.txt -u http://IP -h "HOST: FUZZ.boxname.htb" -fs 154
```


