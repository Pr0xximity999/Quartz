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
> You’ve been here [[School/Year 2/S2/Cybersecurity Fundamentals/Module 1 - Cybersecurity/Gastsprekers/De wereld van cybercrime|before]].

An introduction is not necessary. 

# Risk analysis
When making a product, there has to be a risk assessment that checks for security failures inside of an application. A risk assessment is done in the following 4 steps:
1. Decide what needs to be protected (make boundaries)
2. Identify the risks (what poses a threat to your CIA triad?)
3. Analyse the found risks (consequence times chance)
4. Decide how to act (transfer, stop, accept, fix)

To check for common risks, a website like the [OWASP top 10](https://owasp.org/www-project-top-ten/) can be used. The best risk assessment is done within a multi-disciplinary group, meaning that there’s multiple people of multiple backgrounds that all have knowledge and expertise on a specific part, process or functionality of the software.

>[!example]
>1. You have a website that has a search bar that is used to look up products. The searched text is displayed on the screen after hitting enter.
>2. This type of functionality is vulnerable to [cross-side scripting](https://owasp.org/www-community/attacks/xss/), or XSS. This imposes a threat to confidentiality.
>3. The chance of this being used is *middle*, because a lot of frameworks protect against this. The impact is *high*, because it can lead to stolen data or cookies.
>4. This risk can be fixed by:
>- Sanitizing imput manually
>- Using a XSS-resistant framework/backend


# Sources and Links
- [OWASP top 10](https://owasp.org/www-project-top-ten/)

