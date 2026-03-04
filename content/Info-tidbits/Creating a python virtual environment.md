---
tags:
  - programming-languages/python
  - taal/engels
  - language/english
banner:
publish: false
---
>[!important] Sources used!
>- https://docs.python.org/3/library/venv.html
>- https://www.kali.org/docs/general-use/using-eol-python-versions/

# Intro
Some operating systems work a bit fucky with `pip`, like apt; They manage the python packages externally, which can fuck up some python apps as well as some packages that are too new.

In my case, i want to run a certain `python2.7` script for this box i’m doing on Hack The Box. Kali manages python packages externally and i do not want to tinker with the apt versions, so i will just do it the other way.

Apart from that, python 2 is no longer maintained in the debian repositories, which means that this is the only solution for this problem.

A python virtual environments package called `pyenv` is perfect for this! It lets you create its own shielded place where you can set packages locally instead of system-wide :3

# Installing `pyenv` for python 2.7
Since the `pyenv` package is not in the debian or kali repositories, it will need to be built from source.

```bash
# Install all needed packages
sudo apt install -y build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python3-openssl git

# Download and build from source
curl https://pyenv.run | bash

# If ZSH is in use, add these to the .zshrc file, the standard bash solution is explained in the output of the previous command
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init --path)"\nfi' >> ~/.zshrc

# Check if $SHELL is empty and add zsh if it is
[ -z "$SHELL" ] && SHELL=/usr/bin/zsh
exec $SHELL
```
`pyenv` should be installed now !!!

Lastly, python 2 should be installed and be set as the default python version.
```bash
CFLAGS='-std=c11' pyenv install 2.7.18
pyenv global 2.7.18
pyenv versions
exec $SHELL
```

To use python 3 packages again, just run `pyenv system`.

Now you can install `python2` packages using `pip`!!!!!! Don’t do it via `apt` because it does not like `python2` packages
