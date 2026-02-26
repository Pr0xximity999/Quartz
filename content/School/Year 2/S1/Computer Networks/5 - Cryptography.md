---
tags:
  - school/networks
  - school/robot-fleet
  - taal/engels
  - language/english
publish: true
---
Having a computer network opens you up to all kind of threats. Malware, Dos(Denial Of service) attacks, people hijacking your network. One way to defend yourself from these attacks is a firewall.

>[!info]
>This article will talk about three fictional characters, Bob, Alice, and Eve. Bob and Alice want to talk privately, and Eve wants to mess with their communication.

# Types of threats

The most common list of threats are:

| Threat                                          | Desired property    |
| ----------------------------------------------- | ------------------- |
| Spoofing (acting as if youre something else)    | **Authenticity**    |
| Tampering (secretly changing data)              | **Integrity**       |
| Repudiation (acting like you did nothing)       | Non-reputability    |
| Information disclosure (monitizing stolen data) | **Confidentiality** |
| Denial of service (system overloading)          | Availability        |
| Elevation of privilege (gaining access)         | Authorization       |

# 3 most important aspects of security
Let’s make 2 people, Alice and Bob. Alice and Bob want good, secret communication. Everything needs to be perfect.

Now let’s add Eve. Eve is evil and wants to listen in on Alice and Bob.

1. Eve impersonates Bob, Alice thinks she is talking to Bob, but is secretly talking to Eve - **impersonation**

2. Eve secretly listens in on Bob’s and Alice’s conversation - **Confidentiality**

3. Alice talks to Bob, but bob talks to Alice trough Eve without him knowing, making Eve able to tamper with the message - **Integrity**

# Ciphers / Encoding
Bob and Alice have figured out Eve is listening in on them and want to create a secret language. They shift all the letters backwards a number of spaces, so their words get jumbled up. This is called the **Cesar Cipher**, because Julius Cesar used it to encode his messages.

Nowadays, the Cesar cipher is not really that secure, computers can decode a message in under a millisecond. You could jumble up the letters to random ones, assigning each letter a different output letter. Adding on top of this: every x number of letters, you change the letter jumble again. This is way more secure because you can’t trial and error your way trough this as much anymore. This is called a **block cipher**.


# Symmetric Cryptography
Symmetric cryptography is when you can encrypt and decrypt a message with the same key. It is easy and low cpu-cycles intensive, but really insecure since everyone can encrypt and decrypt your message if they have the key. That’s why there’s a more secure method nowadays.

# Asymmetric Cryptography
Asymmetric cryptography is a way more secure version of symmetric cryptography. It is called asymmetric because it requires **two keys**: A **public** and **private key**. Asymmetric encryption is a bit slower than symmetric encryption because it requires more mathematical power on the cpu’s end, but managing keys is way more easy.

The private key can decrypt and sign messages, and the public key can *only encrypt* messages, not decrypt it. This ensures your data cannot be tampered with, because the data cannot be read, but it can be modified and encrypted again. This achieves **confidentiality**, but not Authenticity and Integrity  because everyone can send messages or impersonate someone.

But this public-private-key system also works the other way around. Private keys can sign messages that public keys can verify. Along with the message, the signature in the form of a **hash** will be sent that will only match up if the message has not been tampered with (edited). A hash is a one-way encoding method that cant be decrypted unless you enter the exact same input to compare the outcome. This way, if Alice sends a message to Bob using her private key to sign the message, Bob can verify it using Alice’s public key. This achieves **Integrity** and **authenticity**, But no confidentiality, because everyone can still read the messages.

This is how we come to our final step, ensuring all 3 aspects:<br>By sending a code, or **hash**, along with the message, you can ensure the validity of a message and the person who sent it. By encrypting the message using the receivers public key, only they can read it. 

If Alice were to send a message with a signature (to ensure **authenticity**) to bob, encrypted by his private key to ensure **confidentiality**. Bob would know that the message is not tampered with because of the hash, ensuring **integrity**.
# Hashing
A hash is a one way algorithm to change text (NOT AN ENCRYPTION METHOD!!), meaning that after hashing a piece of text, it wont be able to be reversed again.
One of the most used hashing algorithms is SHA, which has such a complicated and big mathematical process, that the chance of two pieces of text having the same hash is astronomically small.

# Certificate authorities
When browsing online, you mostly use https connection, the s stands for “secure”, meaning that your connection is encrypted. https websites are also validated to be the actual website you want to connect to. How you may ask? Trough the use of **certificates**.

Certificates are basically tiny files, telling the user this site is validated by a trusted source, called **CA’s** or **Certificate Authorities**. There are only a handful of trusted CA’s by the big browsers, to ensure true best of validity for users.