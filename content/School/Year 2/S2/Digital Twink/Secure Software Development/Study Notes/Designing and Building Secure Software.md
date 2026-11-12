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
Writing software should be secure. You *could* use a flawed approach of designing and building software first, and doing security as an afterthought. 

A better approach is to build in security from the start, to really think about security *during* the designing of the software.

# The development process
The development process has many phases, but they can be generalized into four:
- Requirement
- Design
- Implementation
- Testing/Assurance

In which one of these phases does security engineering fit in? All of them!


# Requirements
**Security requirements** must be accounted for when creating requirements in general. Next to that, **abuse cases** must be set up to account for security issues that might occur within the application.

# Design
Every piece of developed software has an architecture. Within the architecture, security risks may also arise and thus an **architectural risk analysis** must be performed to document anything that might go wrong. This is also called a **threat model**.

# Implementation
After having considered a **security-oriented design**, the implementation must keep these in mind as the software is being developed. Automated code reviews like [[School/Year 2/S2/Digital Twink/Secure Software Development/Study Notes/SAST and DAST|SAST and DAST]] or [[School/Year 2/S2/Digital Twink/Secure Software Development/Study Notes/Secure Component Analysis|SCA]] or manual code reviews like the [[School/Year 2/S2/Digital Twink/Secure Software Development/Study Notes/Secure Code Review|Secure Code Review]] can also be implemented to make sure the quality of the code stays sharp.

# Testing
Creating test plans that account for cyber attacks on the system is also really important. Acts like third-party (or in house) penetration testing will make sure that common exploits will be patched up.