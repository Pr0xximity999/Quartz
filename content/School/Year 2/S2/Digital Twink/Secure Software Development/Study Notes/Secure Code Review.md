---
tags:
  - school/secure-software-dev
  - school/digital-twin
  - taal/engels
  - language/english
banner:
publish: true
---
# Introduction
Reviewing code for security is crucial nowadays. Knowing how to review code and where to look for flaws in the logic that [[School/Year 2/S2/Digital Twink/Secure Software Development/Study Notes/Secure Component Analysis|automated systems]] might miss is a great skill to have.

# Contextual issues
Automated systems might miss some more complex or contextual security flaws that a human that has knowledge about the system might pick up. Manual code review pairs greatly with automated systems like [[School/Year 2/S2/Digital Twink/Secure Software Development/Study Notes/SAST and DAST|SAST and DAST]] by looking in places like business logic validation or high complexity feature implementation. 

# Secure code review vs Regular code review
This differs from a standard code review by only focusing on security concerns like input validation, input sanitation, authentication and authorization mechanisms or potential attack vectors.
	# Sources
- [Secure Code Review Cheatsheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html)
- [Secure Code Review - HackTheBox](https://www.hackthebox.com/blog/secure-code-reviews)