---
tags:
  - personal-project/theming
  - applications/spotify
  - applications/spicetify
  - taal/engels
  - language/english
---
Regular spotify can look kinda boring at times. Even after almost 2 decades, spotify does not have native theme customization or plugins.

Good thing people on the internet fixed that.

[Spicetify](https://spicetify.app/) is a cli(command line interface) tool that enables custom css, themes, apps, and extension support. There is quite an extensive list of user created content already, so it’s definitely worth a shot if you’re interested.

# Installation
Of course this step differs from operating system to even what method of installation you use. You can find all the different commands [here](https://spicetify.app/).

If the installer asks you if you want to install the marketplace, reply with Y(es). This will make installing other things way easier. Otherwise, use this command to install it (on linux):
```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh
```

Since i use arch linux, i will be installing the AUR package, using `yay`.

```bash
yay -S spicetify-cli
```

The docs tells you that, if you installed from AUR, that you need to give write permissions on certain spotify files:
```bash
sudo chmod a+wr /opt/spotify
sudo chmod a+wr /opt/spotify/Apps -R
```

and that’s it, spicetify is installed!

# Create a backup
The first thing you should do after installing spicetify is making a backup of your current spotify build. This is in case something goes south and your spotify breaks. Without it you wouldn’t be able to restore it to a usable state, unless you remove and re-install spotify (and spicetify).

```bash
spicetify backup
```

You can restore the backup by running:
```bash
spicetify restore
```

# Configuring
If you have enabled the marketplace on startup, you’ll only need to run one last cli command before you’re done (if you haven’t enabled it, [remove](https://spicetify.app/docs/advanced-usage/uninstallation) and reinstall spicetify).

Do note that this will restart your spotify:
```bash
spicetify apply
```

After this, there should be a new button in the top left corner that looks like a shopping cart. This is your *marketplace*.

Install themes, css snippets, extensions, and apps from here.

My favorites are the `text` theme from darktheemer, which gives your spotify a text-based look, and the `infinite jukebox` app, which makes your songs last longer by jumping around on similar parts (keep in mind that the loop button is invisible with the text theme enabled.

Check out the spicetify docs for more information :3