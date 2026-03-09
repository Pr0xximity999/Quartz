>[!Important]
>In the `lan` section, set the “router ip address” to something that is easy to remember. It is advised to set the master router to something like `192.168.8.1`.
>Inside the **sub router**, set the ip address to something like `192.168.AAA.1`, where AAA is a number of your choice, like `101`.
>Inside the **master router**, set the static ip of the subrouter to `192.168.8.AAA`, where AAA is the same number you have set on the sub router.
>The first router will use `101`, the second `102` etc… This makes the numbering scheme a lot better to overlook


# Connect to the master router
- Go into the routers master page (192.168.8.1 by default) and go onto the `network` tab.
- In the `repeater` section, click on “connect” and select the master router’s name. Enter the password of that router.
- After connecting you will need to refresh the web page, it might disconnect for a second. In the connection information it tells you an ip address, remember it.
![[Vault-data/Attachments/Screenshot from 2025-11-25 12-48-45 2.png]]


# master router sets up ip address
Keep in mind that the static ip has to be in the range set in the `lan` tab.
- On the master router, go to the `lan` tab and scroll down to “address reservation”.
- Click on the big blue “Add” button, select the connected device (use the ip address you had to remember in the previous section)
- The connected router has to reconnect to the master router
You will now have a static ip address
![[Vault-data/Attachments/Router mesh setup.png]]