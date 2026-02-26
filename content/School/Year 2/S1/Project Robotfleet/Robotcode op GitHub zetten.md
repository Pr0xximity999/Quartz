---
tags:
  - language/dutch
  - taal/nederlands
  - school/robot-fleet
  - school/eindproject
banner:
publish: "false"
---
Code van de robot moet ook op de GitHub terecht komen. Vanuit de robot pushen en pullen is niet handig omdat iemand dat ingelogd moet zijn op de robot, wat een veiligheidsprobleem is. Daarom word er hier uitgelegd hoe je je bestanden van de robot kan halen en op GitHub kan zetten.

# GitHub opzetten
Allereerst moet GitHub goed opgezet zijn op je lokale computer. Als je al een werkende repo hebt waar je ook mee kan pushen kan je deze opzet overslaan en doorgaan naar het volgende stuk.
## GitHub klonen met SSH
In de GitHub repo website, ga naar de groene Code knop, en clone de ssh URL.<br>
![[Vault-data/Attachments/Robotcode op GitHub zetten ssh url.png]]

Clone deze git repo in je home folder (`~/`).

## SSH sleutel in GitHub zetten
Op je locale computer, open een terminal en run `ssh-keygen`. Klik op enter totdat het proces is uitgevoerd. Als er word gevraagd of je de al bestaande sleutel wilt overschrijven klik je “n” (je hoeft dan geen ssh sleutel te maken).

Ga naar de folder `~/.ssh/`. Als het goed is staat hier een bestand dat lijkt op `id_ed25519.pub` (let er GOED op dat je het bestand pakt dat eindigt op `.pub`). Kopieer de inhoud van dit bestand.

Op github, ga naar [de keys setting van je account](https://github.com/settings/keys). Klik op “New SSH key” en geef hem een naam, plak de gekopieerde key in het `Key` veld.

Als het goed is kun je nu pushen naar de repo.
# Je bestanden van de robot af kopiëren
Als je een folder kopieert:
- Op je lokale computer:
```bash
scp -r rens@robot-ip:pad-naar-folder-op-robot  ~/placeholders/
```

Als je een enkel bestand kopieert:
- In de placeholders repo folder, maak een folder aan waar je de bestanden naartoe kopieert
- Op je lokale computer:
```bash
scp  rens@robot-ip:pad-naar-bestand-op-robot  ~/placeholders/folder-naam
```

Vervang `~/placeholders/` met de placeholder folder repo als deze anders is.

Voeg daarna een `location.md` bestand toe aan de folder waar je bestanden staan (of de root van de gekopieerde folder). Schrijf het volgende naar dit bestand:
```markdown
place these in [type hier de locatie waar de folder hoort] (create it if it doesn't exist)
```

