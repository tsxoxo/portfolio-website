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

This one's half cronological, half wild ramblings.

## Things that have happened, timeline-wise

-   I've looked into ways of modelling this app
    -> I've decided to start from a template instead of from scratch

-   I've researched animation tech: GSAP vs. Vue's `<Transition>`
    -> I've decided to use `<Transition>` until I feel like I need GSAP

-   I've run into a persistent bug (hehe)
    -> I've decided to move on for now

## Things that have happened, emotion-wise

I've put some hours into this project since the last devlog. Did a lot of research. Rebooted the app. I've spent a lot of time debugging a technical problem with Xstate. (For the nerds: it's about persisting state with spawned actors, see details in this Github discussion(xxx)).

It went a little like this (copied from my Notion 'thoughtstream'):

-   first task: add persistent storage
-   done, thank goddess for vueuse. it’s so simple
-   _(...) some other tasks_
-   work on first transition
-   whats this bug? Am I using transition wrong?
-   OK, this is seriously breaking this app, let’s strip it down and remove everything I just added.
-   oh… it’s still broken. was it always broken?
-   Try many ideas and refactorings
-   ohhh, it seems to be a problem with the persistent storage (I think)…
-   I think this was always broken — I just didn’t test persisted storage properly.
-   Stay up way too late trying to fix this

Within this story, there's a pattern happening that I know from previous projects. In this case, I would have caught this bug way earlier if I was building tests with each feature. That much is obvious. And that would have saved me considerable confusion. And still -- I feel reluctant to learn testing now: it feels like such an aside.

Always this tension: do I use this project to learn (thus taking exponentially more time) or do I get this done fast? So far, I've been taking a two-pronged approach in my work: I simultaneously do a LOT of research before choosing a library, and don't take the time to really LEARN a topic. That's not really true, but that's how it feels right now.

Even earlier, there was a similar issue with the code I inherited from my chosen template. There's some things that are deprecated by now. I could rewrite them, but... I shudder and shout _no!_. Because deep down, I want to code as little as possible. What I wanna do is... is... is... make music. There, I said it.

## Focus, damn it!

I think I need to bring this back to its stated purpose: basically, I want to have a nice looking thing for my portfolio.

I need a win. I wanna animate something, dammit.

It feels like I've lost myself in the details here. I'm kind of exhausted after working on this bug for however many hours.

It's a bit difficult moving on from this bug, tho. The question now is: is there even a solution to my problem within Xstate or do I need to switch my tech stack here?

## Is it failure yet?

It's a funny thing, failre. An involuntary violation of an expectation. Or something like that.

Working on some problems can make me ponder such things. After reading a dozen Github threads, trying half a dozen different approaches, and basically setting up camp in the Xstate docs, I'm still where I was like a week ago: the thing ain't working. And then I come to ask questions like: did I do this wrong? Did I waste time on this? Should I have moved on from this sooner or looked through other, more creative solutions instead of running against this wall again and again?

I feel like if I were to do this again, I would ask for help sooner, instead of trying it on my own for so long.

## When do I use it?

So many articles talking about how to use GSAP with Vue. So few talking about _when_ to use GSAP with Vue. Or, more generally, when to use GSAP in a web project instead of CSS animations, for example.

It seems like nobody mentions these question at all. And this is all I care about, when I'm researching a new field and see half a dozen different tools doing 'basically the same thing': When do I use which?

Am I the only one who cares about this? Do the ppl with experience know? Is the answer maybe too obvious? Or is this knowledge so context-dependent that it's impossible to give anything more than a vague high-level answer like "whatever your project requires"? Or maybe the pros forgot how burning of a question this is on a beginner's mind?

I don't know. There's not even attempts out there. Or, if they are, they are harder to find than I was willing to search.

I feel like even if this were a hard question (rather than an obvious one), we could give people some useful information to make informed choices. Maybe we could simplify and say,

_with these things being equal:_

-   knowledge (I'm gonna be learning any tool from scratch)
-   the quality of each tool's documentation
-   the requirements of the codebase (e.g. Vue)

_which tool would bring me which advantages?, for example a smaller bundle size, smoother animations, or advantages I didn't even know existed, because I'm new to the field._

## I wish...

-   stately.ai would allow me to put spawned actors on my statechart. Half the reason I wanted to use Xstate is to _see_ what I'm doing.
-   discussions of the type 'when to use X' were more common than none-at-all
-   I was better at testing than 'I've used Jest once'
-   'small' bugs would stay small
-   I was quicker to move on instead of getting hung up on a 'small' bug
