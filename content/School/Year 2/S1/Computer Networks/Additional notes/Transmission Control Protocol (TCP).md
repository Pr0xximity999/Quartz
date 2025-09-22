A TCP connection is a two way communication protocol that uses a mechanism to ensure that data transfer is done properly.<br>This is achieved by using a *three way handshake* 

Before the data is sent, the sender sends a **SYN**(sync).

In case that the receiver acknowledges the data, it sends back an **ACK**. 

In case that no acknowledge is sent, the sender will send another sync. 

Only if the sender receives an acknowledge,  will the data be sent.

The SYN and ACK messages are sent with an identification number with it to prevent duplicates and to ensure the messages are sent in order.

TCP packets also have a checksum sent with them, which are a series of numbers that can be used to check if the packet was damaged or not.

## Splitting of data (segmentation)
TCP splits data in segments. This way, if one packet receives a NACK, you don't need to send the *whole* pakcet again (imagine having to send a 500 mb packet again).

Another reason why TCP packets are segmented is because of the Maximum Segment Size (MSS) of the ethernet protocol. The ethernet protocol is limited by 1500 bytes (usually), which is depicted by the Maximum Transmission Unit (MTU).

To prevent that one packet is 18 bytes and the next segment being 1 byte (called ip fragmentation), you need to properly set up the MSS to evenly distribute the packet sized and prevent ip fragmenting
