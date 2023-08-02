---
title: Implementing a utopian design system
subheading: A step-by-step guide using utopia.fyi, Figma and Tailwind CSS.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia]
draft: true
---

## Table of Contents

-   WTF
-   Guide
-   Outro
-   Resources

## WTF

If you know what you want and you want to jump right in, skip to the guide(xxx).

### What is utopia?

[Utopia](https://utopia.fyi/) is basically a tool to help with responsive design - meaning text and spacings adjusting to the user's screen size.

They have a nice interactive demo on their landing page showing off the idea (follow the link in the previous paragraph). They explain themselves in [this youtube video](https://www.youtube.com/watch?v=DDuGtN-GakA), which is 18 minutes. And in their [blog](https://utopia.fyi/blog) they do a good job of covering various aspects of their system.

It took me a while to wrap my head around it. Meaning that I sat confused in front of their UI for a while, then read like 6 of their blog articles, then watched their intro video. Then I did my civic duty and complained in their youtube comments that their system could be more accessible to newcomers.

But in the end I got it (fingers crossed 🤞🏼). And who knows - maybe You wouldn't be reading this guide if this author hadn't gone through an initial period of confusion and frustration. That must be at least half of the tutorial industry.

[x] refer to myself as 'this author'

#### So, how much do I need to understand to use this thing?

Well, to follow this guide, you should have a basic understanding of the fundamentals: the basic idea behind utopia and the 'seeds' it uses to generate a system for you, namely: `min`, `max`, `base font size` (called 'font size' in the utopia UI) and `type scale`.

If You're not in the mood to go through the official resources, here's the way it works, as I see it, unoficially:

You go to their website, plug in a handful of values and it spits out some CSS variables that you can copy and use in your project. For example:

`--step-0: clamp(1.00rem, calc(0.83rem + 0.83vw), 1.50rem)`

What that does is make sure your text never gets smaller than 1.00rem, never gets bigger than 1.5rem, and is fluid in between (meaning it changes according to screen size).

It's a solution to the old _stay responsive, stay consistent_ set of problems we web designers face every single day. (Every day I live in a society.)

As you can see from the example above, this solution involves math that can get quite intense. None of these values, like `0.83rem`, are random. In fact, baked into that formula are all of the 6 values you plug into the Utopia UI: widths, base font sizes and type scales for both `min` and `max`.

**The big idea is this**: Thinking about the problem of how to make my website responsive let's say, _'I want my body text to never go smaller than, say, 16px (`base font size`) and I want it to hit that limit on a screen 320px wide (`min width`). And on that screen I want to work with a palette of font sizes that each grow by a factor of, say 1.2 (`type scale`). I give myself the same sort of limitations at the upper threshold (`max`). And since I have more space to distribute on bigger screens, I usually choose a different, sharper type scale, meaning I'll have proportionally bigger text to work with, e.g. for headings. And now that I have the two extremes figured out (smallest and biggest screens), I want any screen that's in between to interpolate my actual font size. (Interpolate is a fancy word which is really hard to explain but really simple to show. Look at [the first diagram in this article](https://utopia.fyi/blog/designing-with-fluid-type-scales/). [Backup link to just the image](https://utopia.fyi/images/fluid-type-scale-visualisation.png). The font sizes for the 1024px screen are *interpolated* from the values at the `min` and `max` extremes. Basically, they're "somewhere in the middle", but in a consistent, proportional way.)'_

And then we do a similar thing for our spacings like paddings. And it can even be done for baseline grids.

If you want to understand more about the thinking behind this, here's a few articles going in depth(xxx).

The way I understand, people have been using `clamp` with formulas like this in their CSS for years. It was all about crunching a lot of numbers and doing everything by hand. Utopia simplifies the process. It's still the same math, but you don't have to own a wizard hat to use it.

Once I dug a little deeper, I found that it's also a kind design philosophy. And like all philosophies, it's opinionated and limited (link to that contrarian blog article), but hey, it's also free. And fun. And /r/oddlysatisfying.

### What will I learn?

-   a workflow which lets you actually apply the utopia design system to your project
-   how to use CSS variables in Tailwind and extend Tailwind's classes (so that the values from the design system show up in your IDE's autocomplete)
-   Figma bits

### Who is this for?

People who want to use the [utopia design system](https://utopia.fyi/) and want a step-by-step guide. People like me who both design and code. People obsessed with visual consistency.

NOTE
mb scratch or merge this with what will i learn

### Who is writing this?

I build websites and write tutorials. [Hire me!](xxx)

While working on this very site I ran down the rabbit hole of how to make text responsive. I found utopia, I think through [Kevin Powell], and it looked fun enough to try. And by fun I mean it scratched that consistency itch that makes me want to look at my CSS and see only 8 values in total.

## Guide

### Prerequisites

-   For developing the project: Basic knowledge of the command line and a code editor. You can find [a beginner-friendly guide on Tatiana Mac's blog](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-partii)
-   A basic knowledge of Figma and a free account. They have a pretty great [get started area](https://help.figma.com/hc/en-us/categories/360002051613-Get-started).
-   A basic knowledge of utopia: what it does, what the base font size represents. see here for an explanation(xxx). I'll be giving brief refreshers but I won't be going in depth.
-   A project with tailwind CSS set up. Can be empty, can be an existing one.
-   ❤️‍🔥

### Steps

#### Figure out min and max?

Whatever is appropiate for your project. I left the defaults - `min`: 320px, `max`: 1024px

#### Figure out the size of the biggest chunk of text of your project.

This is what utopia calls _base font size_. I will also call it 'body text'

You'll figure this out twice - once for smaller screen sizes and once for bigger ones. Utopia calls these thresholds `min` and `max`. Your body text will never get smaller than the `min`-font-size and never greater than the `max`-font-size. You're basically choosing a range of acceptable font sizes your body text.

You'll want to go into Figma and create a frame with a width of your `min`. I chose a device from the list that had a width close to my `min` then scaled it proportionally to the right width. That way I had a frame with proportions close to an actual screen.

You can jump in and just make a lo/mid/hi-fi wireframe of whatever it is your making. The goal is just to figure out the base font size. Then later after generating your type and spacing scales you'll make a new frame and basically do a utopia redesign - consistently applying your scales and maybe even using a utopia grid.

Don't worry about headings, subheadings and any other text - you'll deal with those later and they will be allowed to get bigger or smaller than the base text size. This is just about figuring out the size for the biggest chunks of text in your project.

NOTES
redundant, over-explainy. accept the prerequisite: reader should know about utopia.
OR explain utopia at the start

**Footnote**

1. I'm sure there are many places to start from, but it makes sense to figure this one out first, since the rest of te design system relies so much on these values. The creators of utopia talk about their workflow [in their grid article](xxx).

2. Utopia [encourages you](https://foo.bar) to not think of these `min` and `max` threshholds as representing devices like "min is for phones and max is for computer screens". Even though they are tied to screen widths. There's good reasons for that (source)

#### Choose a type scale

Go to utopia and play with the type scale - plug in different values and look at the output below. You might even take some of the generated numbers and plug them into your wireframes to see how they fit in.

In my case I wanted my current hero-text 'Hi, I'm Tom!' to be as large as possible without breaking line. So I played around with various scales until I got a value that just about fit in.

If you're anything like me, you will likely iterate on this - aka realize it doesnt work, slap your forehead (optional) and do it again. In short: there's no need to get it perfect the first time. For example, I changed the spacing around the hero text a few timesas well as the copy itself.

#### Go to Figma and run the utopia plugin

Get the plugin here(xxx) and run it. Either plug in the values from the previous step or copy the whole url into the plugin. Wait for like 20 seconds until it finishes working. Find the generated output somewhere on the canvas - it's a big bunch. Frame it. Put it somewhere where you can easily take a peek while you're designing. I was peeking at it pretty often.

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

For me, working without variables, there was not a silver bullet here. I simply had to keep all font sizes and spacing values within the system. Easy to do with text - pick only font styles from the generated list. With spacing, I had to plug in my utopian values again and again (hence - a lot of peeking)

If you set up your variables, use those.

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

## Resources

-   [Fluid Type](https://elisehe.in/2021/03/13/fluid-type) by Elise Hein talks about why do we care about fluid type in the first place? And is clamp really so great?

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod shows a way to implement a utopian design system with Tailwind CSS. Christian, You were here first, I'm just adding details.

-   an article on the historical context of the problem (xxx)

-   an article on the math behind the clamp solution (xxx)

-   maybe more about different approaches to fluid type (xxx)

-   for ideas, see stuff under 'review and deepen' in notion (xxx)

## META

NEXT STEPS:

-   write some steps
-   look at review and depen in notion
-   make demo gif
-   read utopia blog

### todo

-   [x] work on intro: more personable, move what will i learn before wtf?
-   [x] fix: extra space before links wtf
-   fix: make it so I can have spaces between list items in markdown without them going haywire in html
-   make links open in new tab
-   revise: shorten utopia-basics section; rewrite/break up 'big idea'
-   IDEA: make each step of the guide formatted like _succinct instructions (1 paragraph) --- detailed explanation and musings_. this could be visually reinforced by making the instructions stick out more than the musings (e.g. higher contrast), or even by hiding the explanation in a foldable element (use `<dt>`?)

### extra copy

You'll go through a workflow of using utopia's fluid scale generator to set up a design system, setting it up so you can work with it in Figma and then implementing it with tailwind CSS.

#### ## wtf

If You looked at utopia and find it fascinating but a little hard to grasp, then You're like me. I had to read several articles on their blog to get a good picture. For me it wasn't a thing of just diving in, even though the UI looks fairly simple.

Here's some questions I had in the beginning and some answers I found:

-   "what's root font size? what's type sale? why are there two screens"
-   --- then reading a bunch of articles and learning that: the root font size tends to represent the body text; the type scale represents an algorithmic palette of font sizes which tends to differ on each screen; and this is about interpolation, hence two screen sizes

xxx link to some helpful articles on utopia blog

### alt titles

how to use utopia with figma and tailwind
