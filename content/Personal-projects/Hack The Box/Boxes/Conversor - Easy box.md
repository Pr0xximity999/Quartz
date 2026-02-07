---
tags:
banner:
publish: "false"
---
```
nmap -p -sV -sC 10.129.15.10
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

## Xml injection
xml template gets interpreted as pure html

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










