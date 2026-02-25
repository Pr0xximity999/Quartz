---
tags:
  - personal-project/hack-the-box
  - taal/engels
  - language/english
  - cyber-security
banner:
publish: false
---
# Introduction
Network mapper, or `Nmap` is an open-source network analysis and security tool written in C, C++, Python and Lua. 
It is used to scan networks to see which ports, hosts, applications or services are available on a network and which aren’t by sending saw packets. 

It gives back the name, version or operating system, where possible. It also offers the ability to determine if packet filters, firewalls or intrusion detection systems (called IDS’s) are properly configured.

# Use case and usage
Nmap is mostly used by people wanting to scan a network like network admins or IT security specialists. It is used to:
- Audit the security aspects of networks
- Simulate penetration tests
- Check firewall and IDS settings and configurations
- Types of possible connections
- Network mapping
- Response analysis
- Identify open ports

Nmap offers different types of scans you can use based on your use case. Most of these techniques can be summed up by the following list:
- Host discovery
- Port scanning
- Service enumeration and detection
- OS detection
- Scriptable interaction with the target service (using the Nmap Scripting Engine)

## Syntax
The syntax of Nmap is fairly easy to understand and looks like this:
```bash
nmap <scan type(s)> <options> <target>
```

To see all commands, run `nmap --help`. Be careful, it is a HUGE list. use `grep` to narrow down your search to specific keywords

To take a snippet of the scanning techniques:
```bash
SCAN TECHNIQUES:
  -sS/sT/sA/sW/sM: TCP SYN/Connect()/ACK/Window/Maimon scans
  -sU: UDP Scan
  -sN/sF/sX: TCP Null, FIN, and Xmas scans
  --scanflags <flags>: Customize TCP scan flags
  -sI <zombie host[:probeport]>: Idle scan
  -sY/sZ: SCTP INIT/COOKIE-ECHO scans
  -sO: IP protocol scan
  -b <FTP relay host>: FTP bounce scan
```

the [[Info-tidbits/Network protocols/TCP protocol|TCP]]-SYN scan `-sS` option is the default unless specified otherwise. This method will scan thousands of ports per second. It only sends one `SYN` packet and therefore, never completes the three-way handshake that an usual full TCP connection has.
- If the target sends a `SYN-ACK` packet, Nmap marks the port as **open**
- If the target sends an `RST` packet, Nmap marks the port as **closed**
- If Nmap does not receive a packet back, it will mark the port as **filtered**
	- Depending on the firewall, these packets were either dropped or ignored

# Host Discovery
> Host discovery strategies: https://nmap.org/book/host-discovery-strategies.html

When you need to do an internal penetration test for the entire network of a company, you should firstly get an overview of which systems are online that you can work with.
Nmap has multiple options to see if a target is alive or not, but the most effective one is the **[[Info-tidbits/Network protocols/ICMP Protocol|ICMP]] echo request**.

>[!important] Save scans!
>Every scan should be stored for later use. Scans can be compared, documented or reported. Different tools may produce different results after all.


## Scanning network ranges
This method only works if the firewall of the host allows it. Otherwise, use other techniques to see if the hosts are active or not.

```bash
sudo nmap 10.192.2.0/24 -sn -oA tnet
```
- `10.129.2.0/24` is the network range
- `-sn` disables port scanning
- `-oA tnet` stores the result of all formats starting with the name `tnet`

## Scan IP list/multiple IP’s
Scanning lists of IP’s is also possible by using the `-iL` argument.
```bash
sudo nmap -sn -oA tnet -iL hosts.lst
```

You an also just put in multiple IP’s next to one another, or a range if they’re next to one another.
```bash
# These do the same thing
sudo nmap -sn -oA tnet 10.129.2.18 10.129.2.19 10.129.2.20
sudo nmap -sn -oA tnet 10.129.2.18-20
```

## Scan single IP
```bash
$ sudo nmap 10.129.2.18 -sn -oA host 

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-14 23:59 CEST
Nmap scan report for 10.129.2.18
Host is up (0.087s latency).
MAC Address: DE:AD:00:00:BE:EF
Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds
```

### Packet tracing
If port scanning (`-sn`) is disabled, Nmap instead ping scans with **ICMP Echo Requests**(`-PE`). If the pinging host is alive, it should send an `ICMP reply` back.

Before the ICMP echo request is sent, Nmap would send an `ARP ping` resulting in an `ARP reply`. This can be confirmed by adding the “`--packet-trace`” option.

```bash
# Adding -PE to ensure ICMP echo request is sent
$ sudo nmap 10.129.2.18 -sn -oA host -PE --packet-trace 

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-15 00:08 CEST
SENT (0.0074s) ARP who-has 10.129.2.18 tell 10.10.14.2
RCVD (0.0309s) ARP reply 10.129.2.18 is-at DE:AD:00:00:BE:EF
Nmap scan report for 10.129.2.18
Host is up (0.023s latency).
MAC Address: DE:AD:00:00:BE:EF
Nmap done: 1 IP address (1 host up) scanned in 0.05 seconds
```

### Reasoning
Another way to see if Nmap has marked the target as alive is with the “`--reason`” option.
```bash
sudo nmap 10.129.2.18 -sn -oA host -PE --reason 

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-15 00:10 CEST
SENT (0.0074s) ARP who-has 10.129.2.18 tell 10.10.14.2
RCVD (0.0309s) ARP reply 10.129.2.18 is-at DE:AD:00:00:BE:EF
Nmap scan report for 10.129.2.18
Host is up, received arp-response (0.028s latency).
MAC Address: DE:AD:00:00:BE:EF
Nmap done: 1 IP address (1 host up) scanned in 0.03 seconds
```

This shows that Nmap does detect whether the host is alive or not though the `ARP request` and `ARP reply` alone.

### Disabling ARP
To disable ARP and instead scan our target with the desired `ICMP echo requests`, add the “`--disable-arp-ping`” option.
```bash
sudo nmap 10.129.2.18 -sn -oA host -PE --packet-trace --disable-arp-ping 

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-15 00:12 CEST
SENT (0.0107s) ICMP [10.10.14.2 > 10.129.2.18 Echo request (type=8/code=0) id=13607 seq=0] IP [ttl=255 id=23541 iplen=28 ]
RCVD (0.0152s) ICMP [10.129.2.18 > 10.10.14.2 Echo reply (type=0/code=0) id=13607 seq=0] IP [ttl=128 id=40622 iplen=28 ]
Nmap scan report for 10.129.2.18
Host is up (0.086s latency).
MAC Address: DE:AD:00:00:BE:EF
Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds
```

>[!important] Question!!
>Based on the above result, what is the operating system of the system?

>[!warning]- Hint
>TTL, or Time To Live is an indicator of what OS the system is from. Each OS would have their own TTL. Time To Live is how long the packet stays alive. It decrements by 1 per router hop. When it reaches 0, the packet gets dropped.
>Some common default TTL values are:
>- **64**: Linux/Mac OSX/UNIX
>- **128**: Windows
>- **255**: Network devices like routers

>[!note]- Answer
>Since the TTL of the first IP is 255, it is a router. The second IP is 128, which is the default TTL of **Windows** systems

