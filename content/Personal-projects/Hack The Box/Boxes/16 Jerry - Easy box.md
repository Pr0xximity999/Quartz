---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC jerry.htb
```

# Box info
ports:
- tcp/8080 - Apache tomcat(8.0.88)/Coyote JSP engine 1.1

# Port 8080: Apache tomcat landing page
Version: 7.0.88.

Most buttons lead to some official docs page, but theres 3 buttons that lead to a login dialog:
- Server status
- Manager App
- Host manager

Looking at the version number, there seems to be a method of [improper authentication](https://security.snyk.io/vuln/SNYK-JAVA-ORGAPACHETOMCAT-16691232): CVE-2026-43512. This box is much older than this cve, so this must not be it.

bruh. Pressing cancel on the login dialog brings up an unauthorized page with an example login of `tomcat` : `s3cret`. And that works to log in.

**Server status** sows only one server: the apache tomcat one. Nothing noteworthy apart from some resource allocation and information.

**Manager app** shows theres 5 apps running:
- / - Welcome page
- /docs - Tomcat Docs
- /exmaples - Servlet and JSP Examples
- /host-manager - Tomcat Host Manager Application
- /manager - Tomcat Manager Application (server status, manager app)

I can stop, reload, undeploy or set when a session expires. I can also deploy something to the server caled a WAR file (Wep Application Resource/Archive).

The **Host Manager** i cannot access with the same login credentials.

Maybe the WAR upload is something. Found this hacktricks page https://hacktricks.wiki/en/network-services-pentesting/pentesting-web/tomcat/index.html. There’s a metasploit exploit for uploading WAR files that run code.

`tomcat_mgr_upload` uploads a WAR that runs RCE code.

I’m in. Both admin and normal user are accessible from the shell.

Oh but apperantly both keys are in 1 file on the desktop of the admin user.

got both flags.

