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