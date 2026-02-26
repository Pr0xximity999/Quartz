---
tags:
banner:
publish: false
---
```
nmap -p- -sV -sC 10.129.1.227
```

port 22: openssh 9.6p1 ubuntu 3ubuntu13.14

port 80: http nginx 1.24.0

# http website
website is templated from [html5up](https://html5up.net)
made in php

gobuster says website has no subdirectories other than the index, `assets` and `images` lead to a 403 forbidden.


subdirectories found by manually looking are:
- samples.html
- upload.php

samples lets you download html samples with pure html/css/js. Nothing of value….except…<br>![[Vault-data/Attachments/Browsed - Medium box.png]]

upload.php has an input for a chrome extension (Zip). I think it runs the extension’s content inside the browser. It outputs a lot of text when ran, crashes.

The tester spins up a chromium instance in which the extension is ran.

The output log is mostly gibberish, showing a chromium agent being ran. 

Part of the output when sending a zipped image:
![[Vault-data/Attachments/Browsed - Medium box-1.png]]
output is the same when sending a valid extension

I think the output is just a crash log, because at first it runs the crash reporter.
## Browser extensions
A browser extension essentially is just a group of html, css and javascript files that are ran like a website. how and what is supposed to be ran is specified in the `manifest.json`.

When uploading the extension, DONT zip a folder, zip the contents directly…like it says on the website bleh

Browser extensions have some [vulerabilities](https://cheatsheetseries.owasp.org/cheatsheets/Browser_Extension_Vulnerabilities_Cheat_Sheet.html). but none are of use.

There has to be some way to use the pure javascript as a foothold.

# Second website
i can run `fetch()` to try and access local files, but CORS blocked it…it says something about `browsedinternals.htb`. 

hat website runs a gitea server. version 1.24.5
it also hosts an api on /api, but thats proabably just built into the gitea server

username of the server/linux machine is `larry`.

using [burp suite to bruteforce the password](https://portswigger.net/support/using-burp-to-brute-force-a-login-page). takes too long to use…

The git server has a single repository, a python server running on localhost:5000