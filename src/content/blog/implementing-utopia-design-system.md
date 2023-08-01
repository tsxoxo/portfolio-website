---
title: Implementing a utopian design system
subheading: A hands-on guide.
pubDate: 20.7.2023
tags: [design, design system, tailwind, utopia]
draft: true
---

You'll learn how to build a website with the wonderful [utopia design system](https://utopia.fyi/) using its fluid scale generator, Figma and Tailwind CSS.

## Table of Contents

-   WTF

1. Guide
2. Story
3. Resources

## WTF

If you know what you want and wanna jump right in, skip to the guide().

### What is utopia?

Utopia is basically a tool to help with responsive design - meaning text and spacings adjusting to the user's screen size.

They have a nice gif demo on their website(xxx). This youtube video explains the basics(xxx). And here's an article that covers the idea(xxx). To follow this guide, you should have a basic understanding of the fundamentals: `min`, `max`, `base font size`.

If You're not in the mood, here's the way it works:

You go to their website, plug in a handful of values and it spits out CSS that you can copy into your project. For example:

`--var()`

What that does is make sure your text never gets smaller than xxx, never gets bigger than yyy, and is fluid in between (meaning it changes according to screen size).

It's a solution to the old _stay responsive, stay consistent_ set of problems we web designers face (every day I live in a society).

As you can see from the example above, this solution involves math that can get quite intense.

The way I understand, people have been using formulas like this in their CSS for years. It was all about crunching a lot of numbers and doing everything by hand. Utopia simplifies the process. It's still the same math, but you don't have to own a wizard hat to use it.

Once I dug a little deeper, I found that it's also a kind design philosophy. And like all philosophies, it's opinionated and limited (link to that contrarian blog article), but hey, it's also free.

### What will I learn?

-   a workflow which lets you actually apply the utopia design system to your project
-   how to use CSS variables in Tailwind and extend Tailwind's classes (so that the values from the design system show up in your IDE's autocomplete)
-   Figma bits

### Who is this for?

People who want to use the [utopia design system](https://utopia.fyi/) and want a step-by-step guide. People like me who both design and code. People obsessed with visual consistency.

### Who is writing this?

I build websites and write tutorials. [Hire me!](xxx)

While working on this very site I ran down the rabbit hole of how to make type responsive. I found utopia, I think through [Kevin Powell], and it looked fun enough to try. And by fun I mean it scratched that consistency itch that makes me want to look at my CSS and see only 8 values in total.

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

2. Utopia [encourages you]() to not think of these `min` and `max` threshholds as representing devices like "min is for phones and max is for computer screens". Even though they are tied to screen widths. There's good reasons for that (source)

-   Go to utopia and play with the type scale (you will likely iterate on this - aka realize it doesnt work, slap your forehead (optional) and do it again. in short: there's no need to get it perfect the first time)
-   go to figma and run the utopia plugin with the values from the previous step (you can also just copy the url into the plugin) wait for lke 20 seconds until it finishes working. find the generated output somewhere on the canvas. frame it. place it close to where you're working. i was looking at it pretty often.
-   now here might be a good case to use the new variables feature in Figma. put all of these values there and you dont have to look them up. you could even map min and max to their own modes. could be interesting. i was ready to do that but unfortunately figma restricts free accounts to 1 mode only. if you sponsor me, id be happy to do this and add to the guide!
-   keep designing. if you set up your variables, use those. If you didn't then simply keep every font size and every spacing value within the system
-   i forget where i read this but the idea was to use grid and flexbox as much as possible. so that most of your frames in figma will be governed by auto layout and most of the spacing decisions will refer to gaps and padding values within these frames. later these will easily translate to flexbox and grid layouts.
-   the folks at utopia have made another useful plugin to use when you want to change the type face. It changes the font styles in multiple layers, perfect if you want to update your existing master-frame.
-   When you're happy with your design system, go to `utopia.fyi` and copy the output into your project. I copied mine into a `base.css` file and then referenced the variables in `tailwind.config.cjs`. A good reason for doing it like that is that I can easily copy and paste utopia's output into `base.css` again and again, however often I want to iterate. So now you should have something like

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

and then in your Tailwind config

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

-   Find and replace static values with fluid ones: search through all your files to find all the static values for spacings and text sizes. instead of typing in each padding (pt, pb, p-, px-, py)and doing the same for margin, etc., I wrote this regex that covers a lot (but not all) cases:
    `[\s"']([mp]|gap|space)-?\w?-\d`

(this relies on the fact that my fluid class names begin with a letter while those of tailwind begin with a digit (that’s the “\d” in the above regular expression))

## wtf

If You looked at utopia and find it fascinating but a little hard to grasp, then You're like me. I had to read several articles on their blog to get a good picture. For me it wasn't a thing of just diving in, even though the UI looks fairly simple.

Here's some questions I had in the beginning and some answers I found:

-   "what's root font size? what's type sale? why are there two screens"
-   --- then reading a bunch of articles and learning that: the root font size tends to represent the body text; the type scale represents an algorithmic palette of font sizes which tends to differ on each screen; and this is about interpolation, hence two screen sizes

xxx link to some helpful articles on utopia blog

Let me know especially if You got stuck, peeved or miffed with anything!

## Story

\*not many step-by-step ressources at the time of writing

-   this iis one workflow of many. i would love to know yours!

Any feedback is highly appreciated. Let me know especially if You got stuck, peeved or miffed with anything!

## Resources

-   [Fluid Type](https://elisehe.in/2021/03/13/fluid-type) by Elise Hein
    Why do we care about fluid type in the first place? And is clamp really so great?

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod
    Shows a way to implement a utopian design system with Tailwind CSS. Christian, You were here first, I'm just adding details.

some articles about fluid type

stuff under 'review and deepen' in notion

## META

NEXT STEPS:

-   write some steps
-   look at review and depen in notion
-   make demo gif

### todo

-   make links open in new tab

### extra copy

You'll go through a workflow of using utopia's fluid scale generator to set up a design system, setting it up so you can work with it in Figma and then implementing it with tailwind CSS.

### alt titles

how to use utopia with figma and tailwind
