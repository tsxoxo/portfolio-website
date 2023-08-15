---
title: Using the Utopia design system
subheading: One workflow among many.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia, figma]
isDraft: true
---

/make these links?: [learning about utopia], to [etc.]
This is a step-by-step guide on how to use Utopia in your project. It aims to help You with learning about Utopia, creating a design with it in Figma, and implementing it with Tailwind CSS.

/even though it's opinionated and based on my limited experience,
I hope this can make working with Utopia easier for newcomers.

## Table of Contents

-   Guide
-   Steps
-   Outro
-   What is Utopia?
-   Resources

## Guide

### Prerequisites

-   For the developing part You should know how to use a code editor and possibly the command line to manage your project. Possible starting point: [Beginner's Guide to Eleventy \[Part II\]](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-partii) on Tatiana Mac's blog.

-   For the designing part You should know the basics of Figma, especially auto-layout. Possible starting point: [Figma's get started area](https://help.figma.com/hc/en-us/categories/360002051613-Get-started).

-   You should know how Utopia works. Possible starting point: one of the resources I list in the [intro to Utopia section](xxx what is utopia).

-   You should have a project with Tailwind CSS set up. Can be a fresh one, can be an existing one you want to give the old redesign.

-   ❤️‍🔥❤️‍🔥❤️‍🔥

NOTE
mb put this at the top and remove the '## guide' parent section altogether

### Steps

Disclaimer: this is one workflow among many.

#### Other ways

[2 other guides](#the-other-guides) helped me come up with this workflow (meaning I stole a lot from them). They focus on parts of the whole while I'm trying to go from start to finish. But that also makes them shorter, which is what You might want.

#### Create a wireframe for `min` or `max`

**The goal: Figure out the size of the the majority of text in your project.** ('body text') /To this end, it would probably help to get a sense of the rest of the project. Here's a rough sequence of steps You might take:

-   focus on either `min` or `max`.

-   Choose a width.

What width should You choose?
-- Whatever is appropiate for your project.
No hard answers here. You're gonna hear this a lot.

I read on [their blog](https://utopia.fyi/blog/designing-a-utopian-layout-grid/): _"(...) it makes sense to design the @min screens as small as is practically possible"_. And that made sense to me.

They go on to explain: basically, 320px is a small yet tested size. For a long time, phones used to be this wide. And y'all were doing _fine_. So the Utopia creators chose this width as a reasonale starting point for a modern design. I take it as a value meaning _somewhere at the smaller end of the viewport spectrum where I can still read longer texts comfortably without getting annoyed_.

For designing this site, I left the defaults -- `min`: 320px, `max`: 1024px. Because I had enough things to worry about.

But it's all about what You want to achieve and who You're designing for.

-   In Figma, create a frame with that width.

Tip: To make a frame with proportions close to an actual screen, You can choose a device from the list that has a width close to your `min` (press `f` in Figma), then scale it proportionally to the right width (hold `shift` while scaling).

-   Design stuff until You get a sense for a workable `font size`.

This is just so You have something to work with. Don't put too much pressure on yourself to 'get it right' at this point. You'll be remaking (or modifying) this wireframe using the Utopia system as You follow this guide. You can change your `font size` at any point.

#### Create a wireframe for the other state

Go through the same steps for the other state - `min` or `max`.

Now, You should have settled on 2 widths and 2 font sizes (for now).

#### Apply a style to your body text

You could create your system using just the Utopia website, but the Figma Utopia plugin makes things easier: it generates styles and components representing all the building blocks of the Utopia design system -- the type scales, the spacing palettes and the grids. You'll see.

I'll assume that You're using the plugin from now on. It'll keep the instructions a little simpler. You can still do everything using the Utopia website, it'll just be more copy and pasting.

-   To get started, You might read the [community page for the plugin](https://www.figma.com/community/plugin/951884648789524000/Utopia-%2F-Fluid-type-%2B-space-calculator) or the dedicated article [Getting started with Utopia Figma plugins](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/) (there are actually 2). If You know your Utopia basics, You might be able to just jump in and follow these instructions.

-   Run the plugin in Figma. It's called 'Utopia / Fluid type + space calculator'.

-   In the UI that pops up, put in your `widths` and your `font sizes`. Don't worry about the `type scales` yet, You'll focus on them in the next section. Click the big button. It would sometimes take like 20 seconds for me before anything happened. Trust the process. A lot of good work is done in silence.

-   Look at the generated frames. If some of it looks blank, try making the grid visible with `shit + g`. Feel free to wrap the bunch in a section and put it somewhere where you can easily peek at it while you're designing. I was peeking pretty often.

-   Look at the generated styles in the right Figma panel (click on the background of the canvas to see them). Apply the appropiate style to the body text in your wireframe. At the time of writing, this is `U/Type/Min/Prose/Step 0`.

Now, whenever you rerun the plugin with a different `font size`, your body text will update automatically!

/Aside 1: The plugin also generates a palette in a bolder font weight. I haven't seen this phenomenon talked about anywhere else in the Utopia ecosystem. But it's there. I took it as an invitation and modified some of the font-weights for my purposes. A system is, like, just the beginning, man.

/Aside 2:
Now here might be a good case to use the new variables feature in Figma. put all of these values there and you dont have to look them up. you could even map min and max to their own modes. could be interesting. i was ready to do that but unfortunately figma restricts free accounts to 1 mode only. I feel this might be a good moment to link to my 'buy me a coffee (or Figma subscription)' thingy. I pledge that if I get 15 bucks, I'll buy a month of Figma and write a guide on doing this with variables.

#### Figure out a `type scale`

As before, this guide will focus on either `min` or `max`.

Especially rough instructions More of a set of hints. Then my story to illustrate.

-   Make sure You have a different type of text in your wireframe apart from the body text -- maybe some headings or some smaller text like an image caption. You should have a few texts of different sizes to see how a type scale will harmonize across your design.

-   Apply Utopia styles to every piece of text in your design. You may not know what style to assign to which text. That's ok. Take some educated guesses.

-   Now you should have at least 2 Utopian text styles living in your wireframe. Try changing the font family of all of these in one swoop by running [the 'Utopia / Batch update text styles' plugin](https://www.figma.com/community/plugin/979005485047252094/Utopia-%2F-Batch-update-text-styles). Even if You undo this, it's good that You know that this is easy to do.

-   Run the Utopia plugin again, just with a different type scale. The text in your wireframe should update. Adjust: the scale ratio, the number of steps in the scale, the font weight, etc. Rinse and repeat until You find a scale that _fits your needs_.

-   Do the same thing for the other state. Try using a sharper scale for `max` (higher ratio) and a softer one for `min` (lower ratio). A high ratio gives thiccc headings.

I felt this part of the process was especially iterative (messy) because there are so many moving parts. It's a whole scale of things, after all. Many moving parts can overwhelm my brain, so I gave it a hand and tried to simplify the process:

While designing my landing page, I got obsessed with my big chunky hero-heading because who doesn't. I wanted it to stay on a single line. So I made it as big as possible and paid attention to the font size.

And I decided to build my type scale around this piece of text.

That's the simplification. This decision gave me something to go on: I knew I wanted a scale with a font size pretty close to what I had given my hero-heading. And since this was to be the biggest heading on the page, I knew this size had to be several steps up the ladder, since I needed room for my smaller headings.

So I knew what to look for in a scale and wasn't just blindly dating one after the other. /(It seems so much of design is about giving yourself limitations to make the wild chaos of life barely managable.)

It was still a lot of messing around. How many heading-hierarchies do I need for this site? Do I maybe wanna skip a scale-step between adjacent headings (so that my `h1` sticks out even more from my `h2s`, for example). I want to live boldly, so how bold do I want my headings to be?

I settled these questions for myself. I went minimal, my scale had 3 steps, I was content. Then I added a blog to my site, which means more headings, which means my scale no longer accomodates my content. Every day, I redesign. Or, as they say:

> ["A digital product is never finished"](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)

#### Figure out a spacing palette

/mb first instructions, then resources? mb give steps after all? mb structure this more: there are 3 ways i see to work with spacing...
/ I think a step or two should be good

Ahh, space. That empty thing. Where we go to scream and nobody can hear us. Where nuts and bolts go to party. All the little nooks and crannies. The dusty corners of our hearts and minds and behind that one door. The cracks where the light shines in. etc. etc.

There are no steps here, since I didn't mess around too much with this. I went with the default spacing palette and added some custom space pairs, that's it. For this website, it worked alright. A decent balance between constraint and freedom.

Instead of instructions, here's **3 ways to use a Utopia spacing palette in Figma:**

With all of these, consider using auto-layout whenever You can. For me, this helped keep things simple: everything is in the gaps and paddings. No pesky margins whatsoever. And it's straightforward to implement with grid and flexbox.

A. Just do it by hand

You might be asking yourself _"do I really need to remember the spacing values and type them by hand at every single decision?"_. It might be easier than You think. /You can always peek at Your master-board.

This is how me and my two brain cells did it. It wasn't too bad. A lot of peeking at the master-board, but that's a small price to pay to be _fluid_.

B. Use variables

Figma let's You set up a spacing palette with variables pretty easily now:

![A screenshot of how You might set up your variables](/assets/blog/pictures/figma-variables-demo.png)

The upside is You can choose your spacing from a menu and don't have to peek so much.

The downside is I don't see how to make these variables sync when You regenerate your palette...

**But**... there might be a way... Follow me into this dark alley, friend.

C. Use the spacing-components from the Utopia plugin

See these little squares on the spacing-palette-frames that Utopia generated? You can literally just [drag them into your design](https://utopia.fyi/images/utopia-plugin-10.jpg). And when You're sick of them, just close your eyes, press `shift + g` 3 times and they'll go away. How does that work, You ask? _They're actually just, like, pieces of the grid, man!_ Clever, clever, these Utopia designers. Now You select the variant You want from a drop-down menu and there's your spacing: 2xs, m, 3xl -- all your favourite t-shirt sizes!

Just set the numbers in your auto-layouts to 0 and put squares everywhere: in your gaps, your paddings, your margins, if You need them. Put one under your sofa and forgot about it for like 7 years until it was time to move? No problem, it'll stay there, patiently waiting until it's time. Its time...

If You want to work on a custom spacing palette, You might do it this way. The spacing in your design will update each time you rerun the plugin and change your palette.

The squares are cursed with a terrible curse tho.

But they come with a frozen yoghurt! I call it _"froyo"_!

#### Decide if You want to use a baseline grid

It can make You feel extra special. The Utopia plugin generates one for You, so it's not too hard to get started. /It's up to You how far You want to take it - use it as a guideline for your design, put another simpler grid on top of that (my option)

If You're out, move on to the next step. If yass -- I recommend You read the official intro [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/). There's diagrams and a step-by-step guide and You'll get to know some of the messy decisions that have to be made if You're going down this path. After that, rerun the Figma plugin and adjust the grid _to your needs_&trade;.

#### Remake your design the Utopia way

aka bringing it all together

Since I left some room for experimentation during the previous steps (aka the instructions were vague), You might have already redesigned your wireframes using the Utopia system. If so, congratulations, You're done with the hard part and can [go to the next step](xxx) to start implementing!

Otherwise, if You want to start fresh:

-   Generate a system using the Utopia plugin. By now You should have some ideas for all the parameters.

-   Create a fresh set of frames for `min` and `max` to house your upcoming redesign.

If You're not using a grid, do exactly what You did when You created your frames in the beginning. You can move on to the next step, run along, summer child!

If You _are_ using a grid, the issue is now how to fit the grid into the frame -- do you stretch one or the other, or leave it kind of overlapping or what? There is a simple solution proposed in the grid guide mentioned earlier: make your `min` frame the size of your `min` grid. It won't be exactly your official `min` width, but it should be close to it. Nobody will ever know. Simple but devious. buaha!

-   Design your project using the generated system. You know how to handle text, you have 3 ways of handling spacing. You have a grid or you don't. Go out there, make some mistakes and enjoy that sweet consistency!

#### Implement

/Aside
There are plugins to help with this, but I won't be using them here. See [Utopia-Tailwind integrations](xxx resources) for more info.

-   Get those CSS custom properties out of your system! (and into your config.) Go to the Utopia website, plug in the values You used with the Figma plugin (they're on the first generated frame) and copy the CSS output into your project.

**Where to put these variables?**

You have options. Chris Penrod does it one way, see [his article](xxx resources). I go an extra step and put my variables into a `base.css` file. Then I reference them in `tailwind.config.cjs`. My reason for doing it extra like this is that I can easily copy and paste Utopia's output wholesale into `base.css` whenever I iterate (aka change my mind) -- which, I know I will.

This is what it looks like:

```css
/* base.css
-- many values ommitted for brevity */

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	/* type */
	--step--1: clamp(0.75rem, calc(0.65rem + 0.52vw), 1.06rem);
	--step-0: clamp(1rem, calc(0.83rem + 0.83vw), 1.5rem);

	/* spacing */
	--space-3xs: clamp(0.25rem, calc(0.21rem + 0.21vw), 0.38rem);
	--space-2xs: clamp(0.5rem, calc(0.42rem + 0.42vw), 0.75rem);

	/* spacing one-up pairs */
	--space-3xs-2xs: clamp(0.25rem, calc(0.08rem + 0.83vw), 0.75rem);
	--space-2xs-xs: clamp(0.5rem, calc(0.29rem + 1.04vw), 1.13rem);

	/* spacing custom pairs */
	--space-s-l: clamp(1rem, calc(0.33rem + 3.33vw), 3rem);
	--space-xl-m: clamp(2.25rem, calc(3.25rem + -1.25vw), 3rem);
}
```

```js
/* tailwind.config.cjs 
-- many values ommitted for brevity*/

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontSize: {
				'fl-sm': 'var(--step--1)',
				'fl-base': 'var(--step-0)'
			},
			spacing: {
				'space-fl-3xs': 'var(--space-3xs)',
				'space-fl-2xs': 'var(--space-2xs)'
			}
		}
	}
}
```

/ improve code:

-   change space-fl to simply fl?
-   unify lg - l ?

aside: The `fl` stands for `fluid`, I took this from Chris.

With this setup, new classes should show up in your IDE's autocomplete: try typing `p-spa` somewhere as a class and pressing your `autocomplete` shortcut (I have it on `ctrl + space` in VSCode). You should see a list of all your fluid padding steps. Same for any other spacing utility like `gap`, `spacing` and `margin`. Same for font sizes.

Now, if You're starting a fresh project, You are ready to code it with entirely fluid spacing and typography!

#### If you're redesigning an existing project

-   replace static classes with fluid ones

I wrote a regex for finding many (but surely not all) of the standard Tailwind spacing classes, mostly to keep my regex muscles from atrophying:

`[\s"']([mp]|gap|space)-?\w?-\d`

Without this little formula, I would have to look for each padding-variation (pt, pb, p-, px-, py) and then for each gap variation, etc.

To use this regex, paste it into the 'global search' in your code editor (the one where you search through all your files at once -- it's `cmd + shift + f` in VSCode). For it to work, You might have to turn on regex in your search (in VSCode there's a little button that says `.*` on the right of the searchbar).

## WTF

### Why such a guide

I've used Utopia to redesign this website and ran into enough roadblocks to make me want to save other people some of these frustrations.

It took me several hours to get a grip on it: learning the concepts and then figuring out a way how to actually use them in my project. (Let's not mention the initial wild-flailing-phase where I kept generating type scales without actually knowing what `font size` meant. tfw when I try to brute force my way into understanding because I'm in such a rush, I _don't have time to understand_.)

Once I went through the resources, understood the concepts, got to know the Figma plugins and experimented with a few implementations -- once I did all that, it wasn't too hard.-- "Now that I'm here and I've built this rocket, it doesn't seem like rocket science!"

I kind of yearned for a practical start-to-finish guide like this when I was getting into Utopia. If this saves someone a bit of time, even if it's just by bringing some helpful Utopia resources together on a single page, I would be pretty happy.

/cut first sentence?
I would love if this makes or helps someone use a design system in their project. I know it's a lofty goal, but for me it can help a lot if I see that someone else has done it already. Something in me can go from _very skeptical_ to _aaaah, so this is possible! let's do it, then_ just by seeing proof that it can be done. I'm all for hacking and experimentation, but being a pioneer can cost you some grey hairs, or more. Life on the bleeding edge can be stressful, I know from trying to use one alpha version too many.

/do I?
I wanna lower the barrier for getting into design systems. So if I and my two brain cells can do it, so can You.

/just point to resource section?
If You're asking yourself what the big deal is about designing with a system, the folks at Tailwind have written about it in their book 'Refactoring UI' (better read than the title, I promise). Also see the resource section for more introductions / one or two Utopia posts / posts on the creators' blogs

This was my moment of doubt writing this article: I kind of fear that the creators intentionally didn't give basic how-to instructions. Because they're experienced designers and they know things kind of lose their purpose if they're simplified in this form. Utopia isn't a step-by-step method. It's a set of tools that can be used in a lot of different ways, maybe even in UIs outside of browsers. Designing is a messy business. Let's keep it that way 🫀

So this text aims to fill this gap: let you see what one person did with Utopia after learning the basics.

## Outro

Hope you enjoyed, learned, or killed some time!

### Disclaimers and goodbye

This is one workflow of many. It might be embarrassingly simplistic to some. It got the job done for me.

I'm on Twitter (xxx twitter). Let me know your utopian workflows. Give some feedback. Say hi, for goodness' sake, don't be shy! And especially, let me know if you got stuck, peeved or if you want more!

---

Thank You, my wonderful editors!

Thank You, Christian Penrod. You helped me realize that this is possible and without too much hassle.

Thank You, Utopia creators for building and polishing this awesome tool and making it available for free!

Thank You, all the folks before that figured out the math to the responsive design problem and cared enough to keep implementing this by hand!

---

[x] refer to myself as 'this author'

## What is Utopia?

[Utopia](https://utopia.fyi/) is a tool to help with [responsive design](xxx). On the website, You plug in certain parameters and let it generate CSS that makes your text and spacings adjust to the user's viewport size.

Instead of media queries, it uses a 'fluid' approach to a problem we web designers face every day (every day I live in a society).

To me, it scratched that consistency itch that only a design system can scratch. It took some time in the beginning, but it's pretty satisfying to see this website be all responsive and shit.

### Where to start

I found these resources helpful in explaining the general concept:

-   🤏 Play with an [interactive demo](https://utopia.fyi/) to get a sense of the result.
-   👁👁 Watch an [intro video](https://www.youtube.com/watch?v=DDuGtN-GakA) by the creators (18 minutes).
-   📜, 👁👁 Read an [intro article](https://utopia.fyi/blog/designing-with-fluid-type-scales/) and look at a diagram illustrating the idea.
-   📜 Read a [longer intro article](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) that also explains the context of the larger problem.
-   🤏, 📜, 👁👁 Play with the official [Figma starter project](https://www.figma.com/community/file/1122903924123950023), read the succinct intro on the 'readme' page, and look at multiple illustrations.

### In a nutshell

Quotes from official resources showing the essence of the Utopia approach:

> 1. Define a type scale for a small screen
> 2. Define a type scale for a large screen
> 3. Tell the browser to interpolate between the two scales, based on the current viewport width

<cite>[source](https://utopia.fyi/blog/designing-with-fluid-type-scales/)</cite>

> I designed these [min and max], maths designed this [everything in between]

<cite>source same as above</cite>

> (...) we only need to visualise the smallest and largest states, which we call @min and @max. Everything in between will be displayed according to the rules we set.

<cite>[source](https://utopia.fyi/blog/designing-a-utopian-layout-grid/)</cite>

> (...) fluidly interpolating between two modular scales, one for smaller screens, and one for larger screens

<cite>[source](https://utopia.fyi/blog/css-modular-scales/)</cite>

### Dictionary of the Utopia UI

These are the terms used in the UI of the Utopia website.

**`min`**\
The smallest state You feel like visualising in your design. The `font size` will never go smaller as the one for `min`.

**`max`**\
The largest state You feel like visualising in your design. The `font size` will never go bigger as the one for `max`.

**`width`**\
The `min` and `max` states are defined in terms of their widths (so you can almost think of them as viewports).

**`font size`**\
The size of the majority of text in your project (sometimes referred to as 'body text'). Serves as the base step for your `type scale`. Choosing the `font size` is often done early in the design process.

**`type scale`**\
The ratio used to create a [modular type scale](https://utopia.fyi/blog/css-modular-scales), with `font size` being the base step. This can sound exotic, but it's really just a way to let math help You come up with a palette of font sizes. (So You don't have to ask yourself: _"should my h1 be 48px or 49px?"_)

## Resources

### The other guides

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod also shows a way to implement the Utopia system in Tailwind. The way I do it in this guide builds on his approach. His guide is much less verbose than what You're reading here. Much less verbose.

-   [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/) by James Gilyead from the Utopia team goes only through part of the process, but that was already immensely helpful to me. Even more important, it acknowledges that the design process is messy and full of questions that only You can answer.

### Utopia stuff

For introductory resources about Utopia, see the above section [What is Utopia?](xxx)

#### Utopia-Tailwind integrations

I found two plugins that were made to help with integrating Utopia into Tailwind. Neither worked out-of-the-box for me and I wasn't in the mood for hacking.

-   [cwsdigital/tailwind-utopia](https://github.com/cwsdigital/tailwind-utopia)
-   [domchristie/tailwind-utopia](https://github.com/domchristie/tailwind-utopia). This one's a fork of the `cwsdigital` one but has a different API.

### Fluid design more generally

-   See [TailwindCSS: Fluid typography with CSS Clamp](https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp#home) if You want to skip Utopia and do more of the heavy lifting yourself

-   In [Linearly Scale font-size with CSS clamp() Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) Pedro Rodriguez goes deep into `clamp` and interpolation and brings you along for the ride.

### Limitations

-   In [Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html) Adrian Roselli warns against using `clamp` because of issues with zooming.

-   In [Fluid Type](https://elisehe.in/2021/03/13/fluid-type) Elise Hein talks about some fundamental questions in a very approachable way. Why do we care about fluid type in the first place? And is clamp really so great?

## META

NEXT STEPS:

-   [] revise '# wtf'
-   decide on order
-   revise intro
-   revise outro
-   put on google docs

-   share with thays
-   share with yemi

### todo

-   [x] skim utopia blog -- steal phrasing to explain, collect links to specific topics, take general notes
-   [x] work on intro: more personable, move what will i learn before wtf?
-   [x] fix: extra space before links wtf
-   [x] write some steps
-   [x] look at review and depen in notion
-   [x] mention official demo gif
-   [x] make links open in new tab -- no because let the user decide how they open links
-   [x] revise: shorten utopia-basics section; rewrite/break up 'big idea'
-   [x] fix: make it so I can have spaces between list items in markdown without them going haywire in html
-   [x] test this: \* is this a possible alternative? -- instead of using the utopia website to generate type scales and manually copy-pasting them into figma, use the utopia figma plugin?
-   [x] revise '# steps'
-   [x] read through revised steps in order

**formatting**

-   set apart steps and musings/my stories
    -   different font styles
    -   dividing lines
    -   backgrounds / boxes
    -   :::asides
    -   foldable content
-   give 'skip to the steps'-link extra special styling
-   fix step order

_... formatting that maybe requires dealing with markdown plugins_

-   wrap each chapter in a `\<section\>`
-   make 'dictionary of utopia UI' a dd-dt list?
-   improve blockquote - cite, e.g. give blockquote the attribute
-   make directives like `tip` to break up the flow of the text

**UX**

-   try and be rigorous about not repeating links, except when linking to different sections of the same document
-   make sure link texts stay consistent and clear. for inspiration, see the section [Structure link text](https://developers.google.com/style/link-text#structure-link-text) in the Google Developers Style Guide

**structure**

-   i got a thing going in the spacing section: 1. intro 2. official resources 3. talk about the thing -- maybe update the other section to point to official resources as well? then in the Utopia intro i could say 'you can look at this and this to get a general idea. Also, I'll be pointing out relevant resources at the start of each section' -- hmm, do I like this idea?

**IDEAS**

-   add content: make own demo gif?
-   IDEA: make each step of the guide formatted like _succinct instructions (1 paragraph) --- detailed explanation and musings_. this could be visually reinforced by making the instructions stick out more than the musings (e.g. higher contrast), or even by hiding the explanation in a foldable element (use `<dt>`?)
-   IDEA: broaden scope -- talk about design systems; about different approaches to responsive design (or link to resources)
-   IDEA: separate steps from my specific case
-   💡 Split this into two articles: a pure guide with resources and then musings about onboarding. get done this week.
