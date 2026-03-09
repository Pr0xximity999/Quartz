---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC 10.129.4.178
```
# Box info
Ports:
- 22/tcp: ssh - OpenSSH 9.6p1 Ubuntu 3ubuntu13.14
- 80/tcp http - Apache httpd 2.4.58

# Port 80 - http
Http fuzzing
```bash
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://cctv.htb/FUZZ
```

The results only really give the `index.html`.

the index only has a login button that leads to a [zoneminder](https://zoneminder.com/) page.

Zomeminder is a security camera website thingie.

**Zoneminder vulnerabilities**:
[CVE-2024-43360](https://nvd.nist.gov/vuln/detail/CVE-2024-43360) (v 1.36.34, 1.37.61 / V1.36.33, V1.37.33) tried [this](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-9cmr-7437-v9fj) poc of a vulnerability, but it did not seem to work inside burp.

v1.37.33 [this](https://www.exploit-db.com/exploits/51902) poc also didnt work

[CVE-2023-41884](https://nvd.nist.gov/vuln/detail/CVE-2023-41884) (1.36.34) [this](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-2qp3-fwpv-mc96) seemed to just time out poc also didnt work

![[Vault-data/Attachments/10 CCTV - Easy box.png]]

[CVE-2025-65791](https://nvd.nist.gov/vuln/detail/CVE-2025-65791) seems to all refer to a single github POC that provides 0 context to how its used and is even being discredited in the issues tab.



**Apache vulnerabilities** (v2.4.58):
[cve-2024-38476](https://www.cvedetails.com/cve/CVE-2024-38476/) doesnt work, as tested by [this](https://github.com/mrmtwoj/apache-vulnerability-testing) tool.

It’s probably not apache, since…why would you want to make a cool box have such a lame exploit.

