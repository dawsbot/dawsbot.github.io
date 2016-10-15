TODO:
Word wrap for markdown
Spell check for markdown

# Become a Faster Developer Pt. 1

> Part 1: Terminal Aliases

So you code. Or maybe you want to code. Either way, interacting with your computer quickly is an important part.
If you are axing your time away with inefficiency, you won't have as much time to focus on what matters.

## The terminal

It's a scary place for some - a simple and friendly UI for others.

IMAGE OF TERMINAL HERE

The terminal above it outfitted quite basically using iTerm2 on the mac and oh-my-zsh.
It's a setup covered in [multiple](TODO: LINK HERE) guides, so I won't explain that.

### Aliases

When typing in your terminal, you enter a ton of different commands.
And these commands can be shortened using aliases.
Think of aliases like functions - they are shorthand for far more functionality.

So for instance one of my favorite aliases is `ni`. What does `ni` do? It's `npm install `

I work with node modules nearly all day, so I've optimized for that in my aliases.

```
ni -> npm install
nis -> npm install --save
nid -> npm install --save-dev
nig -> npm install --global
```

But then sometimes you need to delete a module:

```
nuis -> npm uninstall --save
nuid -> npm uninstall --save-dev
nuig -> npm uninstall --global
```

These are just ideas for you though, perhaps you do server admin often and you need to `cd` into `/var/www`.

Why not have an alias for that?

`cds` -> `cd /var/www/`

From anyways in the file sy
