---
tags:
  - language/english
  - taal/engels
  - internet-protocols/TCP
publish: true
---
A TCP (Transmission Control Protocol) connection is a two way communication protocol that uses a mechanism to ensure that data transfer is done properly.<br>This is achieved by using a *three way handshake* 

Before the data is sent, the sender sends a **SYN**(sync).

In case that the receiver acknowledges the data, it sends back an **ACK**. 

In case that no acknowledge is sent, the sender will send another sync. 

Only if the sender receives an acknowledge,  will the data be sent.

The SYN and ACK messages are sent with an identification number with it to prevent duplicates and to ensure the messages are sent in order.

TCP packets also have a checksum sent with them, which are a series of numbers that can be used to check if the packet was damaged or not.
