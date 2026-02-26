---
tags:
  - taal/engels
  - language/english
  - internet-protocols/udp
publish: "true"
---
If [[Info-tidbits/Network protocols/TCP protocol|TCP]] was a safe way to send data, UDP (User Datagram Protocol) is an unsafe one.<br>UDP does not do a three way handshake, only sending the data and not checking if it actually reached it destination. It does not have flow control, so many messages can be sent at once without controlling the stream.

You might ask, why not use TCP for everything in that case? UDP is waay faster than TCP because of its simpler mechanism.

UDP *does* use a checksum, but if the packet is damaged, it just wont get another one.

An UDP packet is 32 bits big, which is taken up by:
- source port \#
- destination port \#
- length
- checksum

UDP data is segmented into so called **datagrams**. Datagrams don't always arrive sequentially. So its more of a "fire and forget" type transmission. Why is it called a datagram you may ask? uhhhhhh...

# UDP vs TCP
UDP is mostly used for when a quick transmission is needed. Like sending a message to a mars rover (which takes 8 - 20 minutes for just a single ping), or when querying a dns server when browsing to a website. TCP is used when the data *needs* to be properly sent.