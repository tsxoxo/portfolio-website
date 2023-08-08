---
title: Implementing a utopian design system
subheading: A step-by-step guide using utopia.fyi, Figma and Tailwind CSS.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia]
draft: true
---

## alt titles

how to use utopia with figma and tailwind

-   A workflow for using utopia with figma and tailwind

## Table of Contents

-   Intro
-   WTF
-   Steps
-   Outro
-   Resources

## Intro

If you know what you want and you want to jump right in, **[skip to the steps](#steps)**.

## What is Utopia?

[Utopia](https://utopia.fyi/) is a tool to help with [responsive design](xxx). On the surface it's a website where You plug in some values and get out CSS that makes your text and spacings adjust to the user's viewport size.

But it's also a tool in the broader sense of the term -- it's a certain approach to a problem we web designers face every day (every day I live in a society).

### Where to start

These are some resources I found helpful explaining the general concept:

-   🤏 Play with an [interactive demo](https://utopia.fyi/) to get a sense of the idea.
-   👁👁 Watch an [intro video](https://www.youtube.com/watch?v=DDuGtN-GakA) by the creators (18 minutes).
-   📜, 👁👁 Read a [shorter intro article](https://utopia.fyi/blog/designing-with-fluid-type-scales/) and look at a diagram illustrating the idea.
-   📜 Read a [longer intro article](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) that also explains the context of the larger problem.

### Main concepts

I won't be going into depth. I think the above resources do a decent job of explaining Utopia's concept (please let me if You got stuck somewhere). But I can give You a little refresher. I assume You've got a sense of the main idea.

#### In a nutshell

Quotes from official ressources that sum up the Utopia approach:

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

#### Dictionary of the Utopia UI

**`min`**\
The smallest state or the smallest viewport You feel like visualising in your design. The `font size` will never go smaller as the one for `min`.

**`max`**\
The largest state or the largest viewport You feel like visualising in your design. The `font size` will never go bigger as the one for `max`.

**`width`**\
The `min` and `max` viewports are defined in terms of their widths.

**`font size`**\
The size of the majority of text that will appear in your project. Often the starting point in the design process. Also, the base line for your `type scale`.

**`type scale`**\
The ratio used to create a [modular type scale](https://utopia.fyi/blog/css-modular-scales), with `font size` being the base line. This can sound exotic, but it's really just a way to let math help You come up with a consistent palette of font sizes. (So You don't have to ask yourself: _"should my headings be 48px or 49px?"_)

## WTF

### My confusion

/alt titles
onboarding rant

It took me a while to wrap my head around Utopia. Meaning that I sat confused in front of their UI for a while, then read like 6 of their blog articles, then watched their intro video. Then I did my civic duty and complained in their youtube comments that their system could be more accessible to newcomers.

I don't necessarily find the concept super hard (especially once I got it, hehe), but it was a mystery for me how to actually use this system -- where do I start? What's `font size` stand for in the Utopia UI? Ok, it spit out some CSS, but can I design with this in Figma (without it being super cumbersome)?

In the end I found a way (I think, fingers crossed 🤞🏼). But it was by grasping on to straws -- part of [a workflow laid in a blog post](https://utopia.fyi/blog/designing-a-utopian-layout-grid/), a plugin found on Figma, another blog showing how to implement it with Tailwind(xxx). I would have loved a little something a little more comprehensive, more hands-on, bringing it all together. That's my story.

But who knows -- maybe You wouldn't be reading this guide if this author hadn't gone through an initial period of confusion and frustration. I bet that's the driving force behind at least half of the tutorial industry. I'm gonna show them how to be welcoming to beginners. Gonna show them all.

### My story

NOTE
A section to frame and waffle

Some if not all of the steps are just me following this [kind-of-guide from the Utopia blog](https://utopia.fyi/blog/designing-a-utopian-layout-grid/). It was an especially exciting read for me because it acknowledges that designing is a messy process. Second guessing your desicions is part of it, even for experienced designers. I love it when I hear competent people, in whatever field, talk from that place where it becomes clear that competency is a fragile concept. We're all winging it, making mistakes and then trying to do better mistakes.

### Who is writing this?

I build websites and write tutorials. [Hire me!](xxx)

I've used Utopia to redesign this website and ran into enough roadblocks to make me want to save other people the same frustrations.

While working on this very site I ran down the rabbit hole of how to make text responsive. I found utopia, I think through [Kevin Powell], and it looked fun enough to try. And by fun I mean it scratched that consistency itch that makes me want to look at my CSS and see only 8 values in total.

## Guide

### Prerequisites

-   For developing the project: Basic knowledge of the command line and a code editor. You can find [a beginner-friendly guide](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-partii) on Tatiana Mac's blog.

-   A basic knowledge of Figma and a free account. They have a pretty great [get started area](https://help.figma.com/hc/en-us/categories/360002051613-Get-started).

-   A basic knowledge of Utopia. To get started, take a peek at the resources i list in this [intro section](xxx what is utopia).

-   A project with Tailwind CSS set up. Can be a fresh, can be an existing one you want to give the old redesign.

-   ❤️‍🔥❤️‍🔥❤️‍🔥

### Steps

Disclaimer: this is one workflow among many.

#### Alternatives

[2 other guides](#the-other-guides) helped me come up with this workflow (meaning I stole a lot from them). They focus on parts of the whole while I'm trying to go from start to finish. But that also makes them shorter, which is what You might want.

#### Choose widths for `min` and `max`

No hard answers here -- choose whatever is appropiate for your project. You're gonna hear this a lot.

I read on [their blog](https://utopia.fyi/blog/designing-a-utopian-layout-grid/): _"(...) it makes sense to design the @min screens as small as is practically possible"_. And that made sense to me.

They go on to explain: basically, 320px is a small yet tested size, since that's how big phones used to be for a long time and y'all were doing fine. So the Utopia creators chose it as a reasonale starting point. I take it as a value meaning _somewhere around the lower end of viewport widths where I can read longer texts comfortably without it getting annoying_.

For designing this site, I left the defaults -- `min`: 320px, `max`: 1024px. Because I had enough things to worry about.

But it's all about what You want to achieve and who You're designing for.

#### Choose a body text size

This is the _font size_ in the Utopia UI. This represents the size of the majority of text in your project.

You'll figure this out twice -- once for `min` and once for `max`. Your body text will never get smaller than the `min`-font-size and never greater than the `max`-font-size.

Here's kind of how I did it:

1. Create a `min` frame in Figma. I chose a device from the list that had a width close to my `min` then scaled it proportionally to the right width. That way I had a frame with proportions close to an actual screen.

2. Design a wireframe of your thing. The goal is just to figure out the body font size. Start accepting that You'll be re-making and re-deciding this again. -- Later after generating your type and spacing scales You'll make a new frame and basically do a Utopia redesign -- consistently applying your scales and maybe even using a Utopia grid.

3. Do steps 1 and 2 for `max`

#### Choose a `type scale`

Plug in ratios into the Utopia UI and look at the output below until You find one that fits your needs.

You'll also be doing this twice and You might go for two different ratios -- a mild one for smaller screens and a sharper one for bigger ones. This way you'll have proportionally bigger text for things like headings etc.

Here's what I did. This was me handling a specific problem, but maybe it can give an idea of an approach:

1. Design or continue designing a wireframe to include some bigger headings. I did this with a specific consideration: I had a big chunky hero text that I wanted to stay on a single line. So I made my hero-heading as big as possible without wrapping and paid attention to the font size. This piece of text is what I focused on and decided to choose my scale ratio around it.

2. Try out some scale ratios until one of them generates a scale or a scale-degree that fits your specific needs. In my case I was looking for a scale that generated a font size pretty close to what I had given my hero-heading in step 1. And that font size had to be several scales up the ladder, since I needed room for other, smaller headings.

The dirty reality was me just taking the generated numbers and applying them to my headings in Figma to see how they fit in. And playing with font-weight on top of that.

NOTES

-   is this a possible alternative? -- instead of using the utopia website to generate type scales and manually copy-pasting them into figma, use the utopia figma plugin?

#### Go to Figma and run the utopia plugin

Get the plugin here(xxx) and run it. Either plug in the values from the previous step or copy the whole url into the plugin. Wait for like 20 seconds until it finishes working. Find the generated output somewhere on the canvas -- it's a big bunch. Frame it. Put it somewhere where you can easily take a peek while you're designing. I was peeking at it pretty often.

Now here might be a good case to use the new variables feature in Figma. put all of these values there and you dont have to look them up. you could even map min and max to their own modes. could be interesting. i was ready to do that but unfortunately figma restricts free accounts to 1 mode only. I feel this might be a good moment to link to my 'buy me a coffee (or Figma subscription)' thingy. I pledge that if I get 15 bucks, I'll buy a month of Figma and write a guide on doing this with variables.

the folks at utopia have made another useful plugin to use when you want to change the type face. It changes the font styles in multiple layers, perfect if you want to update your existing master-frame.

#### Design your project using your generated values

##### Decide if you wanna use a baseline? grid

If you don't: make a frame as wide as your `min` width and start designing, then do the same for `max`.

If you do, make a frame that's as wide as the generated `min` grid. This won't be the same as your `min`-width, but it'll be close enough. Do your `min` design on this frame. Then do the same for `max`.

This approach solves the problem of the grid not fitting in neatly into the `min` width in a simple way. I read about it here. The creators of utopia go into depth in this article(xxx). Incidentally, this is also the closest thing to a step-by-step guide I have found in their ecosystem (I stole some parts of this workflow from there).

To settle on a usable height, see this step[xxx]

##### Either start from scratch or remake your wireframes with the new values.

Use auto-layout for everything.

For me, working without variables, there was not a silver bullet here. I simply had to keep all font sizes and spacing values within the system. Easy to do with text -- pick only font styles from the generated list. With spacing, I had to plug in my utopian values again and again (hence -- a lot of peeking)

If you set up your variables, use those.

Another option is to use the spacing components in your actual designs, as shown [here](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/). You would just drag the squares into your design. The advantage of that is that you can select the spacing variant (s, m, l, xl, etc.) from a drop-down menu, since they are actual Figma components with variants.

Why autolayout for everything? I forget where i read this but the idea was to use grid and flexbox as much as possible. so that most of your frames in figma will be governed by auto layout and most of the spacing decisions will refer to gaps and padding values within these frames. later these will easily translate to flexbox and grid layouts.

#### Iterate

You might want to get things right at this stage. This saves some work later on.

#### Implement

When you're happy with your design system, go to `utopia.fyi` and copy the CSS output into your project.

I put mine into a `base.css` file and then referenced the variables in `tailwind.config.cjs`. A good reason for doing it like that is that I can easily copy and paste utopia's output into `base.css` whenever I iterate (which, I know I will).

This is what it looked like:

```css
/* 👇 base.css --- some values ommitted for brevity */

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
// 👇tailwind.config.cjs --- some values ommitted for brevity*/

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

If you're redesigning an existing project, it makes sense to pay attention to the class names (e.g. `fl-sm`, `space-fl-3xs`) since you'll be pruning out static values and you might want to use regex to distinguigh these from your shiny new fluid ones. See this step for more info(xxx).

#### Code your thing using these values

Use grid and flexbox whenever you can.

The new classes should be available in your IDE's autocomplete: in VSCode I can type in `p-sp` and press `ctrl + space` and I get a list of all the fluid padding values. Same for any other spacing category like gap and 'spacing'. Same for font sizes.

You'll be working a lot with paddings and gaps.

More peeking coming. You'll look at your Figma designs see a padding value of `24` and wonder if thats `space-fl-m` or `space-fl-l`. That's natural. I wondered a lot.

#### (If redesigning an existing project) Find and replace static values with fluid ones

Search through all your files and go through text sizes, paddings, margins, spacings, etc. Instead of typing in each padding-variation (pt, pb, p-, px-, py) and doing the same for margin, etc., I wrote this regex that covers a lot (but not all) cases:
`[\s"']([mp]|gap|space)-?\w?-\d`

To do it like this, you might have to enable regex in your IDE's searchbar (there's a little button on the right in VSCode).

Beware: this regex relies on the fact that my fluid class names begin with a letter while those of tailwind begin with a digit (that’s the “\d” in the above regex)).

## Outro

Hope you enjoyed, learned, or killed some time!

I haven't found many guides like this while I was redesigning my site. Utopia doesn't seem like rocket science now that I know how it works, but it did take me several hours to get a grip on all the concepts and figure out a way how to actually work with them. Basic how-to instructions are buried in some of their blog articles.

I could have used a step-by-step guide like this. I'd be elated if it saved anybody some time or frustration.

### Disclaimers and goodbye

This is one workflow of many. It might be embarrassingly simplistic to some. It got the job done for me.

I'm on Twitter (xxx twitter). Let me know your utopian workflows. Give some feedback. Say hi, for goodness' sake, don't be shy! And especially, let me know if you got stuck, peeved or if you want more!

---

[x] refer to myself as 'this author'

## Resources

### The other guides

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod also shows a way to implement the Utopia system in Tailwind. The way I do it in this guide builds on his approach. His guide is also much less verbose than what You're reading here. Much less verbose. Thank You, Christian. You helped me realize that this is possible and possible without too much hassle.

-   [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/) by James Gilyead from the Utopia team goes only through part of the process, but that was already immensely helpful to me. Even more important, it acknowledges that the design process is messy and full of questions that only You can answer.

### Utopia stuff

-   [Meet Utopia: Designing And Building With Fluid Type And Space Scales](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) by the Utopia creators gives you a pretty nice all-around introduction: it lays out the problem, gives some historical context, talks about how the idea came together and lays out the resulting system, even hinting at a workflow here and there.

-   [The official guide to the Utopia Figma plugins](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/) does what it says.

-   [The official starter project on Figma](https://www.figma.com/community/file/1122903924123950023).

### Utopia-Tailwind integrations

I found two plugins that were made to help with integrating Utopia into Tailwind. Neither worked out-of-the-box for me and I wasn't in the mood for hacking.

-   [cwsdigital/tailwind-utopia](https://github.com/cwsdigital/tailwind-utopia)
-   [domchristie/tailwind-utopia](https://github.com/domchristie/tailwind-utopia). This one's a fork of the `cwsdigital` one but has a different API.

### Fluid design more generally

-   See [TailwindCSS: Fluid typography with CSS Clamp](https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp#home) if You want to skip Utopia and do more of the heavy lifting yourself

-   In [Linearly Scale font-size with CSS clamp() Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) Pedro Rodriguez goes deep into `clamp` and interpolation and brings you along for the ride.

### Limitations

-   In [Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html) Adrian Roselli warns against using `clamp` because of issues with zooming.

-   In [Fluid Type](https://elisehe.in/2021/03/13/fluid-type) Elise Hein talks about some fundamental questions in a very approachable way. Why do we care about fluid type in the first place? And is clamp really so great?

---

Thank You, my wonderful editors!

## META

NEXT STEPS:

[] revise '# steps'

-   revise '# wtf'
-   revise '# outro'
-   decide on order
-   check intro
-   test this: \* is this a possible alternative? -- instead of using the utopia website to generate type scales and manually copy-pasting them into figma, use the utopia figma plugin?
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

-   give 'skip to the steps'-link extra special styling
-   make 'dictionary of utopia UI' a dd-dt list?
-   don't repeat links, especially right next to each other
-   add: make own demo gif?
-   fix: make it so I can have spaces between list items in markdown without them going haywire in html
-   make links open in new tab
-   revise: shorten utopia-basics section; rewrite/break up 'big idea'
-   IDEA: make each step of the guide formatted like _succinct instructions (1 paragraph) --- detailed explanation and musings_. this could be visually reinforced by making the instructions stick out more than the musings (e.g. higher contrast), or even by hiding the explanation in a foldable element (use `<dt>`?)
-   IDEA: broaden scope -- talk about design systems; about different approaches to responsive design (or link to resources)
