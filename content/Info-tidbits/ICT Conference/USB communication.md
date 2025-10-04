---
tags:
  - taal/engels
  - language/english
  - communication-protocols/usb
---
> Speaker: Jurrie Ovrgoor - Architect at topicus (software company for managing loans and invoices)

> **USB**: Universal Serial Bus

# The problem
I have a synthesizer. I play songs on it. Synthesizers can program in songs with specific presets, ordering those presets and settings can be quite tedious on the machine itself. That’s why there’s a windows app that lets you connect up your pc to the synthesizer using an usb.

But carrying a laptop around is also tedious, why not use your phone to do it? Because there is no app for it available on android. You’d need to make your own. So how would you port the windows app to android?

# The solution
Windows translates its commands to ones that can be sent over usb. So you’d need to do the same on android. One way to know what usb commands to send is using a usb sniffer.

Wireshark is one way, wireshark listens in on network communication, but also usb communication.

# Definitions
> **USB host**: Initiates & controls communication (your laptop)

> **USB**: peripheral devices that you connect (mouse, keyboard, etc)

> **USB hub**: an usb peripheral that connects multiple other usb peripherals


# Hardware
USB 2.0 has only 4 wires: two of which being power and ground. So you only have two wires to work with


# Tiered star topology
A star topology is connecting one device to others (which visualizes like a star)

Tiered star topology is basically the same but connecting different devices on different layers.

Maximum number of tiers is 7, the maximum number of devices is 127

Power to each devices can be switched off if an overcurrent condition occurs, which leaves the other devices uninterrupted.

# Step 1: Device enumeration
An USB device has a device descriptor which contains:
- usb revision
- vendor ID and product ID
	- vendor id is a unique number identifying a company (Assignment by USB-IF)
	- Product id is a unique number identifying a product (assigned by the vendor
- number of configurations the device has
- Power draw
- Bus powered / self powered (by a cable)
- Number of interfaces
- a bunch of other things

## USB configuration
The USB configuration is it’s “mode of operation”. Only one configuration is active at the time. Most devices only has one. Things like WIFI adapters has multiple configurations, depending on your operating system.

## USB interface
An USB interface provides a capability or function. Things like a printer, scanner, audio functionality, midi, etc.

Every device has one or more interfaces.

The interface data is contained in its own structure called the **interface descriptor.**

Every interface has a number of endpoints too.

### USB endpoint
The endpoint is where the actual data is sent back and fourth.
It’s used to communicate with peripherals. Every endpoint has directions, type of communication, etc.

Device can have one or more endpoints. They’re 4 bits big, so 15 devices is the maximum.

and endpoint has, yet again, an endpoint descriptor. A data structure containing:
- data transfer type
- Max packet size
- Attributes
- An endpoint address
	- endpoint number
	- direction (in/out)

# Step 2: sending and receiving data
USB communication works via “pipes”, which are a logical connection between the host and endpoint. Pipe is software side, endpoint is hardware side.

Every pipe is host-initiated, which is different from [[School/Year 2/S1/Computer Networks/Additional notes/Transmission Control Protocol (TCP)|TCP]]. The host sends data in “transactions”:
- Phase 1: token phase (telling the device its going to send data)
	- host - peripheral
- Phase 2: data phase (here is the data)
	- host - peripheral
- Phase 3: handshake phase (i have received the data)
	- peripheral - host

If the peripheral sends the data, the host initiates the connection, telling the peripheral it’s ready to receive data, after which phase 2 and 3 are enacted in reverse.

Theres four types of transfer.

## USB bulk transfer
Basically large volumes going from one end to the other. Bulk transfer uses error correction using a checksum of 16 bits.

Bulk usb tranfers will use spare un-allocated bandwidth on the bus after all other transactions have allocated.

Our endpoints of interest use bulk transfer


## Control transfer
Typically used for command and status operation. used during device enumeration, requesting descriptors, setting active confgs etc. This always occurs on endppint 0. IT does not use error correction.


## Interrupt transfer
Its a periodic device-initiated communication. Sends small data. 

USB is a polled bus: host initiates all data exchanges. The peripheral has to wait until the host polls it. Polling rate is in the endpoint descriptor. There is error correction, but it isn’t retried. It just waits until it can ask again.

## Isochronous transfer
Iso transfer occurs continuously and periodically. IT typically contains time sensitive information. Things like audio or video streams use it. Maximum size data payload in endpoint descriptor. There is no error correction, just keep running.

>[!info] communication example
>A windows application sends a request to an usb endpoint. The endpoint sends it to the keyboard endpoint. The keyboard sends it to the firmware, which does its thing. IT sends back an acknowledge response, which gets sent over the endpoint back to the windows endpoint to the application


# Step 3: Profit
This is all you need to know how to communicate over usb. There’s vendor specific protocols and extra class definitions for things like MIDI.

So, you need to know the vendor specific protocol of the synthesizer, and send those messages over usb. Read the communication messages using something like wireshark to reverse engineer those messages.