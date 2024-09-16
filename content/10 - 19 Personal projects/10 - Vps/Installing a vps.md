---
tags:
  - vps
  - website
  - server
  - personal-project
---
# References

https://docs.oldmartijntje.nl/30-39-Applications/31-System-related/31.06-Setting-up-a-VPS
--- 
# Definition
A VPS stands for Virtual Private Server.
It's basically a server you can use for anything stored somewhere in the cloud.

For example, if you wanna run an API with database on it, you can just install some backend software and a database and use the url to send get, post, delete etc.. requests to the server.

In my case, i want to use it for my personal website (and maybe later on other stuff like a Minecraft server).


# Aquiring the vps
A friend of mine suggested [contabo](https://contabo.com/) so im going to try that now.

The costs seem to be either €4,50 or €5.45 per month for 300gb ssd, 6gb ram and 4 virtual cpu cores. Seems reasonable

# Setup

## Connecting to the machine
i used [PuTTy](https://putty.org/)

I followed the contabo help desk page to connect with a windows local machine to the linux server as referenced [here](https://help.contabo.com/en/support/solutions/articles/103000271271-how-do-i-connect-to-my-contabo-server-#How-do-I-connect-to-a-Linux-server-using-a-Windows-local-computer?) 
I logged into the contabo control panel to get my ip address and port and tried to log into the linux machine.

ITS A COMMAND LINE INTERFACE WOAHH
thats so dope
![[Pasted image 20240620122809.png]]

>[!info]
>Heads up, if you wanna past something in a cli (comand line interface), you gotta right click instead of the usual Ctrl + V

## Installing docker
I needed to install docker onto the vps
to do that, i used the command
```bash
sudo install docker.io
```

Though, doing this did not result in docker installing, but instead bash throwing an error
```bash
root@user:~# apt install docker.io
Reading package lists... Done
Building dependency tree
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 docker.io : Depends: containerd (>= 1.2.6-0ubuntu1~)
E: Unable to correct problems, you have held broken packages.
```

It needed containerd, so i just did installed containerd and that fixed the problem
```bash
apt install containerd
```

Now that docker is installed on the machine, i can just throw containers on them which do virtually anything i want.

>[!info]
>Run this command to check for any updates
> ```bash
> apt update
>```
>And run the following if you want to upgrade packages on the system
>```bash
>apt dist-upgrade
>```
>The difference between ``apt dist-upgrade`` and ``apt upgrade`` can be found [here](https://askubuntu.com/questions/81585/what-is-dist-upgrade-and-why-does-it-upgrade-more-than-upgrade)

## Installing portainer
Portainer is an app that removes the need to manage containers via CLI

To install portainer, run the following command
```bash
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

After this finishes successfully, you can open your browser and type \<ipAddress>:9000, finish setting up an admin password, and you have docker access to your machine

## Deploying containers
For this example, i used a container my friend made.
Ill look into making my own containers later on. #content-to-come
