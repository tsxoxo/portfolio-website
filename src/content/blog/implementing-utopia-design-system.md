---
title: Using Utopia
subheading: Ideas for a workflow.
socialImage:
    { filename: xstate-anim-figma-designs.png, alt: 3 designs for a todo app. }
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia, figma]
isDraft: true
---

Welcome designers,\
welcome coders,\
welcome the folks from the creamy center of that Venn diagram!

This is a guide to help You use the Utopia design system in your project. You're going to learn a way or two of how to work with it in Figma and a simple but flexible method for implementing it in Tailwind CSS.

**Choose your adventure**

If You're new to Utopia or want a refresher, start at [Ways into Utopia](#ways-into-utopia).

If You're like _Is a step-by-step guide even appropriate for a messy, iterative and context-specific process such as designing?_, then congrats -- You got me. I mention this tension in [Why such a guide](#why-such-a-guide).

If You're ready to go, just keep scrolling. 😎

## Table of Contents

-   Prerequisites
-   Guide
-   Ways into Utopia
-   Why this guide
-   Outro
-   Resources

## Prerequisites

Here's what this guide assumes about You:

-   You know how Utopia works.\
    _Learning resource_: [Ways into Utopia](#ways-into-utopia).

-   You know the basics of Figma, including auto-layout.\
    _Learning resource_: The [Figma's get started area](https://help.figma.com/hc/en-us/categories/360002051613-Get-started).

-   You know how to use a code editor and the command line to manage your project.\
    _Learning resource_: The [Beginner's Guide to Eleventy \[Part II\]](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-partii) by Tatiana Mac.

-   You have a project with Tailwind CSS set up -- a fresh one to start with or an existing one you want to redesign with Utopia.\
    _Learning resource_: [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/guides/astro).

-   ❤️‍🔥❤️‍🔥❤️‍🔥

## Guide

For simplicity, the guide takes several shortcuts:

-   It only talks about `min`. You might design `max` after that, in parallel, or before that.
-   It starts on a fresh frame in Figma. If You have an existing design, You might be able to get away with Utopia-fying it by applying new styles, etc.-- I trust that if You're at that level of consideration, You're able to adjust the instructions to your needs.

Also, iteration is implied everywhere (doing it again and again).

Aside:
If You're just interested in the topics of **baseline grid** or **implementation** check out these [2 shorter guides](#the-other-guides).

### Get to know the Figma plugins

Instead of creating your system by hand, I highly recommend You let the 2 Utopia Figma plugins do this for You. They help You generate all the building blocks of the Utopia design system -- the type scales, the spacing palettes and the grids -- in Figma. You'll see. They also help with updating these as You iterate iterate itirate.

For simplicity, this guide assumes that You're using at least the generator plugin. You can still do everything using just the Utopia website -- it'll just be a little more work 🦾.

-   You might read the [community page for the generator plugin](https://www.figma.com/community/plugin/951884648789524000/Utopia-%2F-Fluid-type-%2B-space-calculator) or the dedicated article [Getting started with Utopia Figma plugins](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/) which covers both. If You know your Utopia basics, You might be able to just jump in and keep following these instructions.

-   Run the 'Utopia / Fluid type + space calculator' plugin in Figma. Don't worry about any of the parameters yet, You'll deal with those as You go along. Click the big button. (It would sometimes take like 20 seconds for me before anything happened. Trust the process. A lot of good work is done in silence.)

-   Look at the generated frames and get an overview. (All these frames together are called 'component board' in this guide.) If some of them look a bit blank, try making the grid visible with `shift + g`.

-   Look at the generated styles in the right Figma panel and get an overview (click on the background of the canvas to see them). At the time of writing, they're tucked away in a folder called 'U', which can be hard to spot.

When You rerun the plugin, these styles get updated -- as well as the things these styles are applied to. You'll see.

Now You should have an overview of what the generator plugin generates. (The second plugin of the plugins will come into play later.)

### Decide if You want to use a baseline grid

A baseline grid can make You feel extra special ✨. Or help You with your design or whatever.

There are lots of ways to use a baseline grid. The Utopia Figma plugin generates one for You, so it's not too hard to get started.

If You're like _thank you, nopedy-nope!_ -- move on to the next step.

If, however, _yass, puhleaseee!_ -- I recommend You read [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/). There's diagrams there and a step-by-step guide and You'll get a glimpse of the messiness that awaits You down this path.

### Create a frame for `min`

Your first goal is to **figure out the size of the the majority of text in your project.** This is called 'body text' in this guide.

-   **If You're not using a grid**, decide a width for your `min` state. To help You with this, see the section "1. Choose @min viewport width" in [Designing a utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/).

-   **If You _are_ using a grid**, the issue is now how to fit the grid into the frame -- do you stretch one or the other, or leave it kind of overlapping or what? There is a simple solution proposed in the grid guide mentioned earlier: make your `min` frame the width of the generated `min` grid. Do it. It won't be exactly your official `min` width, but it should be close to it. Nobody will ever know. buahahahaa! Then try to calm down and apply the grid style to the frame.

-   In Figma, create a frame with your chosen width. To make a frame the approximate size of a screen, You might choose a device from Figma's list (press `f`) with a width that's close, then scale it proportionally to the exact number (e.g. by holding `shift` while scaling).

-   Design stuff until You get a sense for a workable `font size`.

Now You should have a piece of body text in your design sized in a way where You're like _"I can work with this"_.

Don't put too much pressure on yourself to 'get it right' at this point, whatever that means in this kind of design. You'll be remaking or at least modifying stuff using the Utopia system as You go along. You can change your `font size` at any point.

### Give your body text a Utopia style

-   Run the 'Utopia / Fluid type + space calculator' plugin again, this time plugging in your chosen `width` and `font size`. Or, if You've worked out `max` in parallel, both your `widths` and `font sizes`.

-   Apply the appropriate generated style to the body text in your design: `U/Type/Min/Prose/Step 0`.

Now, whenever you rerun the plugin with a different `font size`, your body text will update automatically!

### Create a `type scale`

This was messy for me. Here's a rough series of steps that might help You figure this one out:

-   If You haven't already, add a different type of text in your design -- something other than the body text. Maybe a heading or some smaller text like an image caption. The point is to have texts of different sizes to see how a type scale will fit into your design. Add what's appropriate.

-   Apply Utopia styles to all pieces of text. You may not know what styles to pick at this point. That's ok. Take some educated guesses and read on.

-   Now you should have at least 2 Utopian text styles living in your frame. Run the generator plugin again, just with a different type scale. Your text should change.

-   Try try try. Things I did: mess with the scale ratio, change the number of steps in the scale, play around with font weights, etc. etc. Keep making changes and rerunning the plugin until You find a scale that _fits your needs_.

-   **If You want to change multiple styles at once** (for example, use a different font family for all your headings), use [the 'Utopia / Batch update text styles' plugin](https://www.figma.com/community/plugin/979005485047252094/Utopia-%2F-Batch-update-text-styles). That's the second

Aside:
The plugin also generates a type scale in a bolder font weight. I took this as an invitation to start messing around. _A system is, like, just the beginning, man._ I haven't seen this phenomenon talked about anywhere else in the Utopia ecosystem.

---

#### What helped me

I felt this part of the process was especially iterative (messy) because there are so many moving parts. It's a whole scale of things living next to other things.-- Too much for my brain!

So I tried to simplify the process:

While designing my landing page, I got obsessed with my big chunky hero-heading -- because who doesn't. I wanted it to stay on a single line. So I made it as big as possible and paid attention to the font size.

And I started to build my type scale around this piece of text.

That gave me something to go on: I knew I wanted a scale with a font size pretty close to what I had given my hero-heading. And since this was to be the biggest heading on the page, I knew this size had to be several steps up the ladder, since I needed room for my smaller headings.

It was almost like an algorithm in my brain to filter out scales that were potentially compatible with me. I knew what I wanted in a scale and wasn't just blindly dating one after the other.

Now, this still took a lot of messing around. How many heading-hierarchies do I need for this site? Do I maybe wanna skip a scale-step between adjacent headings so that my `h1` sticks out even more from my `h2s`? I want to live boldly, so how bold do I want my headings to be?

Nobody can answer these questions for You.

I settled these questions for myself. I committed to a scale with 3 steps, we had some adventures, we were living life... Then I added a blog to my site -- which means more headings... so my scale can't really handle my content anymore...

Every day, I redesign. Or, as they say:

> ["A digital product is never finished"](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)

🌞

### Introduce Utopian spacing

-   Pick a method below -- A, B or C -- and make all the spaces, nooks and crannies in your design Utopian (for real: I'm talking about your paddings, gaps, margins, etc.). Whichever You choose, consider using auto-layout whenever You can: it can help keep things simple and is straightforward to implement with grid and flexbox (and maybe You can even skip margins altogether).

#### A. Just do it by hand ✍️

aka pick your brain for one of the spacing steps You just generated and type in the value by hand at every single decision.

You might be asking yourself _"really?"_.

Well, this is how me and my two brain cells did it. It wasn't too bad. A lot of peeking at the component board, but that's a small price to pay to be _fluid_, man 🐬.

<video controls preload='metadata'>
    <source src="/assets/blog/pictures/using-utopia/spacing-by-hand.webm" type="video/webm" ></source>
    	There's a video here demonstrating the procedure. Your browser doesn't support embedded videos, but You can <a href="/assets/blog/pictures/using-utopia/spacing-by-hand.webm">download it as a WEBM file</a>.
</video>

#### B. Use variables 🌈

You can set up a spacing palette with variables like this:

![A screenshot of how You might set up your variables](/assets/blog/pictures/using-utopia/figma-variables-demo.png)

Aside:
Are modes potentially useful here? There must be a good lifehack in here, somewhere.

The upside to this method is You can pick your spacing from a menu and don't have to peek so much.

The downside is I don't see how to make these variables update when You regenerate your palette...

...**But**...

...**Psst**...

...there might be a way...

...follow me into this dark alley, friend...

#### C. Use the spacing components from the component board 🌚

Aside:
**If You want to work on a custom spacing palette**, You might do it this way. The spacing in your design will update each time you rerun the plugin with different parameters.

See these little squares that came out of the generator plugin?-- The ones on the frame called "Space palette @min"? You can literally [drag them into your design](https://utopia.fyi/images/utopia-plugin-10.jpg)! Once they're where You want them to be, just select the variant You want from the little drop-down menu and there's your spacing: 2xs, m, 3xl -- all your favourite t-shirt sizes! And when You're sick of looking at them, just close your eyes, press `shift + g` 3 times and they'll go away.

How does that work, You ask?-- _They're just, like, pieces of the grid, man! 🤯_ Clever, clever, these Utopia designers.

Just set the numbers in your auto-layouts to 0 and put squares everywhere: in your gaps, your paddings... -- your margins, if You need them! Stuffed one under your sofa and forgot about it for like 7 years until it was time to move? No problem, it'll stay there, patiently waiting until it's time. _Its_ time...

Did I mention the squares are cursed with a terrible curse? No?

But they come with a frozen yoghurt! I call it _"froyo"_!

---

Aside:
For this website, the default spacing palette with some added custom pairs worked alright. I felt it was a decent balance between constraint and freedom.

---

Now You should have a design that's pretty Utopian. And if You ever need to do it all again, You are well prepared: You know how to wrestle with text. You know 3 ways of handling spacing. You are at peace with the grid. Go out there, make some mistakes and enjoy that sweet consistency!

### Implement

Aside:
There are plugins to help with this, but I won't be using them here. See [Utopia-Tailwind integrations](#utopia-tailwind-integrations) for more info.

-   Get those CSS custom properties out of your system! (and into your config.) Go to the Utopia website, plug in the values You used with the Figma plugin (they're on the first generated frame) and copy the CSS output into your project.

**Uhmmm, where?**

You have options.

A. You can sort of ignore the variables and just copy their values (e.g. just the raw `clamp()` function) into your tailwind config. [Chris Penrod does it this way](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/).

B. I go an extra step and first put all the variables into a `base.css` file. Then I reference them in `tailwind.config.cjs`. My reason for doing it _extra_ 🧑‍🍳 like this is that I can easily copy and paste Utopia's output wholesale into `base.css` whenever I "iterate" (change my mind) -- which, I know I will.

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

You can change these class names -- `fl-sm`, `space-fl-3xs` -- to your liking. I took this naming system from Chris. The "fl" stands for "fluid". Mmmmmm... fluid 🧃.

With this setup, some new classes should show up in your code editor's autocomplete:

-   Type in `p-spa` somewhere where You'd put a CSS class and press your `execute autocomplete!`-shortcut (I have it on `ctrl + space` in VSCode). You should see a list of all your fluid padding steps. It should also work for any other Tailwind spacing utility like `gap`, `spacing` and `margin`. And for text sizes.

Now, if You're starting a fresh project, You are ready to code it with entirely fluid spacing and typography! 🙌

### If You're redesigning an existing project

-   Replace static classes with fluid ones.

Something to help with that:

`[\s"']([mp]|gap|space)-?\w?-\d`

This little formula finds many (but surely not all) of the standard Tailwind spacing classes. I mostly wrote it to feel like a wizard for 10 minutes. But also, without it, I would have had to search for each padding variation (pt, pb, p-, px-, py) individually (and then for each gap variation, etc.)

**To use this** regex, paste it into the 'global search' in your code editor (the one where you search through all your files at once -- it's `cmd + shift + f` in VSCode). For it to work, You might have to turn on regex somewhere in your search (in VSCode there's a little button that says `.*` on the right of the searchbar).

Now just open Figma on one side and your favourite code editor on the other and go to town! 🤘

..._Fluid town_ 🌚

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

I found two plugins that were made to help with integrating Utopia into Tailwind. Neither worked out of the box for me and I wasn't in the mood for hacking.

-   [cwsdigital/tailwind-utopia](https://github.com/cwsdigital/tailwind-utopia)
-   [domchristie/tailwind-utopia](https://github.com/domchristie/tailwind-utopia). This one's a fork of the `cwsdigital` one but has a different API.

### Fluid design more generally

-   See [TailwindCSS: Fluid typography with CSS Clamp](https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp#home) if You want to skip Utopia and do more of the heavy lifting yourself

-   In [Linearly Scale font-size with CSS clamp() Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) Pedro Rodriguez goes deep into `clamp` and interpolation and brings you along for the ride.

### Limitations

-   In [Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html) Adrian Roselli warns against using `clamp` because of issues with zooming.

-   In [Fluid Type](https://elisehe.in/2021/03/13/fluid-type) Elise Hein talks about some fundamental questions in a very approachable way. Why do we care about fluid type in the first place? And is clamp really so great?
