---
title: Implementing a utopian design system
subheading: A step-by-step guide using utopia.fyi, Figma and Tailwind CSS.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia]
isDraft: true
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
-   📜, 👁👁 Read an [intro article](https://utopia.fyi/blog/designing-with-fluid-type-scales/) and look at a diagram illustrating the idea.
-   📜 Read a [longer intro article](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) that also explains the context of the larger problem.
-   🤏, 📜, 👁👁 Play with the official [Figma starter project](https://www.figma.com/community/file/1122903924123950023) and read the succinct intro on the 'readme' page that includes multiple illustrations.

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

NOTE
mb put this at the top and remove the '## guide' parent section altogether

### Steps

Disclaimer: this is one workflow among many.

#### Alternatives

[2 other guides](#the-other-guides) helped me come up with this workflow (meaning I stole a lot from them). They focus on parts of the whole while I'm trying to go from start to finish. But that also makes them shorter, which is what You might want.

#### Create `min` and `max` frames in Figma

1. Choose your widths.

What widths should You choose?
-- Whatever is appropiate for your project.
No hard answers here. You're gonna hear this a lot.

I read on [their blog](https://utopia.fyi/blog/designing-a-utopian-layout-grid/): _"(...) it makes sense to design the @min screens as small as is practically possible"_. And that made sense to me.

They go on to explain: basically, 320px is a small yet tested size, since that's how big phones used to be for a long time and y'all were doing _fine_. So the Utopia creators chose it as a reasonale starting point. I take it as a value meaning _somewhere at the lower end of viewport widths where I can still read longer texts comfortably without it getting annoying_.

For designing this site, I left the defaults -- `min`: 320px, `max`: 1024px. Because I had enough things to worry about.

But it's all about what You want to achieve and who You're designing for.

2. In Figma, create a frame for `min` and a frame for `max`.

/make this a :::tip 3. (optional) To make a frame with proportions close to an actual screen, You can choose a device from the list that has a width close to your `min` (press `f` in Figma), then scale it proportionally to the right width.

#### Make a wireframe

**The goal: Figure out the size of the the majority of text in your project.**

/redundant?
This is the _font size_ in the Utopia UI. Your body text will never get smaller than the `min`-font-size and never greater than the `max`-font-size.

1. Do stuff until You figure that out for `min`...
2. And for `max`.

Start accepting that You'll be re-making and re-deciding this again. -- Later after generating your type- and spacing-scales You'll do a Utopia redesign -- consistently applying your scales and maybe even using a Utopia grid.

#### Run the Utopia plugin and apply some text styles to your design

This can help with figuring out your type scales, as it saves some copy-pasting.  
It gives You Figma styles and components representing all the building blocks of the Utopia design system -- the type scales, the spacing palettes and the grids. You'll see.

1. Learn the basics by reading either the description page of [the plugin](https://www.figma.com/community/plugin/951884648789524000/Utopia-%2F-Fluid-type-%2B-space-calculator) or the dedicated [intro article](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/).

2. Go to Figma and run it.

/fix step order 2. Click on the big button. Possibly, wait for a bit until it finishes working -- it sometimes would take like 20 seconds for me. It's doing a lot of good work. Don't worry about your `type scales` yet, just run it once to see what it does. You'll focus on them in the next section.

3. Find the generated output somewhere on the canvas -- it's a big bunch of frames. Look at everything. If a bunch of stuff looks blank, try making the the grid visible in Figma by pressing `shit + g`. Feel free to frame the bunch or wrap it in a section. Put it somewhere where you can easily take a peek at it while you're designing. I was peeking pretty often. (Aside: Haven't seen the phenomenon of a 'strong' text variant that's got a bold font weight talked about anywhere else in the Utopia ecosystem. But it's there. I've certainly used it. I actually modified some of the font-weights for my purposes. A system is just the beginning.)

4. Apply the appropiate generated style to your body text. At the time of writing this is called `U/Type/Min/Prose/Step 0`.

5. Do the same thing with a heading or two. Add some to your design if You hadn't already and apply some styles to them. There is some guesswork here, as You may or may not know how many steps You need for your scale. I went minimal and chose 3 steps but now that I write a blog and need like 5 heading hierarchies, I'm reconsidering.

6. Now you should have at least 2 Utopian text styles living in your design. Change the font family of all of these in one swoop by using [this other plugin](https://www.figma.com/community/plugin/979005485047252094/Utopia-%2F-Batch-update-text-styles) by the Utopia creators. (The text should change on the main-frame as well as in your designs.) You can undo with `cmd-z` if You want, but it's good that You know that this is easy to do.

7. Run the Utopia plugin again, just with a different type scale. Observe how your headings change, but your body text stays the same. You'll be running it again, a few times.

These plugins can be your tools and trusty helpers. You can also get there by copy-pasting between the Utopia website and Figma. I liked the plugins. For such a messy, sprawling thing as a design system generator and a batch-updator I found them to be very friendly.

/Aside:
Now here might be a good case to use the new variables feature in Figma. put all of these values there and you dont have to look them up. you could even map min and max to their own modes. could be interesting. i was ready to do that but unfortunately figma restricts free accounts to 1 mode only. I feel this might be a good moment to link to my 'buy me a coffee (or Figma subscription)' thingy. I pledge that if I get 15 bucks, I'll buy a month of Figma and write a guide on doing this with variables.

#### Figure out a `type scale`

1. Focus on either `min` or `max`.

2. Make sure You have a few different types of text in your wireframe. By now You should have at least some body text and a heading. This is a good time to flesh out your design and put in more -- other headings or smaller text -- so that You can see how a particular type scale will harmonize across your design.

3. Apply appropiate text styles to whatever text in your wireframe, like You did in the previous section. Maybe with a clearer sense of how many steps You need in your scale.

4. Go to either the Utopia website or the Figma plugin. Generate a scale with some ratio. See how it fits into your design. -- if you're using the plugin just look at your magically updated wireframesand; or, if you're using the website copy-paste some values into Figma to get a sense. Rinse and repeat until You find one that fits your needs.

5. Do the same thing for the other threshold, trying out different scales. For an explanation why You'd want two different scales, see the top of [this article](https://utopia.fyi/blog/designing-with-fluid-type-scales/).

This one's especially iterative (messy) because there are so many moving parts. Many moving parts can overwhelm a brain like mine, so I gave it a hand and simplified the process.

Here's where I found myself some weeks ago:

While designing my landing page, I got obsessed with my big chunky hero-heading because who doesn't. I wanted it to stay on a single line. So I made it as big as possible and paid attention to the font size. And I decided to build my type scale around this piece of text.

That's the simplification. It gave me something to go on: I knew I wanted a scale with a font size pretty close to what I had given my hero-heading. And since this was to be the biggest heading on the page, I knew this size had to be several steps up the ladder, since I needed room for my smaller headings.

So I knew what to look for in a scale and wasn't just blindly dating one after the other. (It seems so much of design is about giving yourself limitations to make the wild chaos of life barely managable.)

It was still a lot of messing around. How many heading-hierarchies do I need for this site? Do I maybe wanna skip a scale-step between adjacent headings (so that my `h1` sticks out even more from my `h2s`, for example). How bold do I want my headings to be?

I settled these questions for myself. Then I decided to add a blog to my site. Which means more headings, which means my scale no longer accomodates my content. Every day, I redesign. Or, as they say:

> ["A digital product is never finished"](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)

#### Re-make your design the Utopia way

/uhhmm, check the tone of this section once I get a good night's sleep in

1. Decide if you wanna use a baseline grid, like the one that the Utopia plugin generates. It can make You feel extra special. If yes, read [this article](https://utopia.fyi/blog/designing-a-utopian-layout-grid/) where one of the creators talks through setting it up in Figma. Now maybe You'll see the grids in the Utopia main-frame with slightly different eyes. Feel free to re-run the plug-in and adjust the grid to your needs(tm).

2. Create a fresh set of frames for `min` and `max` to house your upcoming redesign. If You're not using a grid, do exactly what You did when You were creating your frames in the beginnin. You can move on to the next step, run along, summer child. If You _are_ using a grid, the issue is now how to fit the grid into the frame -- do you stretch **it**, or the frame, or leave it kind of overlapping or what? I went with a solution I read in the article I just mentioned -- make your `min` frame the size of your `min` grid. It won't be exactly your official `min` width, but it should be close to it. Nobody will ever know. Simple but devious, buaha.

3. Generate a system to use for your re-design. By now You should have pretty much all you need for that: widths for `min` and `max`, some base font sizes, some type scales... uhm... No, no. No, You didn't get me. Shut up. No, I didn't forget the spacing. I just, uhhh, left it for the very end, for some reason. So if You're the kind of person that needs a _s**pecial** spacing palette_, read on, I deal with You after this. If You're cool, just hit the big button.

4. Design your project using the generated system. You already know how to handle text. For spacing, consider using auto-layout whenever You can. For me, it helped keep things simple: everything is in the gaps and paddings. No margins whatsoever. It's also straightforward to implement later using grid and flexbox. I have 2 margins on my landing page: one for centering the page and one for spacing the very last thing in the footer. More on working with spacing coming. In. The. Next. Paragraph

/structure this section 'spacing'
/ two things to talk about: 1. design with Utopia spacing (either remember the values or set variables or drag in the components) and 2. how to generate own palette.

Ahh, spacing. The breathing room, the nuts and bolts. The little nooks and cranies that gather dust in our hearts and minds and our kitchens. Well, I went with the default palette as a starting point and felt a decent balance between constraint and freedom. Also, I had enough problems to deal with. As I was designing everything the Utopia way I added several skip-a-step-, uhm, steps. That's where you go from, say an M on `min` to an XL on `max` instead of another M or even an L. It can make sense when there's more space to work with. But apart from that I never felt I needed to re-invent the wheel here. (These growing steps I just mentioned You're gonna have to manage on your own by picking a different step for max. But You'll be doing this anyway. Or use modes or something.)

If You want to try out different spacing palettes, You might go through a similiar loop as when You were figuring out the type scale: first, apply the spacing styles from your system to your design (by copy-pasting, or using variables, or if You see another way, please let me know!(xxx)), then run the plugin again. You might wanna work with variables even more. I wanna use variables after trying it out while writing this. I was really peeking a lot at that master-board.

At this point I was thinking: "do I really need to remember the spacing values manually." My answer was "yes, yes I do". Needless to say, I was peeking at that generated master-board regularly. Now there's a pretty straightforward way to set this up with variables. Nominal example:

[xxx](maybe screenshot of variables set up)

I don't see how to make these sync when You re-generate your palette.

But, there might be a way... Follow me into this dark alley, friend.

See, You could just use the _spacing components_ in your actual designs, as shown in [this image](https://utopia.fyi/images/utopia-plugin-10.jpg) from the official [guide to the plugin](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/). You would literally just drag the generated squares into your design. (Again, if You don't see squares, turn on the grid in Figma: `shift-g`. That certainly threw me off, for a while.) And You can hide these spacers easily because, well - they're actually just pieces of the grid, man! Clever, clever, Utopia designers. Do it like this and You could manage your spacings just by selecting a spacing variant -- s, m, xl, all your favourite t-shirt sizes -- from a drop-down menu! These are actual Figma components!

On the flip side, by doing it this way, You give your soul to the Darkness, or whatever. Don't worry about it. Can I interest You in a frozen yoghurt? I call it _"froyo"_!

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

-   formatting
    -   set apart steps and musings/my stories
        -   different font styles
        -   dividing lines
        -   backgrounds / boxes
        -   :::asides
        -   foldable content
-   markdown
    -   wrap each chapter in a `\<section\>`
    -   make 'dictionary of utopia UI' a dd-dt list?
    -   improve blockquote - cite, e.g. give blockquote the attribute
    -   make directives like `tip` to break up the flow of the text
-   give 'skip to the steps'-link extra special styling
-   don't repeat links, especially right next to each other
-   add: make own demo gif?
-   fix: make it so I can have spaces between list items in markdown without them going haywire in html
-   make links open in new tab
-   revise: shorten utopia-basics section; rewrite/break up 'big idea'
-   IDEA: make each step of the guide formatted like _succinct instructions (1 paragraph) --- detailed explanation and musings_. this could be visually reinforced by making the instructions stick out more than the musings (e.g. higher contrast), or even by hiding the explanation in a foldable element (use `<dt>`?)
-   IDEA: broaden scope -- talk about design systems; about different approaches to responsive design (or link to resources)
-   IDEA: separate steps from my specific case
