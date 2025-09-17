---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
---
>[!important]
>This article is a bit of a mess and might not always make sense, ma bad


The ip stack consists of 7 layers:
- Application layer
- Presentation layer
- Session layer
- Transport layer
- Network layer
- Data link layer
- Physical layer

# Transmission Control Protocol (TCP)
A TCP connection uses a mechanism to ensure that data transfer is done properly. Before the data is sent, the sender sends a **SYN**(sync).

In case that the receiver acknowledges the data, it sends back an **ACK**. In case that no acknowledge is sent, the sender will send another sync. To prevent duplicates, the SYN and ACK messages send an identification number with it, so both ends know which message is which.
If the sender receives an acknowledge, only then will it send the data. This is called a *three way handshake*.
## Checksum
A checksum can be sent with a network package to check if the package has been tampered with/is damaged. The checksum is a numerical sequence that can be mathematically referenced with the data to validate it.

If the checksum invalidates the package, the receiver will send back an **NACK** (not acknowledge) response

## Splitting of data (segmentation)
TCP splits data in segments. This way, if one packet receives a NACK, you don't need to send the *whole* pakcet again (imagine having to send a 500 mb packet again).

Another reason why TCP packets are segmented is because of the Maximum Segment Size (MSS) of the ethernet protocol. The ethernet protocol is limited by 1500 bytes (usually), which is depicted by the Maximum Transmission Unit (MTU).

To prevent that one packet is 18 bytes and the next segment being 1 byte (called ip fragmentation), you need to properly set up the MSS to evenly distribute the packet sized and prevent ip fragmenting

# User Datagram Protocol (UDP)
If TCP was a safe way to send data, UDP is an unsafe one.<br>UDP does not do a three way handshake, only sending the data and not checking if it actually reached it destination. It does not have flow control, so many messages can be sent at once without controlling the stream.

You might ask, why not use TCP for everything in that case? UDP is waay faster than TCP because of its simpler mechanism.

UDP *does* use a checksum, but if the packet is damaged, it just wont get another one.

An UDP packet is 32 bits big, which is taken up by:
- source port \#
- destination port \#
- length
- checksum

UDP data is segmented into so called **datagrams**. Datagrams don't always arrive sequentially. So its more of a "fire and forget" type transmission. Why is it called a datagram you may ask? uhhhhhh...

## Broadcasting
One thing UDP *can* do which TCP cannot, is broadcasting data. Because TCP properly builds up a connection with a single target, its a single connection. UDP does *not* build up a proper connection, which makes it able to send one message to everything which listens to the target. You can broadcast a message by masking the ip to all 1's.
# UDP vs TCP
UDP is mostly used for when a quick transmission is needed. Like sending a message to a mars rover (which takes 8 - 20 minutes for just a single ping), or when querying a dns server when browsing to a website. TCP is used when the data *needs* to be properly sent.

# Transport, Network, and Datalink layers
The network layer manages communication between different hosts (machines), while the transport layer manages communication between processes on the same host.<br>The transport layer specifies the services of the network layer.

>[!info] Each layer will tack on a bit more data to the packet
>When a payload is sent over the network layer (outside of your own network), it will add the ip address to the payload. Transport layer packets don't have that, so when its not needed anymore, it will be removed.
>The datalink layer will add something else: a MAC address
# Mac address
> **MAC** -> Medium Access Control

A network card on a machine (even routers) holds its own address on its own: a MAC address. A MAC address is a sequence of 6 pairs of hexadecimal numbers. It is the physical address of a machine. It's usually 6 bytes long (2^48 possibilit)
ies). Your MAC address is stored in the Read Only Memory (ROM) of your network adapter. The first 24 bits is defined by your manufacturer. MAC addresses have no actual meaning behind them; they're just random.

## Access Resolution Protocol
The coupling between a MAC and IP address of a machine is done by ARP (Address Resolution Protocol). Each router and machine has its own ARP module. The coupling of the MAC and IP address is stored in the cache.

## Communication using MAC addresses
Whenever you communicate within your own network, a MAC address is used. The way machines get the mac address of some machine, it sends out a broadcast, just like how UDP does it. It sends a broadcast on the FF:FF:FF:FF:FF:FF mac address (everyone) with the target MAC. The target MAC will send back its IP address and it'll be cached in case its used again.
# Routing
Whenever you sent a packet outside your network, a broadcast will be sent with the destination IP, or IP datagram. 

The ip datagram consists of multiple things but the most important thing are the origin ip, destination ip and some data.

The right router will pick up the network address of the ip and send back their mac address. The packet is sent to that mac address and then the router looks at the host address to see to which host it needs to be routed to. 

The router will broadcast the destination ip, the destination machine will send back its MAC address, and then the router will send the packet to the destination machine.