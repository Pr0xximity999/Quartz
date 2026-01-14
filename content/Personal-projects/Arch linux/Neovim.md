---
tags:
  - applications/neovim
  - personal-project/arch-linux
  - taal/engels
  - language/english
  - applications/tui
publish: "true"
banner: "[[Vault-data/Banners/field-illustration.jpg]]"
---
Neovim: the scary TUI(Text User Interface) text editor that doesn’t use a mouse. It always seemed interesting to me, though i never had the motivation to fully commit to it.

I installed Neovim using ``sudo pacman -S nvim`` and ran the command `nvim`. Inside, using the command `:Tutor` i started doing the tutorial, which goes over:
- all the basic movement keys like `hjkl` for left, down, up, and right respectively
- saving (writing) a file with `:w` and quitting a file with `:q` (or `:wq` to write-quit, `:q!` to force quit in case there’s unwritten changes)

# Default settings
I want my tabs to be 2 spaces, because the default is really wide. Line numbers are also disabled by default, so i enabled those too.

```lua
vim.o.tabstop = 2 -- A TAB character looks like 4 spaces
vim.o.shiftwidth = 2 -- Number of spaces inserted when indenting
vim.cmd("set number") -- Line numbers
```

# Plugins
>[!important] plugin megathread
>Use [this](https://github.com/rockerBOO/awesome-neovim) website to find a bunch of awesome neovim plugins :3


The reason i chose Neovim over regular ‘ol Vim is because, for starters, Neovim looks better out of the box, but also because it supports a bunch of plugins and themes, all written in lua.

For the plugins i will be using [lazy.nvim](https://lazy.folke.io/).

## Installing lazy.nvim

For the setup you have two options: single file and multi file. I went with multi file since it’s the recommended way.

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
		-- import your plugins
		{ import = "plugins" },
	},
    -- Automatically check for updates
  	checker = { enabled = true }
})
```

This is all you need to get the base of lazy working.  The folder structure for plugins will look something like this:<br>
```
~/.config/nvim
├── lua
│   ├── config
│   │   └── lazy.lua
│   └── plugins
│       ├── plugin1.lua
│       ├── **
│       └── plugin2.lua
└── init.lua
```


Plugins go inside the plugins folder, and you can manage lazy with the command `:Lazy`. 

![[Vault-data/Attachments/Neovim lazy default setup.png]]

Very empty, but it works. I’ll quit by writing `:q`. Let’s install some plugins, starting with a nicer theme. Since my other apps use the everforest theme, i went with that one for this as well([source](https://github.com/neanias/everforest-nvim)).

## Setting up a theme
Inside of `~/.config/nvim/lua/plugins/`, the file `colorscheme.lua`(this name is important) will be added containing the code as mentioned inside the [everforest-nvim](https://github.com/neanias/everforest-nvim) GitHub page.

```lua
return{
    "neanias/everforest-nvim",
	version = false,
	lazy = false,
	priority = 1000, -- make sure to load this before all the other start plugins
        -- Optional; default configuration will be used if setup isn't called.
       	config = function()
        require("everforest").setup({
            -- Your config here
       	})
    end,
    },    
}
```

saving this file using `:w` will automatically update lazy:
```
# Config Change Detected. Reloading...                                           
- **changed**: `everforest-theme.lua`

Press ENTER or type command to continue
```

Adding `vim.cmd("colorscheme everforest")` to the main `lazy.lua` file will enable the colorscheme.
![[Pasted image 20251024233737.png]]

Looking better :3

## Qml language server
Since i work on [[Personal-projects/Arch linux/Quickshell|Quickshell]], it would be nice to have a language server set up. Installing the qml language server and grammar support requires [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file) and [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig). nvim-treesitter is a plugin based on [treesitter](https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file), which is a syntax parser tool (parsing language syntax, basically). nvim-lspconfig is a collections of LSP (Language Server Protocol) server configurations for neovim.

Installation of nvim-treesitter is yet again really simple, create a file in the plugin folder and enter the following code:
```lua
return {
    "nvim-treesitter/nvim-treesitter", 
    branch = 'master', 
    lazy = false, 
    build = ":TSUpdate"
}
```
adding the build property makes sure that all language parsers update whenever treesitter does, as mentioned in their GitHub.

Now that treesitter is installed,  `:TSInstall qmljs` can be ran to install qml grammar support.

nvim-lspconfig is installed by running `git clone https://github.com/neovim/nvim-lspconfig ~/.config/nvim/pack/nvim/start/nvim-lspconfig`.

Finally, `vim.lsp.enable("qmlls")` has to be added to the main `lazy.lua` file to enable the qml language server.

## Code completion
For code completion i will be using [coq_nvim](https://github.com/ms-jpq/coq_nvim) since it’s supposedly extremely fast, which i like.

`:COQdeps` has to be ran after installation to install additional dependencies.

![[Vault-data/Attachments/Neovim autocomplete.png]]

Looking pretty sweet :3 

## Colorizer
A colorizer highlights color values as their respective color. I will be using [nvim-colorizer](https://github.com/catgoose/nvim-colorizer.lua) for this.

![[Pasted image 20251025001813.png]]
Works as expected.

## Similar word highlighter
Other IDEs have this functionality where if you select a piece of text, or a variable, that similar words/variables light up. [interestingwords.nvim](xiyaowong/transparent.nvim) achieves the same.

