---
tags:
  - school/robot-fleet
  - school/eindproject
  - taal/engels
  - language/english
---
# GL-iNet
## Host router
The host router is the main router being connected to the internet source. All other sub-routers will be hooked up to this one as a means to create the fleet mesh network and set up a coherent WAN.
## Sub routers
Sub routers are the routers that are hooked up to the robots. These will contain their own contained ROS network.

## Setting up the mesh network
Firstly, turn on all the robots you want to connect and make sure they are all set up in a way that you can connect to to their wifi network.

### Connecting to wifi

For all **sub routers**:
- Connect with the router
- Navigate to `192.168.8.1` in your browser and log in
- Navigate to the **INTERNET** tab
- In the repeater section, click on the blue “connect” link, and select/log into the *main router’s network*
	- Sometimes the connection with the router will disconnect or it’ll indefinitely load. Just reconnect or refresh the website after about 10 seconds and it should show that it’s connected. 

For the **main route**r:
- Connect with the router
- Navigate to `192.168.8.1` in your browser and log in
- Navigate to the **INTERNET** tab
- In the repeater section, click on the blue “connect” link, and select/log into the *network that will provide internet*
	- Sometimes the connection with the router will disconnect or it’ll indefinitely load. Just reconnect or refresh the website after about 10 seconds and it should show that it’s connected.

### Set IP ranges (optional)
To tidy up the robots their IP addresses, you can assign a static IP to each of them.

>[!note]
>In these steps you can use any IP address that seems logical to you. 
>You don’t have to copy over all values number for number. Just make sure you understand the reason as to why a consistent numbering rule tidies up things.

In the **main router**:
- Connect with the router
- Navigate to `192.168.8.1` in your browser and log in
- Navigate to the **NETWORK>LAN** tab
- Set the router’s IP address under the *LAN* section to `192.168.1.1`
	- This will either kick you out of the dashboard or automatically reload the right IP address. Navigate to it yourself if you don’t get redirected
- Set the router’s IP DHCP range from `192.168.1.10`  to `192.168.1.100`.
	- This can once again disconnect you from the router’s wifi network.

For all **sub routers**:
- Connect with the router
- Navigate to `192.168.8.1` in your browser and log in
- Navigate to the **NETWORK>LAN** tab
- Set the router’s IP address under the *LAN* section to `192.168.[num].1`, where num is the first free number that comes in the DHCP range of the *main router*. (aka 192.168.1.**11**,12,13, etc..)
	- This will either kick you out of the dashboard or automatically reload the right IP address. Navigate to it yourself if you don’t get redirected

Back in the **main router**:
- Connect, navigate, and log in (use the newly used ip address)
- Navigate to the **NETWORK>LAN** tab and scroll to the bottom where it says “address reservation”
- Identify which router is which by cross referencing their mac address (or some other way)
- Give each router the reserved ip `192.168.1.[num]`, where num is the same number that was given to it on the sub router step
