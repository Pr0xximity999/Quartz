---
tags:
  - school/secure-software-dev
  - school/digital-twin
  - taal/engels
  - language/english
banner:
publish: true
---
# Intro
The fundamentals of secure IT are usually grouped into 3 parts:
- Confidentiality
	- Preventing disclosure of information to unauthorized individuals or systems
- Integrity
	- Messages cannot be tampered with without detection
- Availability
	- Systems and networks must be up and running
Abbreviated, this is called the *CIA* triad. It has nothing to do with the Central Intelligence Agency of america.


Any system that has even the slightest hint of security should enforce these 3 fundamentals.

# Confidentialty
Only certain people should be able to access certain information. This can be done trough things like:
- Access control
	- selectively restricting access to resouces
- Encryption
	- Encode messages so only certain people can read it
- Two-factor authentication
	- Add multiple ways to verify the identity of the entity trying to access the data

# Integrity
The data is stored and transferred as intended, without it being modified. Multiple methods of this are:
- Hashing
	- Map data of an arbitrary length to data of a fixed length
- Digital signatures
	- Mathematical schemes to verify the integrity of the data (part of hashing and checksums)
- Non-repudiation
	- Provides proof of integrity, can be asserted to be genuine

# Availability
Information should always be accessible to authorized users. Design systems to always have:
- Redundancy
	- Multiple services do the same thing so that if one fails, the other can pick up the slack
- Fault tolerance
	- Systems should continue to run when failures occur, just be sure to handle them correctly
- Patching
	- Fixing stability issues and close security holes