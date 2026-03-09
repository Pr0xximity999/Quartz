---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.1.172
```
2 woorden 9 letter…

# Box info
Ports:
- 21: ftp - vsftpd 2.3.4
- 22: ssh - OpenSSH 4.7p1 Debian 8ubuntu1
- 139: netbios-ssn Samba smbd 3.x -4.x
- 445: netbios-ssn Samba smbd 3.0.20-Debian
- 3632: distccd - distccd v1 (GNU) 4.2.4 (Ubuntu 4.2.4)

Os: Unix (Samba 3.0.20-Debian)


Samba 3.0.20-Deboam seems to have a CVE: `CVE-2007-2447`.

The vulnerability seems to be in smbd in samba 3.0.0 - 3.0.25rc3 to execute arbitrary commands via shell metacharacers. details [here](https://nvd.nist.gov/vuln/detail/CVE-2007-2447)

Trying [this exploit](https://github.com/h3x0v3rl0rd/CVE-2007-2447). Need to install pysmb using the command ``

