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

[Utopia](https://utopia.fyi/) is basically a tool to help with responsive design - meaning text and spacings adjusting to the user's screen size. The basic idea is this: design with a modular scale for the smallest screen, design with another [modular scale](https://utopia.fyi/blog/css-modular-scales/) for the biggest screen, and let math do the rest for you in between. I'm pretty much citing [this blog post](https://utopia.fyi/blog/designing-with-fluid-type-scales/).

Don't know what a modular type scale is? Can't really imagine how math is going to help You here? Or how You would use any of this in your actual project? Fear not, read on, You might learn something. I'm going to give You prep You enough You can follow the step-by-step guide. And I'm going to point out the stuff I found extra helpful in letting me understand this thing.

#### Official resources

They have a nice interactive demo on their landing page showing off the idea (follow the link in the previous paragraph). They explain themselves in [this youtube video](https://www.youtube.com/watch?v=DDuGtN-GakA), which is 18 minutes. And in their [blog](https://utopia.fyi/blog) they do a good job of covering various aspects of their system - I think the general idea is laid out concisely in the blog post mentioned in the previous paragraph ([here](https://utopia.fyi/blog/designing-with-fluid-type-scales/) it is again).

It took me a while to wrap my head around it. Meaning that I sat confused in front of their UI for a while, then read like 6 of their blog articles, then watched their intro video. Then I did my civic duty and complained in their youtube comments that their system could be more accessible to newcomers.

I don't necessarily find the concept super hard (especially once I got it, hehe), but it was a mystery for me how to actually use this system - where do I start? What's `font size` stand for in the Utopia UI? Ok, it spit out some CSS, but can I design with this in Figma (without it being super cumbersome)?

In the end I found a way (I think, fingers crossed 🤞🏼). But it was by grasping on to straws - part of [a workflow laid in a blog post](https://utopia.fyi/blog/designing-a-utopian-layout-grid/), a plugin found on Figma, another blog showing how to implement it with Tailwind(xxx). I would have loved a little something a little more comprehensive, more hands-on, bringing it all together. That's my story.

But who knows - maybe You wouldn't be reading this guide if this author hadn't gone through an initial period of confusion and frustration. I bet that's the driving force behind at least half of the tutorial industry. I'm gonna show them how to be welcoming to beginners. Gonna show them all.

#### So, how much do I need to understand to use this thing?

Well, to follow this guide, you should have a basic understanding of the fundamentals: the basic idea behind utopia and the 'seeds' it uses to generate a system for you, namely: `min`, `max`, `base font size` (called 'font size' in the utopia UI) and `type scale`.

If You're not in the mood to go through the official resources, here's the way it works, as I see it, unoficially:

You go to their website, plug in a handful of values and it spits out some CSS variables that you can copy and use in your project. For example:

`--step-0: clamp(1.00rem, calc(0.83rem + 0.83vw), 1.50rem)`

What that does is make sure your text never gets smaller than 1.00rem, never gets bigger than 1.5rem, and is fluid in between (meaning it changes according to screen size).

It's a solution to the old _stay responsive, stay consistent_ set of problems we web designers face every single day. (Every day I live in a society.)

As you can see from the example above, this solution involves math that can get quite intense. None of these values, like `0.83rem`, are random. In fact, baked into that formula are all of the 6 values you plug into the Utopia UI: widths, base font sizes and type scales for both `min` and `max`.

**The big idea is this**: Thinking about the problem of how to make my website responsive let's say, _'I want my body text to never go smaller than, say, 16px (`base font size`) and I want it to hit that limit on a screen 320px wide (`min width`). And on that screen I want to work with a palette of font sizes that each grow by a factor of, say 1.2 (`[type scale](https://utopia.fyi/blog/css-modular-scales/)`). I give myself the same sort of limitations at the upper threshold (`max`). And since I have more space to distribute on bigger screens, I usually choose a different, sharper type scale, meaning I'll have proportionally bigger text to work with, e.g. for headings. And now that I have the two extremes figured out (smallest and biggest screens), I want any screen that's in between to interpolate my actual font size. (Interpolate is a fancy word which is really hard to explain but really simple to show. Look at [the first diagram in this article](https://utopia.fyi/blog/designing-with-fluid-type-scales/). [Backup link to just the image](https://utopia.fyi/images/fluid-type-scale-visualisation.png). The font sizes for the 1024px screen are *interpolated* from the values at the `min` and `max` extremes. Basically, they're "somewhere in the middle", but in a consistent, proportional way.)'_

And then we do a similar thing for our spacings like paddings. And it can even be done for baseline grids.

If you want to understand more about the thinking behind this, here's a few articles going in depth(xxx).

The way I understand, people have been using `clamp` with formulas like this in their CSS for years. It was all about crunching a lot of numbers and doing everything by hand. Utopia simplifies the process. It's still the same math, but you don't have to own a wizard hat to use it.

Once I dug a little deeper, I found that it's also a kind design philosophy. And like all philosophies, it's opinionated and limited (link to that contrarian blog article), but hey, it's also free. And fun. And /r/oddlysatisfying.

NOTES

-   "fluidly interpolating between two modular scales, one for smaller screens, and one for larger screens"
    https://utopia.fyi/blog/css-modular-scales/

1. Define a type scale for a small screen
2. Define a type scale for a large screen
3. Tell the browser to interpolate between the two scales, based on the current viewport width

I designed these (min and max), maths designed this (everything in between)
https://utopia.fyi/blog/designing-with-fluid-type-scales/

because Utopia is declarative, we only need to visualise the smallest and largest states, which we call @min and @max. Everything in between will be displayed according to the rules we set.
https://utopia.fyi/blog/designing-a-utopian-layout-grid/

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
-   A basic knowledge of utopia: what it does, what the base font size represents. Here's an [all-around introduction written by the creators](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/)(11 min read), [here's an intro in video form](https://www.youtube.com/watch?v=DDuGtN-GakA)(18 minutes). And here's [their Figma starter project](<https://www.figma.com/file/V5t7R4xCfEwmyafLC2GkDI/Utopian-project-kickstarter-(Community)?type=design&node-id=651-506&mode=design&t=grMFbdzA3bJLN3eu-0>) where they lay out the basics in a more hands-on way - and with lots of diagrams! I'll be giving brief refreshers but I won't be going in depth.
-   A project with tailwind CSS set up. Can be empty, can be an existing one.
-   ❤️‍🔥

### Steps

Some if not all of the steps are just me following this [kind-of-guide from the Utopia blog](https://utopia.fyi/blog/designing-a-utopian-layout-grid/). It was an especially exciting read for me because it acknowledges that designing is a messy process. Second guessing your desicions is part of it, even for experienced designers. I love it when I hear competent people, in whatever field, talk from that place where it becomes clear that competency is a fragile concept. We're all winging it, making mistakes and then try to do better mistakes.

If You ever get stuck here with me or would like to have a companion piece, open that article.

Also, for a guide that also teaches You how to use Utopia with Tailwind but is less verbose and more to the point, go [here]. It doesn't deal with Figma tho. For that, You're gonna have to stay and suffer.

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

### The other guide

-   [Tailwind CSS Responsive Design Without Breakpoints](https://christianpenrod.com/blog/tailwindcss-responsive-design-without-breakpoints/) by Christian Penrod shows a way to implement a utopian design system with Tailwind CSS. Christian, You were here first, I'm just adding details.

### Utopia stuff

-   [Meet Utopia: Designing And Building With Fluid Type And Space Scales](https://www.smashingmagazine.com/2021/04/designing-developing-fluid-type-space-scales/) by the Utopia creators gives you a pretty nice all-around introduction: it lays out the problem, gives some historical context, talks about how the idea came together and lays out the resulting system, even hinting at a workflow here and there.

-   [Designing a Utopian layout grid](https://utopia.fyi/blog/designing-a-utopian-layout-grid/) by James Gilyead from the Utopia team is where I got the closest thing to a step-by-step guide when I was getting into it. Blogpost, You were my rock, You were my guiding star, You were my lighthouse.

-   [The official guide to the Utopia Figma plugins](https://utopia.fyi/blog/get-started-with-utopia-figma-plugins/) does what it says.

-   [The official starter project on Figma](https://www.figma.com/community/file/1122903924123950023)

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

-   keep revising starting from 'what will i learn'
-   put on google docs
-   share with thays
-   share with yemi

### todo

-   [x] skim utopia blog - steal phrasing to explain, collect links to specific topics, take general notes
-   [x] work on intro: more personable, move what will i learn before wtf?
-   [x] fix: extra space before links wtf
-   [x] write some steps
-   [x] look at review and depen in notion
-   [x] mention official demo gif

-   add: make own demo gif?
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
