---
title: Thinking through animations -- part 2
subheading: Modelling interactions with Xstate and Vue for fun and profit. A devlog.
description: Modelling interactions with Xstate and Vue for fun and profit. A devlog.
socialImage:
    { filename: xstate-anim-figma-designs.png, alt: 3 designs for a todo app. }
pubDate: 21.8.2023
tags: [devlog, design, frontend]
isDraft: false
---

## Things that have happened

-   I've looked into ways of modelling this app
-   I've decided to start from a template instead of from scratch
-   I've researched animation tech
-   I've run into a persistent bug (hehe)

## I need a win

I've put some hours into this since last time. The last few were spent debugging a very technical problem with Xstate. (For the nerds: it's about persisting state with spawned actors, see details in this Github discussion(xxx)).

I think I need to bring this back to its stated purpose:

![Screenshot of a Notion page: basically, I want to have a nice looking thing for my portfolio.](/assets/blog/pictures/think-anim/2/notion-vision.png)

The problem: I don't know if there's a solution to my problem within Xstate. Do I need to switch my fundamental tech here?

It feels like I've lost myself in the details here. I'm kind of exhausted after working on this bug for however many hours.

I need a win. I wanna animate something, dammit.

## Is it failure yet?

It's this funny thing, failre. An involuntary violation of an expectation. Or something like that.

I feel like if I were to do this again, I would ask for help sooner, instead of trying it on my own for so long.

## When do I use it?

So many articles talking about how to use GSAP with Vue. So few talking about _when_ to use GSAP with Vue. Or, more generally, when to use GSAP in a web project instead of CSS animations, for example.

Is this too obvious? -- whenever you want, whenever your project requires it, whenever you get into complex animations

I get the complex animations. Having a timeline would help with that, I imagine.

But nobody mentions this at all. And it's all I care about, when I'm researching a new field: all of these tools. When do I use which?

Am I the only one who cares about this? Do the 'pros' (ppl with experience in the field) know but don't share their knowledge? Maybe they forgot how burning this question is on a beginner's mind? Or do they not even attempt to explain, because the reality is so complex, as to make a general answer totally theoretical -- it which tool to use depends on a million things, from your project, to the organization managing it, to your proficiency with it, etc...

But is there not a place for an answer if we make some of these things equal:

-   knowledge being equal (I'm gonna be learning any tool from scratch)
-   the docs around each tool presumed equally helpful
-   the codebase requiring x (e.g. Vue)

which tool would bring me which advantages (e.g. smaller bundle size, smoother animations, advantages I didn't even know existed, because I'm new to the field).

## I wish...

-   I wish stately.ai would allow me to put spawned actors on my statechart. Half the reason I wanted to use Xstate is to _see_ what I'm doing.
-   I wish discussions of the type 'when to use X' were more common than 0
-   I wish I was better at testing
-   I wish 'small' bugs would stay small
-   I wish I was quicker to move on instead of getting hung up on a 'small' bug

## Not really roadblocks, but things taking more time than expected

Hmmm. sounds a bit like \*I can't do it the way I wanted, so I need to take another approach

## Priorities

Some things were lost in this recent debugging. I actuall

## Maybe lessons

-   Learn testing?
-   Don't get hung up on bugs?
