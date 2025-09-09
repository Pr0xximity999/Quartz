---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
---
Computers are digital systems, which means that they at their base can only hold two values: 1's and 0's, a HIGH or LOW electrical signal.


# Digit number systems
This is the so called 2-digit number system, or base 2.<Br>Most humans count in base 10, 0-9 and then one number to the left. Every number to the left is the base to the power of its position: 
- 0 to the left is $10^{0}=1$. Anything to the power 0 is 1.
- 1 to the left is $10^{1}=10$.
- 5 to the left is $10^{5}=100000$ 
- etc...

This works for all bases. The higher the base, the more numbers you can represent with the least characters.

To convert binary to decimal, you add all the positions with a 1 and their values:<br>$01001 = (0\times16)+(1\times8)+(0\times4)+(0\times2)+(1\times1)=8+1=9$<br>$11001 = (1\times16)+(1\times8)+(0\times4)+(0\times2)+(1\times1)=16+8+1=25$

Converting binary to hexadecimal(base 16, 0-F) is also quite easy.
You slice the bits in groups of 4($2^{4}=16$), and count all the groups as if they were individual bits:<br>
10010100 = 1001 and 0100, which are 9 and 4, so 94$hex$
10110110 = 1011 and 0110, which are 11 and 6, so 116$hex$

# Anatomy of an ip address
An ipv4 (ip version 4) address consists of 32 bits (4 bytes).

4 bytes(32 bits) means that each number can be between 0 and 255 in decimal. Each ip address is a number between 255.255.255.255 and 000.000.000.000. Realistically there is some nuance in what ip addresses are actually used (some are reserved).

192.168.132.12 (11000000.1010000.1000100.00001100)


These 32 bits consist of 2 parts:
- The network address
- the host address

The size of the network address is decided by the (Sub)net-mask<br>
The first 3 parts of the ip are (usually) the network address and the last is the host address:
- 192.168.132 -> network address
- .12 -> host address

There are two possible notations for a net-mask:
- 192.168.132.12 / 24 -> in most unix environments
- 192.168.132.12 mask 255.255.255.0 -> most windows environments
This decided where the network address stops and the host address starts.

the number 24 tells you the size of the given network address: 24 bits(3 bytes), or (192.168.132.x).

# Boolean comparisons on bits
Boolean operations take two input values and give an output value based on what logic you apply:
- AND: both a and b are true (0 AND 0 = 0, 1 AND 0 = 0, 1 AND 1 = 1)
- OR: either a or b (or both) are true (0 AND 0 = 0, 1 AND 0 = 1, 1 AND 1 = 1)
- etc...

These can be applied to bits as a whole to change them into a different number:
01101010 (106) AND <br>10100010 (162) = <br>00100010 (34)

# Your home network
The biggest property of a home(local) network is that you can directly connect within devices on your network. For hosts outside of your network, you'll need a router or gateway (your internet provider box thingie), which *can* be reached from your home network.

A local network is usually called LAN (Local Area Network).<br>A network outside of your local network is called WAN (Wide Area Network).

>[!Important] Special Ip addresses
>- 244.0.0.0 / 4 (Multicast)
>- **192.168.0.0 / 16 (Private range)**
>- **172.16.0.0 / 12 (Private range)**
>- 169.254.0.0 / 16 (Link local)
>- **127.0.0.0 / 8 (Loopback network)**
>- **10.0.0.0 / 8 (Private Range)**
>- **127.0.0.1 (Localhost)**


# Shortage of ipv4 addresses
since ipv4 addresses are 32 bits, there are roughly 4.2 billion addresses. And we ran out. So we need more bits. Thats when ipv6 was born (ipv5 we dont talk about....).

Ipv6 has 128 bits, which is such an immense amount number of addresses, that theres almost as much grains of sand on the earth as addresses. (very big)

Theres also another way to use up less ipv4 addresses. Its called Network Address Translation.

# Network Address Translation (NAT)
When you send a network request to a WAN server, your router can translate your ipv6 address to its public ipv4 address. It will send the request to the server, await its response, and translate the address back into ipv6 (keeping tabs of everything in a table). This way, you can give internal networks all their own ip, while not taking up any public ipv4 addresses.

This principle is called NAT or Masquerading. You cannot connect to a ipv4 address using a ipv6 request. This is why NAT is crucial.

![[00 - 09 Vault Administration/02 - Attachments/Pasted image 20250909144810.png]]

# Port forwarding
NAT works fine when a client requests an outbound network connection. When you want an *Inbound* request to go trough, you need to open up a port on your router that the request can go trough. Otherwise it wont be accepted. This is called port forwarding


# DMZ (Demilitarized zone)
DMZ's are mostly used in offices. You don't want that outsiders enter your local network. You want to block off outside requests. BUT....you also want outsiders to be able to reach your website.

By splitting the networks into subnets, you can secure off your local network on one subnet, but host your website on another. The reachable website is in the DMZ.

# Network devices
- **Host**: A computer or device on the network
- Hub (legacy)
- **Switches (managed/unmanaged)**: Smart system that forwards requests to the right network port, decided by the MAC-address.
- **Router/Gateway**: Routing requests from one network to another
- **Firewall**: Blocks out certain ports on a network, has a list of rules for what to block exactly
- **Wifi Access Point (WAP)**: Wireless access point you can connect to.