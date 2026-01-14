---
tags:
  - school/networks
  - internet-protocols/pop3
  - taal/engels
  - language/english
  - internet-protocols/pop
publish: "true"
---
# Intro
>**POP3**: Post Office Protocol (version 3)

The POP3 protocol is an outdated protocol that used to be a way to access and download messages held by a mail server. POP was developed largely because [[Info-tidbits/Network protocols/SMTP protocol|SMTP]] lacks a method for queuing messages on the recipient’s mail server.

POP used to be able to run on systems that couldn’t support a full fledged mail server.

POP provides a system for a user to temporarily log into their mail server to download messages (and delete them off the server).

The POP protocol is a bit similar to the [[Info-tidbits/Network protocols/SMTP protocol|SMTP]] protocol in the way that the client talks to the server in keywords.

# Commands
All commands in POP3 start with a case insensitive keyword, and may be followed by one or two arguments. All commands are terminated by a newline(CRLF) pair. 

Commands and keywords consist of ASCII characters and are each separated by a single space. All keywords are three or four characters long and arguments may be up to 40 characters long.

## List of commands
Keep in mind that these commands are *case insensitive*.
- ``USER``: Used to identify the client’s username or email address
- ``PASS``: Used to provide the client’s password for logging in


- ``STAT``: Lists the number of emails on the server, including their size
- ``LIST``: Retrieves a list of all emails on the server, including their size
	- Can have an optional argument, telling the size of an email, based on index (cannot be an email marked as deleted)
- ``RETR``: Retrieves a specific email from the server, based on its index
- ``DELE``: Marks a specific email for deletion on the server, based on its index
- ``RSET``: resets any actions done (no deletions or retrievals will take place)


- ``NOOP``: NO OPeration command, used to keep the connection alive
- ``QUIT``: Terminates the session and closes the connection

# Responses
All responses in POP3 consist of a status indicator and a keyword, and may be followed with additional information. All responses are terminated with a newline(CRLF) pair.

Responses may be up to 512 characters long, including the CRLF pair. To this day (and forever i suppose) there are two status indicators:``+OK`` and ``-ERR``. Servers MUST send the responses in upper case.

Responses to certain commands are multi-line. Each line ends in a single CRLF, until the final one, which contains a termination octet (decimal code 046, “.“) and a CRLF pair.

If a line starts with a termination octet, and other characters other than the CRLF follows, something called “byte stuffing” will take place. The server will send two termination octets instead of one, which the client then interprets back into a “.” instead of a termination character.

# State flow
A POP3 session is a state-based flow that progresses trough 3 states:
- **AUTHORIZATION**: the client identifies itself
- **TRANSACTION**: the client requests actions on the POP3 server (like acquiring or deleting mails)
- **UPDATE**: The server releases(deletes) any mails acquired during transaction and says goodbye. The TCP connection is then closed.

>[!important]
>The server MUST respond to any unrecognized, unimplemented or syntactically invalid commands with a negative status indicator. This also includes commands that are sent in the wrong state of the session.
>The server MAY also have a inactivity logout timer. This timer should reset if the client sends any commands. If the timer expires, all commands the client has sent should NOT enter the UPDATE state and the server closes the connection without sending any message.

**1. AUTHORIZATION state**<br>The POP3 session begins with the client connecting to the server(usually listening on port 110) over [[Info-tidbits/Network protocols/TCP protocol|TCP]] and the server greeting the client (``+OK``.

The user must send a ``USER`` command followed by its identification. 

If the server responds with a success indicator (``+OK``), the user may send the ``PASS`` command followed by its password.<br>If the credentials are incorrect, the server will send a failed indicator (``-ERR``).

Only one client can access one account at a time.

If the client issues the ``QUIT`` command in this phase, it won’t go to the UPDATE state.

**2. TRANSACTION state**<br>The client has successfully logged in and has now access to its messages. It can now issue one of the following commands:
- ``STAT``: Lists number of messages and their size
- ``LIST``: List all messages and their size
- ``RETR``: Retrieves a messages based on its index
- ``DELE``: Deletes a message based on its index
- ``RSET``: Reverts any commands done previously in this state
- ``QUIT``: Save and quit, go to the UPDATE state

**3. UPDATE state**<br>The server will run any staged transaction commands and tells the client goodbye, closing the connection.