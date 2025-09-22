---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
---
A router usually has a buffer which holds packets before they are sent off. Whenever this buffer is full, new packets won’t be stored and will be dropped (**loss**). This can happen whenever the router doesn’t handle the packets quick enough: packets are being processed slower than they are being received(**delay**).

Lost packets will be either sent again ([[School/Year 2/S1/Computer Networks/Additional notes/Transmission Control Protocol (TCP)|TCP]]), or never ([[School/Year 2/S1/Computer Networks/3 - Ip stack#User Datagram Protocol (UDP)|UDP]]).

Some reasons for delay can be:
- processing inside of the node (router)
	- too many checks implemented
- queuing delay(as explained above)
- transmission delay
	- bandwidth not big enough
	- big packet lengths
- propagation delay
	- length of the physical link (data cable)
	- the propagation speed in the cable (how quick it travels)

The total ‘nodal delay’ is calculated by adding the processing, queuing, transmission and propagation delay together.

# Checking delay & loss
one terminal command you can use to check how long it takes to query a certain endpoint is ``traceroute``/``tracert``.

Traceroute sends 3 packets to every node between you and your request, building a list of how long it takes between every node.

Some nodes can take way longer than others, because routers sometimes have a priority system, where lower priority requests (like a ping) will land in a slower queue than an actual packet. Or because it’s between a trans-oceanic link

# Throughput
> **Throughput**: the rate at which something transfers between sender/receiver

Throughput in this case is the rate of bits/time unit. It is also called **bandwidth**. Throughput tells you how many bits you can send per a certain time period, like gigabit per second.

Your throughput is defined by the slowest medium, since that will bottleneck the rest.

## Internet scenario
Since your’e not alone on the internet, you have to share your internet bandwidth with other people from your isp (internet service provider). This can also impact your throughput at peak usage times.

# Pipelining
Instead of waiting for a single package to get acknowledged (stop and wait), a machine can send multiple packets in parallel, which drastically improves performance. This is called pipelining.

# Response time and http
>**RTT**: Round Trip Time, the time spent for sending and receiving an acknowledge of a small packet.

HTTP 1.0 had an issue with RTT, every request did a new handshake for every element id had to fetch. Twice. This was very slow an inefficient.

HTTP 1.1 fixed this, by keeping the connection alive. This makes the website able to retrieve data over the open connection. It also introduced pipelining, so now multiple resources can be requested at the same time. Most browsers have between 5 to 10 tcp connections open at the same time.

HTTP 2.0 also introduced streaming of data: having a constant datastream to send packets in segments, like loading a part of an image.
