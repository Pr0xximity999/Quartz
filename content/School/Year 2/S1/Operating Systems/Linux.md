---
tags:
  - school/operating-systems
  - operating-systems/linux
  - school/robot-fleet
  - taal/engels
  - language/english
publish: "true"
---
Linux was created in 1994 by Linus Torvalds.

Linux at its core is the *base* for operating systems -> the **kernel**.

The kernel is this monstrocity:

![[Vault-data/Attachments/Pasted image 20250902093103.png]]

Linux in itself does not really do anything.

Not untill you build something on top of it

# Linux distros
A Linux distribution, or distro, is a built up linux based operating system. 

There are a TON of different distros, each made for their own purpose. Like mint-os which is build to make the transition from windows to linux easier because of its similarity, or kali-linux which is made for cyber security purposes.

# Shell
A Shell serves:
- a command line interpreter
- a scripting language

Some shells are:
- sh (Start with ``>$ sh``)
- bash (start with ``>$ bash``)
- csh (start with ``>$ csh``)

to check what shell you use, you can write ``echo ${SHELL}``

# Commands input and output
Whenever you start a process(or application), it will send data over certain channels.
- channel 0: standard input (stdin) (keyboard, readonly)
- channel 1: standard output (stdout) (terminal, writeonly)
- channel 2: standard error (stderr) (terminal, writeonly)
- channel 3-.... read and write actions

# Redirecting
You can use certain operators to redirect the input/output of your process

``command > file.txt`` writes to an existing ``file.txt``
``command >> file.txt`` writes to or creates ``file.txt``
``command 1> file.txt`` writes the stdout(1) to an existing ``file.txt``
``command > file.txt 2>&1`` writes to an existing ``file.txt`` and **adds** the stderr(2) to the stdout

# Piping
You can chain multiple commands by writing ``command1 | command2`` a **pipe(|)** between commands.

# Process return $?
You can use ``$?`` to return a status code.

``grep "hello" file.txt``

- If file exists: ``echo $?`` -> ``0``
- if file exists and hello is **not** in file: ``echo $?`` -> 1
- if file does **not** exist: ``echo $?`` -> 

