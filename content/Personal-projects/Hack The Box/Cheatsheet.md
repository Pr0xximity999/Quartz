---
tags:
banner:
publish: false
---

# Important things
- [revshell generator](https://www.revshells.com/) - the goat
- use `nc -lvnp <port>` to gain shell when a revshell triggers
- `/usr/bin/script -qc /bin/bash /dev/null` for shell stabilization in case needed
# Linux 
## OS info
- ![[Vault-data/Attachments/Enumeration tips file perms.png]]
- https://juggernaut-sec.com/weak-file-permissions/

# Passwords and hashes
- `/usr/share/wordlists/rockyou.txt` is a very popular wordlist with the most common passwords.
- [hashcat](https://hashcat.net/wiki/doku.php?id=hashcat) - Password cracking
	- `-m <n>` to set hash mode, see list of all modes [here](https://hashcat.net/wiki/doku.php?id=example_hashes) 
	- `-a <n>` to set attack mode
		- 0: straight (default)
		- 1: combination
		- 3: brute-force
		- 6: hybrid wordlist + mask
		- 7: hybrid mask + wordlist
		- 9: association
	- `hashcat <hash file> <wordlist file>`
# Enumeration
## Wordlists
- [fuzzing wordlist](https://github.com/OctaYus/Wordlists/blob/main/fuzz_wordlist.txt)

## Website/directory enum
- `/usr/share/wordlists/dirb/common.txt` can be used for directories
- [Burpsuite](https://www.kali.org/tools/burpsuite/) - Proxy used to look at or forge network requests
- [Gobuster](https://www.kali.org/tools/gobuster/) - Directory mappign, a little less good and versatile than `ffuf`
	- use `--timeout 20s` or/and `--retry true` (or a higher timeout value) if a timeout occurs due to htb being slow as shit
	- `gobuster dir --url <url> --wordlist <wordlist>`
- [ffuf](https://www.kali.org/tools/ffuf/) - Fuzzing, used for directory and subdomain mapping
	- filter out responses using the `-f<letter>` argument
	- Subdir fuzzing:
		- `ffuf -w /usr/share/wordlists/dirb/common.txt -u http://website.htb/FUZZ`
	- Subdomain fuzzing:
		- `ffuf -w /usr/share/wordlists/dirb/common.txt -u http://website.htb -H "Host: FUZZ"`

## Sql enum
- [sqlitebrowser](https://www.kali.org/tools/sqlitebrowser/) - The name says it
- [sqlmap](https://www.kali.org/tools/sqlmap/) - Autmated sql injection testing and mapping for sql servers
## Internal services enum
- `sudo -l` to see what sudo perms the current user has
- `ss -tulpn` to see what services are running with open ports
- `ls -l /etc/shadow` to show all passwords (if you got the perms)
- `ls -l /etc/passwd` to show all users
	- `cat /etc/passwd | grep -i '/bin/.*sh'` to see all users with shell
- `ps aux` to see all running processes
- `service --status-all`
### Automated enum tools
- [linpeas](https://github.com/peass-ng/PEASS-ng/tree/master/linPEAS)
- [linux exploiter suggester](https://github.com/The-Z-Labs/linux-exploit-suggester)
- https://juggernaut-sec.com/manual-enumeration-lpe/
## From the outside
- [nmap](https://nmap.org/)
	- `T<n>` where n is 1-5, speed at which the scan happens
		- Faster scans might result in missed info
		- Default is 3
	- `-p-` to scan all possible ports
	- `-sV` for version checking
	- `-sC` for banner grabbing
		- [Banner grabbing(nmap)](https://nmap.org/nsedoc/scripts/banner.html)
		- [Banner grabbing (wikipedia)](https://en.wikipedia.org/wiki/Banner_grabbing)
- `nmap -p- -sV -sC <ip>` for a basic tcp scan
- `ftp <ip>` (check for anonymous login)


