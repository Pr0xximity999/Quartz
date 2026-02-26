---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
publish: true
---
# Communication
Computers kind of talk like humans, they have a language and a list of rules. Humans talk in a language (like English), which is a list of rules which say what word means what.

Computers don't speak English sadly. They use a multitude of languages or protocols. Protocols define the rules of what language a computer speaks.

Machines need to understand one another, so internet and network protocols are all listed in RFC's, or **Request for Comments**.

A handful of known protocols are:
- HTTP(S): Hyper Text Transfer Protocol (Secure) (port 80 and 443)
- MQTT(S): Message Queuing Telemetry Transport (Secure)
- FTP(S): File Transfer Protocol (Secure)
- DNS: Domain Name Server (port 53)
- SMTP(S): Simple Mail Transfer Protocol (Secure) (port 25)

>[!note]
>You can find a bunch of information about a certain protocol, if you google “\[protocol] rfc”, and go to the `tools.ietf.org` url.
# Character encoding
When sending a message over the internet, cable or within your pc, you need to dumb it down to a simple electrical signal, or bits (1's and 0's, ON's and OFF's). This process of simplifying a message is called **encoding**.

## Bits
As said before, a bit is an electrical signal representing an on or off state. Let's go over some common terms:
- Bit: 1 bit (woah)
- Nibble: 4 bits
- byte: 8 bits

# Flow control
>[!info] Availability signalling
>A message being sent, notifying that one end of the communication is available is called a XON.<br> Sending a note that it's unavailable is called an XOFF

Other than messaging, machines need ways to transmit its status (available, unavailable, etc...) so that other machines can account for it. In other words:<br>
> The *receiver* provides the *sender* with information detailing its status, so that a *quick sender* can adapt to a *slow receiver*.

One way of doing this, is called buffering

## Buffering
Buffering is the act of *storing a part of a whole message(or data stream)*, so that the receiver does not need to:
- store the entirety of a download at once
- wait until the download is done before the data can be used

Buffering prevents stuttering or lagging behind whenever you're receiving data that is immediately used(streaming).

Buffering is mostly used for watching videos (like YouTube or Netflix), or things like listening to audio (spotify or playing a local audio file). But a lesser thought of example is loading websites. You buffer a website on your local machine until you close the browser.

Buffering is usually done on your machine's RAM (Random Access Memory), because it is optimized for quickly storing and reading, and eventually releasing small amounts of temporary data.

# Circuit switching
Back in the days, when you wanted to call someone, you would call to a switch center who sent you to the right telephone. 
You lift the phone off the hook, which lit up a light at the call center, you would say where you wanted to call to and they would physically plug your connection to the destination. Later on, the destination would be communicated with a rotary dial. These calls were single lined, so if someone else wanted to call the same number, they'd get a *line busy* response.

A communication line between two machines is called creating a **circuit**.

The act of switching your connection to another endpoint is called **circuit switching**.

## Multiplexing
The issue with having a single line constantly switching is that it is really inefficient. The solution: changing infrastructure to support multiple communication channels at the same time: **multiplexing**. Multiplexing is the act of splitting up communication line data in different sections, and sending those sections interchangeably. The means used to slice and send data depends on what method is used.

### Time Division Multiplexing (TDM)
TDM at its core is a connection constantly switching out on set time intervals.

Multiple messages are sliced up in tiny fractions and are all sent one after the other, switching out on a timed interval. The receiving end will [[#Buffering|buffer]] the received message, until all the parts are sent. This way you can send multiple messages at the same time.

### Frequency Division Multiplexing (FDM)
FDM uses the principle of mixing together certain frequencies and having the receiver dissect the mix back to its components. Different channels send their messages at certain frequencies.
# Internet Protocol
IP stands for Internet Protocol. It is a packet switching protocol, also sometimes called *statistical [[#Multiplexing|multiplexing]]*

IP is like a parcel service sending packages around
## IP Packets
Sending a request over the internet is done using an IP packet.

An IP packet is like sending a parcel in the mail. It will contain things like:
- receiver address
- sender address
- Person
- weight

An IP packets contains things like:
- receiver IP address
- sender IP address
- port : specification within the IP address where the packet is sent
- message length
The message within the IP packet is called the **payload**

### Infrastructure
The IP infrastructure can be compared to the network of a parcel service. The shipping company sends something to a depot, which sends it to a depot near you, which sends it to your house.

Just like parcel services, IP has different routes it can take to reach it destination. *It won't always take the fastest*.
