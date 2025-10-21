---
tags:
  - applications/neovim
  - personal-project/arch-linux
  - taal/engels
  - language/english
banner: "[[Vault-data/Banners/field-illustration.jpg]]"
---
Neovim: the scary text editor that doesn’t use a mouse. It always seemed interesting to me, though i never had the motivation to fully commit to it.

I installed Neovim using ``sudo pacman -S nvim`` and ran the command `nvim`. Inside, using the command `:Tutor` i started doing the tutorial, which goes over:
- all the basic movement keys like `hjkl` for left, down, up, and right respectively
- saving (writing) a file with `:w` and quitting a file with `:q` (or `:wq` to write-quit, `:q!` to force quit in case there’s unwritten changes)

# Plugins
The reason i chose Neovim over regular ‘ol Vim is because, for starters, Neovim looks better out of the box, but also because it supports a bunch of plugins and themes, all written in lua.

For the plugins i will be using [lazy.nvim](https://lazy.folke.io/).

For the setup you have two options: single file and multi file. I went with single file for its simplicity.

Inside `~/.config/nvim/init.lua`, i added the line:
```lua
require("config.lazy")
```

And inside `~/.config/nvim/lua/config/lazy.lua`, i added:
```lua
-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  local out = vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath })
  if vim.v.shell_error ~= 0 then
    vim.api.nvim_echo({
      { "Failed to clone lazy.nvim:\n", "ErrorMsg" },
      { out, "WarningMsg" },
      { "\nPress any key to exit..." },
    }, true, {})
    vim.fn.getchar()
    os.exit(1)
  end
end
vim.opt.rtp:prepend(lazypath)
-- Set these up before setting up lazy
vim.g.mapleader = " " 
vim.g.maplocalleader = "\\"

-- Setup lazy.nvim
require("lazy").setup({
  	spec = {
	  	-- Plugins go here
  	},
    -- Automatically check for updates
  	checker = { enabled = true }
})
```

This is all you need to get the base of lazy working. Plugins go inside the setup, and you can manage lazy with the command `:Lazy`. Let’s try that now.

![[Vault-data/Attachments/Neovim lazy default setup.png]]

Very empty, but it works. I’ll quit by writing `:q`. Let’s install some plugins, starting with a nicer theme. Since other apps already use everforest, i went with that one ([source](https://github.com/neanias/everforest-nvim)).