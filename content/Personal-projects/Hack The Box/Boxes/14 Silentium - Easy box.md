---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC silentium.htb
```

# Box info
ports:
- tcp/22: ssh
- tcp/80: http nginx 1.24.0


# Port 80: nginx http server
Seems to be a loaning website. 

**Landing page** has only some calculating sliders but nothing else of note. None of the links lead to new pages, only moving to certain headers. Tried `/login` for the heck of it, but nothing happened.

## Inspector tab
Inspecting the **html**. Nothing noteworthy there either. The **app.js** only has some calculator logic and behavior for the navbar scrolling.

The **console** spits out 3 warnings
- Something related to the tailwind css cdn url, to be not used in production
- A parsing error from json, unexpected character at line 1 column 1
	- The resource url comes from `silentium.htb/<anonymous code>`
- The same error, but without a stack trace

I think the error may be related with me trying to enter `/login` in the search bar, though trying again or entering something else results in it not happening again. Maybe it was caused by one of my browser extensions.

The **network** tab shows only some font files, some tailwind resources and the app.js file being requested.

No data present in **storage**.

## Directory scanning
running `ffuf` to scan directories to see if anything comes up.
```bash
ffuf -w /usr/share/wordlists/dirbuster/directory-list-1.0.txt -u http://silentium.htb/FUZZ -fs 8753
```

Only the assets endpoint shows up. Though it returns a 403 forbidden.

## Server version
Nginx 1.24.0 is a 2023 version, it might be vulnerable.

Yup. [16 to be exact](https://www.cybersecurity-help.cz/vdb/soft/f5_networks/nginx/1.24.0/). Im not sure if any are really usable and i dont feel like reading trough all 16, so i will try to refine my browsing search. I cant very quickly find any hits, so i will first investigate the tailwind cdn warning before coming back.

## Tailwind
The network tab tells me this site is running tailwind 3.4.17

This [stack overflow post](https://stackoverflow.com/questions/71818499/how-bad-is-it-to-use-tailwind-cdn-in-production) says that it only negatively impacts loading times to use the tailwind cdn endpoint. There don’t seem to be any vulnerabilities with this either.

## Domain scanning
running `ffuf` to fuzz trough the domain names for any possible hit.
```bash
ffuf -w /usr/share/wodlists/fuzz_wordlist.txt -u http://silenium.htb -H "Host: FUZZ" -fs 178
```
No hits found. Ran a couple of other wordlists with the same result. Back to poking at nginx i suppse.

## Nginx
I will look trough the previous 16 vulnerabilities i found and go trough them from most critical to least.

The first i will look at is `CVE-2026-9256`. It’s a heap-baed ubffer overflow. It is possible to execute arbitrary code by forging http requests. This occurs when a rewrite directive uses a regex pattern that overlaps with a perl-compatible regex (PCRE), paired with a replacement string that references multiple captures. Nginx miscalculates the output length of this string and causes an out-of-bounds write, leading to RCE.

I found [this](https://github.com/3nou9h/CVE-2026-9256-Poc) poc from 4 months ago. It seems really technical to pull this off, but luckily it suppied some python files. trying the `heap_leak.py` file.

This all seems really convoluted and it only seem to test the vulnerability, there might be some other POC’s

[There sure is](https://github.com/06-ux/CVE-2026-9256-POC). This is in chinese though, but translating it seems that the poc did not work either. Trying a different CVE.

`CVE-2026-42945`, another heap-based buffer overflow. This one seems to have it’s own name even: “nginx rift”. Seems like something that might work.

The NIVD website references a [repository](https://github.com/DepthFirstDisclosures/Nginx-Rift) made for this vulnerability. It explains how it works, and has a POC. The command even has a built in revshell option. It does not seem to pop a shell though. Looking for more POC’s. 

Stumbled onto this 4 month old POC made for HTB…hmmmm. I really hope i didnt just spoil myself. IT seems to be a little older than the box is, so it should be fine.
Running the checker says that the host is vulnerable. It takes a bit to go trough all possible candidates at multiple memory offsets. It failed. Back to the drawing board.

## Subdomain scanning (again)
Installed the [seclists](https://github.com/danielmiessler/seclists) wordlist because they have more subdomain wordlists.

wordlists are located in `/usr/share/seclists/Discovery/DNS/`.
trying
```bash
ffuf -w /usr/share/seclists/DNS/subdomains-top1million-20000.txt -u http://IP -h "Host: FUZZ.silentium.htb" -fs 178
```

Putting the hostname in the host section DOES work. there is a `staging.silentium.htb` host.

## Staging.silentium.htb
Landing page goes to `/signin`, which is a signin page. The page is running a react backend. It uses emotion for css stuff.

Clicking login briefly flashes the dashboard before kicking me back to the login page. Using burpsuite’s package capture mode, i can freeze the request to look at the dashboard.

By dropping all the packets that would send me back, i was able to read the latest version available. I cannot really see anything else or do something, so back to the login page it is.

Trying a name from the company name list on the main site, `ben@silentium.htb`, gives “incorrect email or password” warning. Using an username that might not exist gives the “user not found” warning. bruh.

Trying a directory scan. Only really yields in `/assets`. using an url encoded character directly in the search bar results in a 500 internal server error response.

Going to try sqlmap
```
sqlmap -u "http://staging.silentium.htb/signin" --method=POST --data='{"email":"ben@silentium.htb","password":"password"}' --dmbs=sqlite --batch
```
Doesn’t seem to be it.

Trying to see if the rest password has something interesting.

https://github.com/FlowiseAI/Flowise/security/advisories/GHSA-wgpv-6j63-x5ph

oh.

Sending the mail address in the password forgotten form sends back ALL user data. INCLUDING the password hash and the reset token. I’m able to log into the flowise environment.

Flowise version 3.0.5
The only thing here seems to be an API key.

Googling “flowise api exploit” leads to `CVE-2025-59528`. Lol. 
There is a metasploit exploit for this cve.


this poc gave me access to the flowise server. or well…docker container.

Running `printenv` shows me all the environment variables. Some interesting ones are:
- **FLOWISE_PASSWORD**=`F1l3_d0ck3r`
- SMTP_PORT=1025
- PORT=3000
- SENDER_EMAIL=ben@silentium.htb
- JWT_AUTH_TOKEN_SECRET=AABBCCDDAABBCCDDAABBCCDDAABBCCDDAABBCCDD
- SMTP_USERNAME=test
- SMTP_SECURE=false
- **SMTP_PASSWORD=`r04D!!_R4ge`**
- SMTP_HOST=mailhog
- SMTP_USER=test

The SMPT password is the same as the ssh password for ben.

# Port 22 - ssh
user flag found. Finally.

ben cannot run root.

`ss -tulpn` gives me:
- udp/53 - DNS (local)
- udp/68 - DHCP
- tcp/22 - SSH
- tcp/8025 - mailhog (local)
- tcp/80 - http server
- tcp/1025 - alternative smtp port (local)
- tcp/35661 - unknown (local)
- tcp/3000 - http flowise server
- tcp/3001 - http gogs server. Self hosted git server (local)

`ps aux` tells me mailhog runs as the ben user, so im not sure if that can be exploited. It also tells me that port 3000, 1025 and 8025 run in a docker container. I’m guessing that’s the mailhog environment then. maybe port 3000 is its web interface? I’ll try to tunnel to it.

3000 is indeed the silentium container. 8025 is mailhog though.

The whole UI is a bit simple, the only button i can really interact with is enabling a chaos monkey. Going to see if 35661 i something noteworthy.

Scanning it with nmap reveals it to be a golang http server. Although just going to the url reveals a 404 page.

Continued the next day. It seems that the 35661 port has been re-randomized. it now is 33323. This might mean something.

Inside the cookies of the website, it has a password hash for meye. No idea what it is, but im going to try to crack the hash. The hash doesnt seem to be able to be cracked.

I think meye is motioneye. Not sure though. There is no motioneye port open.
Restarting the website does not return the motioneye password hash. I dont know where it went.

## Gogs server
port 3001 is a gogs server. which is a self-hosted git webpage. It runs as root. It might be worth looking into.

I have no idea if this works, as i dont have the gogs version. But there seems to be RCE capabilities in gogs 0.14.2, which si the latest support release: `CVE-2026-52806`. It works because branch names arent sanitized properly, letting you input arbitrary code right into the name. I found a [POC](https://github.com/portbuster1337/CVE-2026-52806) for that CVE, but it did not work. It DID however, give me the version number.

Gogs 0.13.3 is vulnerable to [CVE-2025-8110](https://nvd.nist.gov/vuln/detail/CVE-2026-52806). another RCE exploit via path traversal. Though it does seem its only capability is to delete a file.

Tried two metasploit exploits for the heck of it. Doesn’t work. Also found this [exploit-db](https://www.exploit-db.com/exploits/52348) file for (CVE-2024-39930), it seemed to work, but trying to log in on ssh says that gogs does not provide shell access. Dead end again, i suppose. Must be that gogs ssh server has been disabled.

## User Ben
The only thing that seems to be left is that mysterious golang server on port 33323 that randomly changes ports on reboot. Going to continue tomorrow again.


The port changed to 45527 now. Ill see what i can get out of nmap.

NMAP says its supposedly a golang server but it’s not sure. I don’t really know what to do with this information. Maybe i can telnet into it?

Telnet returns a badrequest, closed by foreign host. I really dont know if this is something.

Looking at the `printenv` env variables. Nothing.

Screw it, im running linpeas
### Linpeas output
the output makes me realize i havent done a lot of directory searching. Maybe i could also check out the /var/www directory.

I see some CVEs it should be vulnerable for, but thsoe are all kernel level shit, so thats wayy out of scope for an easy box.

It really seems interesting to explore the /var folder and see what i can find.

That’s it, really. Dang lol.

### folder enum
The silentium website resides there. Theres litterally 3 files: html, css and js

Trying to see if i can find the gogs file.

i think its in /opt/gogs. Though some files are permission denided. The stuff i can see, i cannot edit. I can see the database path and ip: localhost:5432, sqlite file in /opt/gogs/data/gogs.db. No password it seems, username gogs. I dont know why a sqlite path has a host though, since its a file.

Secret key is sdsrcxSm0iC7wDO.

I dont know if i can actually use the secret key for something. Google tells me its used for hashing stuff and encrypting cookies.

Im going to try that rebase vuln again.

create a repo named “test”
```bash
# Create the repo
mkdir test
cd test
git init -b master

# Init the main branch
touch file
git add -A
git commit -m "init"

# Make a featre branch
git switch -c feature
echo bye >> file2
git add -A
git commit -m "change"

# Update the main branch
git switch master
echo hi >> file
git add -A
git commit -m "update"

# Create a malicious branch
git update-ref 'refs/heads/test' master

# Check if the branch exists with
git for-each-ref --format='%(refname:short)' refs/heads/

# Add the remote
git remote add origin http://testtest:test@localhost:3001/testtest/test.git

# Push it all
git push origin master feature \
  'refs/heads/test:refs/heads/test'
```
- Go to the repo in gogs > settings > advanced settings
	- Enable pull requests
	- Allow rebase
	- save
- Create a pull request
	- Base: exec branch
	- Head: feature

It refuses to merge. It says the two branches have different histories.


wait.
CVE-2025-8110. when i looked it up i accidentally landed on CVE-2026-24135 and did NOT Notice. Hold on.

[No](https://github.com/zAbuQasem/gogs-CVE-2025-8110/blob/main/CVE-2025-8110.py)…

![[Vault-data/Attachments/14 Silentium - Easy box.png]]
NO.
im crine
