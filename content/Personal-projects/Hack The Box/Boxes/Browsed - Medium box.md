---
tags:
banner:
publish: "false"
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


