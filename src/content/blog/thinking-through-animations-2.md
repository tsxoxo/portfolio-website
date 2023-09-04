---
title: Thinking through animations -- part 2
subheading: Modelling interactions with Xstate and Vue for fun and profit. A devlog.
description: Modelling interactions with Xstate and Vue for fun and profit. A devlog.
socialImage:
    { filename: xstate-anim-figma-designs.png, alt: 3 designs for a todo app. }
pubDate: 4.9.2023
tags: [devlog, design, frontend]
isDraft: false
---

This one's a collection of semi-related ponderings.

## Hard facts since last time

-   I've looked into ways of modelling this app\
    → and decided to start from a template instead of from scratch

-   I've researched animation tech: GSAP vs. Vue's `<Transition>`\
    → and decided to use Vue until I'm thirsty for GSAP

-   I've run into a persistent bug (hehe)\
    → and decided to move on for now

## A roadblock

I've put some hours into this project since the last devlog. Did a lot of research. Rebooted the app. I've spent a lot of time debugging a technical problem with Xstate. (For the nerds: it's about persisting state with spawned actors, see [this Github discussion](https://github.com/statelyai/xstate/discussions/4226)).

It went a little like this in my Notion stream of consiousness:

-   _task_: add persistent storage
-   done, thank goddess for vueuse. it’s so simple!
-   _task_: first transition
-   whats this bug? Am I using `<Transition>` wrong?
-   OK, this is seriously breaking this app, let’s strip it down and remove everything I just added.
-   oh… it’s still broken. was it always broken?
-   yes

... And then a few days of debugging.

### Is it failure yet?

It's a funny thing, failre. An involuntary violation of an expectation. Or something like that. Thing is, expectations can be wrong and ridiculous. _"This shouldn't take more than an hour"_, it might say. Yet. Here. We. Are.[^1]

Working on a tough problem can make me ponder such things. After reading a dozen Github threads, trying half a dozen different approaches, and basically setting up camp in the Xstate docs, I'm still where I was like a week ago: the thing ain't working. And then I start asking: Have I gone about this the wrong way? Have I wasted time here? Should I have moved on from this sooner or looked at other, more creative solutions instead of running against this wall over and over?

I feel like if I were to do this again, I would at least ask for help sooner, instead of trying it on my own for so long.

## When do I use it?

So many words have been said about how to use GSAP with Vue. And so few about _when_.

Nobody even mentions this question in the talks and articles I've seen. -- And this is all I care about! When I'm researching a new field and see half a dozen different tools doing 'basically the same thing' the issue on my mind is: _When do I use which?_

Am I the only one who cares about this? Do the ppl with experience know in a coherent way or is that knowledge too intuitive? Is the answer maybe too obvious? Or is it so context-dependent that you could at best say something trite like "whatever your project requires"? Or could it be that the pros forgot how burning of a question this is on a beginner's mind?

I don't know. I feel like even if this were a hard question (rather than an obvious one), we could give people some useful information to make informed choices. Maybe we could simplify and say,

_with these things being equal:_

-   knowledge -- I'm gonna be learning any tool from scratch
-   the quality of each tool's documentation
-   the requirements of the codebase (e.g. Vue)

_this tool would give you the smallest bundle size, this tool would give you the smoothest animations, and this tool would give you advantages you didn't even know existed, because you're new to the field and that's ok._

## I wish...

-   stately.ai would allow me to put spawned actors on my statechart. Half the reason I wanted to use Xstate is to _see_ what I'm doing.
-   discussions of the type 'when to use X' were more common than none-at-all
-   I was better at testing than 'I've used Jest once' (pls send good tutorials)
-   'small' bugs would have the courtesy to stay small
-   I was quicker to move on instead of getting hung up on a 'small' bug

## Footnotes

[^1]: See also the [concept of the "_Monitor_"](https://betterfamilytherapy.com/blog/burnout-pt2-how-do-deal-with-the-stressors) aka the "discrepancy-reducing/-increasing feedback loop".
