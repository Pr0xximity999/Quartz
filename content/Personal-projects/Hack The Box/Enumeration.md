---
tags:
  - personal-project/hack-the-box
  - taal/engels
  - language/english
  - cyber-security
banner:
publish: false
---
>**Enumeration**: *The action of mentioning a number of things one by one*

# Introduction
Enumeration is everything. Gaining access to a machine is one thing, but knowing what attack vectors are available to you is far more crucial.

You might got a dozen tools at your disposal, but those are just that - tools. They might only help if you actually know what you can do with the information they provide you. 
Nevertheless, the tools will never replace the knowledge or attention to detail a human can have. Interacting with different services to see the information they provide you and how you could use that to your advantage is key.

Learning to understand how different services work, their quirks, syntax and use case, is essential for effective communication and interaction. Once you know how to do it, it will seem like a piece of cake.


# Getting to your goal
Gaining access to a system can usually be narrowed down to two points:
- Functions and/or resources that allows you to interact with the target and/or provide additional information
- Information that provides you with even more important information to access our target

When looking for holes, when inspecting and scanning, or when poking around, these are the possibilities you should look for. Most of the info you collect comes from misconfigurations or neglect of the security of these systems, which was either a result of ignorance or the wrong security mindset.

> Enumeration is the key.

While this is true, it’s often not used to its full potential. Most people know that they might have not tried all the proper tools for the job. This is not always the issue however, but instead its the fact that they don’t know the service enough and how to use or interact with it or what’s relevant.

This is where most people get stuck. Sometimes reading up on a service and learning about it for a couple of hours could save you hours or days trying to reach their goal.


Knowing how to *manually* enumerate is a very important component. A lot of tools simplify and accelerate the process of enumerating. This however, cannot always bypass the security measures of the services. To understand this issue, read the following example:

>”Most scanning tools have a timeout set until they receive a response from the service. If this tool does not respond within a specific time, this service/port will be marked as closed, filtered, or unknown. In the last two cases, we will still be able to work with it. However, if a port is marked as closed and Nmap doesn't show it to us, we will be in a bad situation. This service/port may provide us with the opportunity to find a way to access the system. Therefore, this result can take much unnecessary time until we find it.”

One of the tools you have at your disposal, is [[Personal-projects/Hack The Box/Nmap|Nmap]].

# Source
https://academy.hackthebox.com - *Network Enumeration With Nmap*