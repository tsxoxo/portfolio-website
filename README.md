This is the repo for my portolfio site

## Acknowledgements

Based on [this starter](https://github.com/veranikabarel/astro-portfolio). Thank You, @veranikabarel!

## TODO

### [] Make it deploy after upgrading to Astro 5

[x] Look at last failed build and start from there

[x] Fix i18n

[] Fix sharp

[] Fix Tailwind

#### [] Migrate properly from Tailwind 3 to 4

[] Migrate from Javascript config
[] make theme work
[] something something @apply

#### [x] migrate to new i18n system

[x] put translations in new file

[x] update all relevant sites

### Meta

[] Simplify front matter -- automate slug generation

[] Look at ESLint. Research style guides. Start [here](<[url](https://www.youtube.com/watch?v=Cd-gBxzcsdA)>)

[] Speed up build time

-- [x] Use precompiled Python: mise WARN no precompiled python found for 3.13.2, force mise to use a precompiled version with `mise settings set python.compile false`

-- [] Try to understand what Python does in the building process

### Fix what's there

[] Correct Utopia + Tailwind post so that it works with Tailwind 4

### Write post about 7GUIs cell project

Themes: Testing-what test make sense; how do you model an app like this with xstate; why do these challenges have so few states?

[x] Jot down thoughts round 1

[] Actually look at Cells and write down more ideas

[] Write first draft

### Improve site

[] Style: <Card> for Blogpost. Include name of series. Possibly add 'type' field ['devlog', 'tutorial']

[] Add play section

[] Redesign first glimpse: probably graphic instead of photo

[] Redesign projects: make them into case studies and describe the process more

#### i18n

[] is this correct? cuz it's not 'en' in dev mode: const [,lang] = URL.PATHNAME.SPLIT('/')

[] Add German translations and language selector

[] Make things consistent: e.g. title is hard-coded in index.astro instead of being fetched from translations

[] follow Astro guide till the end

[] adjust site based on user's preferred locale

[] I removed <HeadHrefLangs /> -- should I readd it or something like it?
