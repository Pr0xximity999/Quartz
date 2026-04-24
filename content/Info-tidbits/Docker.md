---
tags:
  - taal/engels
  - language/english
  - application/docker
banner:
publish: true
---
# Intro
Docker is basically a small computer you can give to someone else. It’s a solution to virtualise a piece of software (or application).
Because it’s virtualised you can also harden it more easily. Lucky for you, docker closes off every way in unless you specifically open it up.

Docker can essentially be used in every step of the SDLC:
- You can quickly prototype applications
- Apps can be designed around a docker environment
- The CI/CD pipeline can be made for a docker environment
- Test processes can also be ran inside docker
- New updates can be pushed to new image versions
# Basics
The base process of docker is the docker engine. Docker talks to this proces.

To test this
```bash
docker run hello-world
```

## Images en registries
After running a docker container, the engine will first check if you have the **image** on your local machine. If it cannot find it, it will try to connect to a **registry**.

A registry is an (online) repository of docker images. At default this will be docker hub, but you can also just host one yourself. From now on docker will use your locally cached image instead.

To see the used system resources (imaegs, containers, volumes, build cache), run:
```bash
docker system df
```


## Dockerfiles
A dockerfile is the heart of your image. In here are all the instructions needed to build the image.

### Syntax thingies
- `WORKDIR`: Set current working directory in the container
- `RUN`: run a bash command **during building**.
- `CMD`: run a command **during running**.
- `ENTRYPOINT`: Runs the command that will be the starting point of the app that the container was meant for
### Building 
To build the dockerfile, run:
```bash
docker build -f dockerfile -t tagname .
```

- `-f` is a flag that defines the targeted file.
- `-t` lets you specify the image name, or tag

Inside the logs will be numbers like `[1/1]`, which means what current line you are at.

### Running a container
Running your docker container can be done with:
```bash
docker run imagename -t -p 8000:8000 -v ./folder/:/app
```
- `-t` spawns a terminal on running it (not interactable)
- `-it` spawns an interactible terminal
- `-p` binds a port to the container, with the first one being the local port and the second being the container port
- `-v` mounts a volume with the syntax `localfolder:imagefolder`

Inside your terminal you cannot do much as the image is *very* barebones. You could install things inside, but that’s not the intended way. Just add it to your dockerfile instead.

```dockerfile
RUN apt update
RUN apt install nano python3 -y # For example
```

### Running stuff
To run a command inside the container, you can either use:
```dockerfile
CMD [ "/bin/executable", "targetfile" ]

ENTRYPOINT [ "/bin/bash", "-c" ]
```

`CMD` will just execute it using the given executable, `ENTRYPOINT` will be the actual starting process of the image.

>[!info]
>`/bin/bash -c` tells bash a command is coming that it needs to run, instead of just spawning a shell.

### Arguments
To give more customisability to your image, you can add arguments. Arguments are used during **building** locally on your machine.
```dockerfile
ARG NAME=defaultvalue # Call it with ${NAME}
```

To use an arugment in your build command, use the `--build-arg MAIN=main_new.py`

### Environment variables
Environment variables are like arguments, but they are used during **runtime** in the image.

``` dockerfile
ENV NAME=value # Call this too with ${NAME} 
```

```bash
docker run -it -e NAME=value
```

### Multi-staging
You can run the `FROM OSIMAGE:latest` again to start up a new OS environment. After this you can pass stuff from the previous stage by doing the following:
```dockerfile
FROM debian:12-slim AS builder
# Do stuff and output result to /directory

FROM alpine:latest
# Do stuff
COPY --from=builder /directory ./
# Do stuff
```

This way, you can run your container in a smaller, better, different environment, but do the setup in a faster and bulkier space.

## Compose
Docker compose is a powerful way to set up multiple comtainers in a single file. This file does not use the dockerfile syntax, but the YAML syntax.

An example of the syntax could look like this:
```yaml
services:

  web:
    image: 04-webserver-demo:1.0
    container_name: python-webserver
    restart: unless-stopped
    ports:
      - 8000:8000
    volumes:
    - ./webserver/web_root:/app # <--- This is a relative path. So it depends where you start the image
    - time_file:/app/time
    depends_on:
      - time-fetcher
    

  time-fetcher:
    build: python-timefetcher
    volumes:
    - time_file:/time/time_file

volumes:
  time_file: 
```

### Syntax
- `services`: All the containers running, the indentation below this is the name of the service in the syntax space
	- `image`: The selected image, like `SELECT` in the dockerfile
	- `container_name`: The container name when you look it up
	- `ports`: binding the port like `-p` in `docker run`
	- `volumes`: mounting the volume like `-v` in `docker run`
		- you can use a label defined in `volumes` and docker will assign a volume and some space for you 
	- `depends_on`: a dependency on another service, will wait until that one finishes building before doing its thing
- `volumes`: Defined volumes that you can mount to
- `networks`: Explained below

### Networks
Networks are internal communication networks that are not accessible by the host, but are accessible by other containers. It CAN also talk to the host, but you need to set that yourself.

#### Syntax
- `networks`: define networks below by using a name
	- `driver`: the network driver to use
	- `internal`: boolean whether its accessible to the host, true means it is not
	- `driver_opts`: passing options to the network driver, you should look this one up if you need it

