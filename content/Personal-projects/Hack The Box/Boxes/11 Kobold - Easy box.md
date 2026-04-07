---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC
```

# Box info
ports:
- 22/tcp: ssh - OpenSSH 9.7p1 Ubuntu 3ubuntu13.15
- 80/tcp: http - nginx 1.24.0
- 443/tcp: ssl/http - nginx 1.14.0
- 3552/tcp: http - Golang net/http server 

# Port 80/443 - Website
port 80 uses a self signed cert. Might mean nothing

Landing page has no buttons i can use.

Let’s do some fuzzing with `ffuf`.

Subdirectories:
```bash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://kobold.htb/FUZZ -f 178
```

Subdomains:
```baash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://kobold.htb -H "Host: FUZZ"
```

None.

Checking out other pages

# Port 3552 - Golang net
redirected to /login

Looks like a login page for some container management system named arcane.

- [Arcane](https://github.com/getarcaneapp/arcane) 1.13.0
- An interface to manage docker containers, images, networks and volumes. Has an API.


Googling just the name and version results in [cve-2026-23520](https://nvd.nist.gov/vuln/detail/CVE-2026-23520) showing up. 

More info found [here](https://sploitus.com/exploit?id=12B0F910-8CC7-5FDB-A55D-2C3510845950). TLDR: You can inject code via the labeling of a container service that can be uploaded via the API. Though this is **fixed** in version 1.13.0.

Don’t forget…check default credentials. Credentials `arcane`, `arcane-admin` do not work.

[cve-2026-23944](https://nvd.nist.gov/vuln/detail/CVE-2026-23944) seems to work prior to 1.13.2. Something with unauthenticated proxying to remote agents, which gives you access to remote resources without authentication.
