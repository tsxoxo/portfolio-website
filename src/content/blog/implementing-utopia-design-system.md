---
title: Using Utopia
subheading: Ideas for a workflow.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia, figma]
isDraft: true
---

This is a guide to help You use the Utopia design system/approach in your project. You're going to learn a way or two of how to work with it in Figma and a simple but flexible method for implementing it in Tailwind CSS.

Welcome designers!, welcome coders!, welcome the folks from the creamy center of that Venn diagram!

**Choose your adventure**

If You're new to Utopia or want a refresher, start at [Ways into Utopia](#ways-into-utopia).

If You're like _Is a step-by-step guide even appropiate for a messy, iterative and context-specific process such as designing?_, then congrats -- You got me. I mention this tension in [Why such a guide](#why-such-a-guide).

If You're ready to go, just keep scrolling 😎.

## Table of Contents

-   Prerequisites
-   Guide
-   Ways into Utopia
-       Why this guide
-   Outro
-   Resources

## Prerequisites

Here's what this guide assumes about You:

-   You know how Utopia works.

-   You know the basics of Figma, including auto-layout.
    Learning resource: [Figma's get started area](https://help.figma.com/hc/en-us/categories/360002051613-Get-started).

-   You know how to use a code editor and the command line to manage your project.
    Learning resource: The [Beginner's Guide to Eleventy \[Part II\]](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-partii) on Tatiana Mac's blog gives a beginner-friendly intro to these things.

-   You have a project with Tailwind CSS set up -- a fresh one to start with or an existing one you want to redesign with Utopia.
    Learning resource: [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/guides/astro)

-   ❤️‍🔥❤️‍🔥❤️‍🔥

## Guide

Most of the following steps are rough guideposts. Iteration is implied everywhere. Adjust to your needs.

For simplicity, the guide takes several shortcuts:

-   It talks about only one of the two states -- `min`. You might design `max` after that, in parallel, or before that.
-   It gives instructions assuming You want to start on a fresh frame in Figma. If You have an existing design, You might be able to get away with Utopia-fying it by applying new styles, etc.-- I trust that if You're at that level of consideration, You can figure out the rest, too.

Aside:
If You're just interested in the topics of _baseline grid_ or _implementation_ check out these [2 shorter guides](#the-other-guides).

### Create a wireframe for `min` in Figma

Your first goal is to **figure out the size of the the majority of text in your project.** This is called 'body text' in this guide.

-   Choose a width for your `min` state. To help You decide, see the section "1. Choose @min viewport width" in [Designing a utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/).

For designing this site, I left the defaults -- `min`: 320px, `max`: 1024px. Because I had enough things to worry about.

-   In Figma, create a frame with that width.

Tip: To make a frame with proportions close to an actual screen, You can choose a device from the list that has a width close to your `min` (press `f` in Figma), then scale it proportionally to the right width (hold `shift` while scaling).

-   Design stuff until You get a sense for a workable `font size`.

Workable -- not perfect. Don't put too much pressure on yourself to 'get it right' at this point, whatever that means in design. You'll be remaking (or modifying) this wireframe using the Utopia system as You follow this guide. You can change your `font size` at any point.

### Create a wireframe for the other state

Go through the same steps for the other state - `min` or `max`.

Now, You should have settled on 2 widths and 2 font sizes (for now).

/
For simplicity, I will be only talking about 'min`from here on? 
a lot of the steps only talk about designing your`min` state. You should re

### Apply a style to your body text

You could create your system using just the Utopia website, but the Figma Utopia plugin makes things easier: it generates styles and components representing all the building blocks of the Utopia design system -- the type scales, the spacing palettes and the grids. You'll see.

I'll assume that You're using the plugin from now on. It'll keep the instructions a little simpler. You can still do everything using just the Utopia website tho -- it'll just be more copy and pasting.

-   You might read the [community page for the plugin](https://www.figma.com/community/plugin/951884648789524000/Utopia-%2F-Fluid-type-%2B-space-calculator) or the dedicated article [Getting started with Utopia Figma plugins](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/) (there are actually 2). If You know your Utopia basics, You might be able to just jump in and follow these instructions.

-   Run the plugin in Figma. It's called 'Utopia / Fluid type + space calculator'.

-   In the UI that pops up, put in your `widths` and your `font sizes`. Don't worry about the `type scales` yet, You'll focus on them in the next section. Click the big button. It would sometimes take like 20 seconds for me before anything happened. Trust the process. A lot of good work is done in silence.

-   Look at the generated frames. If some of it looks blank, try making the grid visible with `shift + g`.

-   Look at the generated styles in the right Figma panel (click on the background of the canvas to see them). Apply the appropiate style to the body text in your wireframe. At the time of writing, this is `U/Type/Min/Prose/Step 0`.

Now, whenever you rerun the plugin with a different `font size`, your body text will update automatically!

Aside: The plugin also generates a palette in a bolder font weight. I haven't seen this phenomenon talked about anywhere else in the Utopia ecosystem. But it's there. I took it as an invitation and modified some of the font-weights for my purposes. A system is, like, just the beginning, man.

### Figure out a `type scale`

As before, start by focusing on either `min` or `max`.

-   Add a different type of text in your wireframe -- something other than the body text. Maybe some headings or some smaller text like an image caption. The point is to have texts of different sizes to see how a type scale will fit into your design.

-   Apply Utopia styles to every piece of text in your design. You may not know what style to assign to which text. That's ok. Take some educated guesses and read on.

-   You should have at least 2 Utopian text styles living in your wireframe. Try changing the font family of all of these in one swoop by running [the 'Utopia / Batch update text styles' plugin](https://www.figma.com/community/plugin/979005485047252094/Utopia-%2F-Batch-update-text-styles). You can also easily undo this. It's good that You know that this is an easy thing to do.

-   Run the Utopia system-generator-plugin again, just with a different type scale. The text in your wireframe should update. Keep adjusting the scale ratio, the number of steps in the scale, the font weight, etc, and rerunning the plugin until You find a scale that _fits your needs_.

-   Do the same thing for the other state. Try using a sharper scale for `max` (higher ratio) and a softer one for `min` (lower ratio).

---

I felt this part of the process was especially iterative (messy) because there are so many moving parts. It's a whole scale of things, after all. Many moving parts can overwhelm my brain, so here's how I tried to simplify the process:

While designing my landing page, I got obsessed with my big chunky hero-heading because who doesn't. I wanted it to stay on a single line. So I made it as big as possible and paid attention to the font size.

And I decided to build my type scale around this piece of text.

That's the simplification. This decision gave me something to go on: I knew I wanted a scale with a font size pretty close to what I had given my hero-heading. And since this was to be the biggest heading on the page, I knew this size had to be several steps up the ladder, since I needed room for my smaller headings.

So I knew what to look for in a scale and wasn't just blindly dating one after the other. (It seems so much of design is about giving yourself limitations to make the wild chaos of life barely managable.)

/I still had a lot of questions
It was still a lot of messing around. How many heading-hierarchies do I need for this site? Do I maybe wanna skip a scale-step between adjacent headings (so that my `h1` sticks out even more from my `h2s`, for example)? I want to live boldly, so how bold do I want my headings to be?

I settled these questions for myself. I went minimal, my scale had 3 steps, I was content... Then I added a blog to my site, which means more headings, which means my scale no longer accomodates my content.

Every day, I redesign. Or, as they say:

> ["A digital product is never finished"](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)

### 3 ways to use a Utopia spacing palette in Figma

Aside:
There are no instructions here, since I didn't mess around too much with this. I went with the default spacing palette and added some custom space pairs, that's it. For this website, it worked alright. A decent balance between constraint and freedom.

With all of these, consider using auto-layout whenever You can. For me, this helped keep things simple: everything is in the gaps and paddings. No pesky margins whatsoever. And it's straightforward to implement with grid and flexbox.

A. Just do it by hand

You might be asking yourself _"do I really need to remember the spacing values and type them by hand at every single decision?"_.

This is how me and my two brain cells did it. It wasn't too bad. A lot of peeking at the master-board, but that's a small price to pay to be _fluid_, man.

B. Use variables

Figma let's You set up a spacing palette with variables pretty easily now:

![A screenshot of how You might set up your variables](/assets/blog/pictures/figma-variables-demo.png)

The upside is You can choose your spacing from a menu and don't have to peek so much.

The downside is I don't see how to make these variables update when You regenerate your palette...

**But**... there might be a way... Follow me into this dark alley, friend.

C. Use the spacing components from the Utopia plugin

See these little squares on the spacing-palette-frames that Utopia generated? Why not just literally [drag them into your design](https://utopia.fyi/images/utopia-plugin-10.jpg)? And when You're sick of them, just close your eyes, press `shift + g` 3 times and they'll go away. How does that work, You ask? _They're just, like, pieces of the grid, man!_ Clever, clever, these Utopia designers. Now You select the variant You want from a drop-down menu and there's your spacing: 2xs, m, 3xl -- all your favourite t-shirt sizes!

Just set the numbers in your auto-layouts to 0 and put squares everywhere: in your gaps, your paddings, your margins, if You need them. Put one under your sofa and forgot about it for like 7 years until it was time to move? No problem, it'll stay there, patiently waiting until it's time. _Its_ time...

If You want to work on a custom spacing palette, You might do it this way. The spacing in your design will update each time you rerun the plugin with different parameters.

The squares are cursed with a terrible curse tho.

But they come with a frozen yoghurt! I call it _"froyo"_!

### Decide if You want to use a baseline grid

A baseline grid can make You feel extra special ✨. Or, you know, help You design or whatever.

There are lots of ways to use a baseline grid. The Utopia plugin generates one for You, so it's not too hard to get started.

If You're out, move on to the next step.

If yass -- I recommend You read the official intro [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/). There's diagrams and a step-by-step guide and You'll get to know some of the messy decisions that have to be made if You're going down this path. After that, rerun the Figma plugin and adjust the grid _to your needs_&trade;.

### Remake your design the Utopia way

aka bringing it all together.

Since I left some room for experimentation during the previous steps (aka the instructions were vague), You might have already redesigned your wireframes using the Utopia system. If so, congratulations, You're done with the hard part and can go to the next step to start implementing!

Otherwise:

-   Generate a system using the Utopia plugin. By now You should have some ideas for all the parameters.

-   Create a fresh set of frames for `min` and `max` to house your upcoming redesign.

If You're not using a grid, do exactly what You did when You created your frames in the beginning. You can move on to the next step -- run along, summer child!

If You _are_ using a grid, the issue is now how to fit the grid into the frame -- do you stretch one or the other, or leave it kind of overlapping or what? There is a simple solution proposed in the grid guide mentioned earlier: make your `min` frame the size of the generated `min` grid. It won't be exactly your official `min` width, but it should be close to it. Nobody will ever know. buaha!

-   Design your project using the generated system. You know how to handle text. You know 3 ways of handling spacing. You are at peace with the grid. Go out there, make some mistakes and enjoy that sweet consistency!

### Implement

Aside:
There are plugins to help with this, but I won't be using them here. See [Utopia-Tailwind integrations](#utopia-tailwind-integrations) for more info.

-   Get those CSS custom properties out of your system! (and into your config.) Go to the Utopia website, plug in the values You used with the Figma plugin (they're on the first generated frame) and copy the CSS output into your project.

**Where to put these CSS variables?**

You have options.

A. You can sort of ignore the variables and just copy their values (e.g. just the raw `clamp()` function) into your tailwind config. [Chris Penrod does it this way](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/).

B. I go an extra step and first put all the variables into a `base.css` file. Then I reference them in `tailwind.config.cjs`. My reason for doing it _extra_ like this is that I can easily copy and paste Utopia's output wholesale into `base.css` whenever I iterate (aka change my mind) -- which, I know I will.

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

Aside: The `fl` stands for `fluid`, I took this from Chris.

With this setup, some new classes should show up in your IDE's autocomplete: type `p-spa` somewhere as a CSS class and press your `autocomplete` shortcut (I have it on `ctrl + space` in VSCode). You should see a list of all your fluid padding steps. Same for any other Tailwind spacing utility like `gap`, `spacing` and `margin`. Same for text sizes.

Now, if You're starting a fresh project, You are ready to code it with entirely fluid spacing and typography!

### If You're redesigning an existing project

-   Replace static classes with fluid ones.

I wrote a regex for finding many (but surely not all) of the standard Tailwind spacing classes, mostly to keep my regex muscles from atrophying:

`[\s"']([mp]|gap|space)-?\w?-\d`

Without this little formula, I would have had to search for each padding-variation (pt, pb, p-, px-, py) and then for each gap variation, etc.

To use this regex, paste it into the 'global search' in your code editor (the one where you search through all your files at once -- it's `cmd + shift + f` in VSCode). For it to work, You might have to turn on regex in your search (in VSCode there's a little button that says `.*` on the right of the searchbar).

Now just open Figma on one side and your favourite code editor on the other and go to town!

..._Fluid town_

## Ways into Utopia

[Utopia](https://utopia.fyi/) is a tool to help with [responsive design](xxx). On the website, You plug in certain parameters and let it generate CSS that makes your text and spacings adjust to the user's viewport size.

Instead of media queries, it uses a 'fluid' approach to a problem we web designers face every day (every day I live in a society).

To me, it scratched that consistency itch that only a design system can scratch. It took some time in the beginning, but it's pretty satisfying to see this website be all responsive and shit.

### Where to start

I recommend one of these resources to get a hang of the general concept:

-   🤏 Play with an [interactive demo](https://utopia.fyi/) to get a sense of the result.
-   👁 Watch an [intro video](https://www.youtube.com/watch?v=DDuGtN-GakA) by the creators (18 minutes).
-   📜, 👁 Read an [intro article](https://utopia.fyi/blog/designing-with-fluid-type-scales/) and look at a diagram illustrating the idea.
-   📜 Read a [longer intro article](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) that also explains the context of the larger problem.
-   🤏, 📜, 👁 Play with the official [Figma starter project](https://www.figma.com/community/file/1122903924123950023), read the succinct intro on the 'readme' page, and look at multiple illustrations.

### In a nutshell

Because it can help me remember when I boil it down to the essence:

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

These are the terms used in the UI of the Utopia website at the time of writing:

**`min`**\
The smallest state/viewport You feel like visualising in your design. The `font size` will never go smaller as the one for `min`.

**`max`**\
The largest state/viewport You feel like visualising in your design. The `font size` will never go bigger as the one for `max`.

**`width`**\
The `min` and `max` states are defined in terms of their widths.

**`font size`**\
The size of the majority of text in your project (called 'body text' in this guide). Serves as the base step for your `type scale`. Choosing the `font size` is often done early in the design process.

**`type scale`**\
The ratio used to create a [modular type scale](https://utopia.fyi/blog/css-modular-scales), with `font size` being the base step. This can sound exotic, but it's really just a way to let math help You come up with a palette of font sizes. (So You don't have to ask yourself: _"should my h1 be 48px or 49px?"_)

## Why this guide

I yearned for a practical guide like this when I was getting into Utopia.

It took some flailing and delving through quite a few resources to figure out my way around it. Now that I've hobbled through my first round, I want to pass on something of that experience.

This was my moment of doubt writing this article: I kind of fear that the creators intentionally didn't give this sort of basic how-to instructions. I looked them up, they're experienced designers. I can imagine once you've seen the kinds of 'design processes' they've seen, you accept that some things can't just be simplified into an A-Z guideline. Multiple stakeholders, rounds of iteration, the style of the project -- there are way too many moving parts for anybody to encapsulate into a step-by-step method like that. Utopia seems more like a set of tools that you can use whenever you run into the particular problem of responsiveness, maybe even in UIs outside of browsers.

Let's keep design messy 🫀

And yet... here's also a rough roadmap. Maybe not to show You _the way_, but just to show that there is one here!

On that note -- this section got so big, I'm making it into its own article about **the problem of onboarding**. I would love to talk to people and get some input. So if You ever got frustrated about documentation, or designed an onboarding process, or written documentation where You were worrying about making it welcoming to beginners, [give me a shout](#socials)!

## Outro and thanks

Hope you enjoyed, learned something, or killed some time!

I appreciate any feedback! Let me know your utopian workflows. Say hi if You vibe, don't be shy! And especially -- let me know if you got stuck, peeved, inspired or if you want more!

/mb twitter link, or buy me a coffee

---

/might expand this :)
Thank You, my wonderful editors!

Thank You, Christian Penrod! You helped me realize that actually using Utopia in my Tailwind project would go down without too much of a hassle.

Thank You, Utopia creators -- [Trys Mudford](https://twitter.com/trysmudford) and [James Gilyead](https://twitter.com/j98) -- for creating this tooling ecosystem that I think makes systematic design a little more accessible! Thank You for writing and producing so much documentation -- I know how time consuming that can be. And thank You for making it all available for free.

Thank You, all the folks that came before who figured out the math to the responsive design problem and cared enough to keep implementing this by hand (until a few of them finally got sick of doing it by hand)!

## Resources

### The other guides

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod shows another way to implement the Utopia system in Tailwind. The way I do it in this guide builds on his approach. His writing is much less verbose than what You're reading here. Much less verbose.

-   [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/) by James Gilyead from the Utopia team goes only through part of the process, but that was already immensely helpful to me. Even more important, it acknowledges that the design process is messy and full of questions that only You can answer.

### Utopia stuff

For introductory resources about Utopia, see the above section [Ways into Utopia](xxx)

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
