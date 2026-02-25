---
tags:
  - personal-project/arch-linux
  - programs/nginx
  - taal/engels
  - language/english
  - personal-project/server
banner:
publish: true
---
# Introduction
[Nginx](https://nginx.org/), pronounced “engine-x” is a server utility used as:
- http server
- reverse proxy
- load balancer
- [[Info-tidbits/Network protocols/TCP protocol|TCP]]/[[Info-tidbits/Network protocols/UDP protocol|UDP]] proxy serve
- mail proxy server
A lot of proxies.

For my use case, it will be a reverse proxy and a (kind of) internal dns server.

So i have my own [[Info-tidbits/Vps/Installing a VPS|server]] with some stuff running on it, and for security reasons i’m only able to connect with things like the reverse proxy and portainer though a secured ssh tunnel. This way, i can connect to the docker containers via `localhost:port` in any browser.

The issue is that i’m lazy. I want to be able to, for example, type in `portainer.localhost` as a substitute. Sadly this functionality is not supported by Linux itself (i use arch btw), so that’s where nginx comes into play.

# Installing Nginx
Downloads the binaries can be found [here](https://nginx.org/en/download.html). In my case i will use the Arch Linux package manager `pacman`. (use your own package manager in case you run something else).
```bash
sudo pacman -Sy nginx
```

nginx should start automatically after installing.

# Configuring Nginx
Nginx configs are found in `/etc/nginx/nginx.conf` on Linux

Inside this file web-page routing is handled. In my case, i want `portainer.localhost` to be redirected to the forwarded port (which i will keep undisclosed :P).

Inside `http {}`,  i wrote:
```config
    server {
        listen 		80;
        server_name	portainer.localhost;
        location / {
            proxy_pass https://localhost:PORTNUMBER;
        }
    }
```

Now, when ports are forwarded to the specified port, `portainer.localhost` will proxy to that location :3