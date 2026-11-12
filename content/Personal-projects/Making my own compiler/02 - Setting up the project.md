---
tags:
  - personal-project/compiler
  - personal-project/programming
  - personal-project/assembly
  - personal-project/linux
  - operating-systems/linux
publish: "true"
---
>[!important] I will be using wsl ubuntu for this project
> You can get download instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install)
> If youre already on ubuntu natively you're fine
> **Remember your super user (root) password, you will need it later**

>[!info] I'm following a tutorial for this stuff
>you can find the playlist [here](https://www.youtube.com/playlist?list=PLUDlas_Zy_qC7c5tCgTMYq2idyyT241qs)

If you want to assemble an assembly file you need an assembly file first (duh...), so let's make one.


# Remote window inside visual studio code
The video I'm following does this all inside a remote window inside visual studio code. If you open up a new VSCode window and look at the bottom right, you'll see this little icon. (I hope, i am not sure if its there by default, if not google something like "VSCode remote window")
![[Vault-data/Attachments/Pasted image 20241101125326.png]]
If you click on it you can select some WSL options (if you installed it).
Click on the one that says "***Connect to WSL using Distro...***" and then select ubuntu. (once again, i hope it's there for you, if not, try googling how to install ubuntu on wsl)
![[Vault-data/Attachments/Pasted image 20241101125505.png]]
![[Vault-data/Attachments/Pasted image 20241101125636.png]]

If all went well it should open up a new window inside the ubuntu installation.

# Installing NASM
NASM is the assembler i will be using for this project.
You can find their website [here](https://www.nasm.us/).
To install it, open up your terminal and type the following command lines:
```bash
sudo apt update 
sudo apt install nasm
```
``apt update`` will make it so that you can install things like NASM.
if you type ``nasm -v``, a version number should pop up.

>[!info] in case your forgot your super user(root password) inside WSL
> Open up a command prompt or powershell window
> Run ``wsl -u <super user name(root by default)>``. If you have more than one distribution, run ``wsl -d <\distro-name> -u <\super-user-name>`` instead
> Run ``passwd <\username>``
> Enter a new password


# Moving to the desired directory
Firstly, navigate to the location where you want to set up this project. 
Some titbits on how you move and create folders inside the linux command line interface (CLI):

| Command                | Function                                                                      |
| ---------------------- | ----------------------------------------------------------------------------- |
| ls                     | Lists everything inside a folder                                              |
| cd [directory name]    | Moves to a directory (cd .. to go up a level)                                 |
| mkdir [directory name] | Creates a folder with the specified name                                      |
| rm [directory name]    | Removes a folder (add -r between rm and the name to remove everything inside) |
If you've moved to a folder you're satisfied with, type ``code .`` to open up VSCode inside that folder.

# Creating the assembly file
I'm going to be honest, this did not need its own header but oh well.
Inside visual studio, create a new file and call it something like ``test.asm``
Congrats, you made an assembly file!

>[!abstract] next article
> [[Personal-projects/Making my own compiler/03 - Writing assembly part 1|For the next step, we will write some basic assembly]]