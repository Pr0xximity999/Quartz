---
tags:
  - internet-protocols/smtp
  - language/english
  - taal/engels
publish: true
---
> **SMTP**: Simple Mail Transfer Protocol

The smtp protocol is designed to transfer mails efficiently and reliably. It works on a sender-receiver system where the sender is the client and the receiver the server(or an intermediate). It's workflow is very simple and step-by-step, one at a time.

**1. Setting up the mailer**<br>Once the connection is established, the SMTP-sender sends a MAIL command, telling the SMTP-receiver who the sender of the mail is. If the SMTP-receiver can accept it, it will respond with an OK reply.

**2. Setting up recipients**<br>The SMTP-sender then sends a RCPT (recipient) command telling the SMTP-receiver who the recipient is. If the SMTP-receiver can accept it, it will respond with an OK reply (otherwise it will reply with a reject). The SMTP-sender can keep sending RCPT commands for every recipient it wants to add.

**3. Setting up the mail data**
The SMTP-sender lastly sends the mail data to the SMTP-receiver (using a special sequence to terminate the message, letting the receiver know the message is finished). If the SMTP-receiver successfully processes the mail data it will send an OK reply.

>[!important]
>Commands and replies like MAIL, RCPT, or OK are **not case sensitive**, meaning they can both be upper or lower case. <br>Replies also have a numeric code.