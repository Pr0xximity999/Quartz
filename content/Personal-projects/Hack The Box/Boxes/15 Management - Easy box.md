---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap  management.htb
```

```
nmap -p22,80,443,1689,4444,38869,50389 -sV -sC management.htb
```
# Box info
ports:
- 22/tcp: ssh - OpenSSH 9.6p1 Ubuntu
- 80/tcp: http - nginx 1.24.0
- 443/tcp: https - nginx 1.24.0
	- Possible subdomain name
- 1689/tcp: java RMI
- 4444/tcp: SSL/Ldap
	- sso.management.htb
- 38869/tcp: Java RMI
- 50389/tcp: LDAP (anonymous bind ok)

From the top…
# Port 80/443: Nginx http(s) server
Seem to be a website advertising IT and infrastructure. Has a client login leading to `sso.management.htb`.

theres a form to enter some details to request a scope
- hello@management.htb
- +44 20 7946 0142
- Holborn, London

Inspector doesnt show anything interesting at a quick glance, except for *a key and some encryption stuff*…hmmm. Ill keep it in mind.

onto the sso page

## Login page
[OpenAM](https://github.com/OpenIdentityPlatform/OpenAM) community edition login page. One of the links leads to the github. Latest release (16.1.2) fixed a bunch of CVE’s. Including some XSS and RCE stuff.

Looking at the network tab, it seems a loooot of query params show 16.0.5 as the version.

Looking at 16.0.6, there seems to be a pre-authentication RCE vulnerability: [CVE-2026-33439](https://nvd.nist.gov/vuln/detail/cve-2026-33439). Trying [this POC](https://github.com/infernosalex/CVE-2026-33439-Python-PoC). `id` works. Lets try a revshell. Doesnt seem to work that well, so ill try to see what i can find.

Ah, i think this user does not have shell.

The user of this site is named owen (Owen Castellan). I will look at other CVE’s that i might be able to mix with this one.

user openam runs nothhing but a java program. Some of its arguments are:
- Logging.config.file = `/opt/openam-tomcat/conf/logging.properties`
- logging.amager=`org.apache.juli.ClassLoaderLogManager
- Djdk.tls.ephemeralDHKeeySize=2048
- useCanonCaches=false
- add-opens=`java.base/java.lang=ALL-UNNAMED` and some others with the same pattern
- iplanet.services.configpath=`/opt/openam/config`
- Dcom.sun.identity.configuration.directory=`.opt.openam.config`
- classpath `/opt/openam-tomcat.bin.bootstrap.jar:/opt.openap-tomcat/bin.tomcat-juli.jar`
- Dcatalina.base=`/opt/openam-tomcat

Thats about it.

Let’s see if i can check out the `/opt/openam-tomcat` folder.

nothing in the tomcat-users.xml, catalina.policy, context.xml

server.xml has:
- server port: 8005
- connector port 8080 for `sso.management.htb`
- connector port 8443 for some SSL things
	- has a certificate stored at conf.localhost-rsa.jks
- connector port on 8009 for APJ 1.3 ?
- brute-forcing attacks isnt possible
- theres access logs in the logs folder

nothing of note in the web.xml file (that i can see).

Taking a step back. Googling “where is the openam password stored” tells me its either stored in an embedded OpenDJ directory server, or an external LDAP data store.

Oh wait, there’s also an `/opt/openam/config` folder.
boot.json has:
- dsameUser: dsameuser, DSAMe, Users,dc=management,dc=htb
- keystores.default
	- keystorepasswordfile (oh?)
		- /opt/openam/config/openam/.storepass
	- keypasswordfile
		- /opt/openam/config/openam/.keypass
	- keystoretype
		- JCEKS
	- keyatorefile
		- /opt/openam/config/openam/keystore.jckes
- configstorelist
	- ldapHost: sso.management.htb
	- ldapPort: 50389
	- ldapProtocol: ldap

bingo.

checking out the /opt/openam/config/openam folder.

Found the keypass, keystore and storepass directory.

TBH this box seems a bit too advanced, im going to try a retired box.