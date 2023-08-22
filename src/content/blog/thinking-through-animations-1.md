---
title: Thinking through animations -- part 1
subheading: Modelling interactions with Xstate and Vue for fun and profit.
description: A devlog about building animations with Xstate and Vue.
socialImage:
    { filename: xstate-anim-figma-designs.png, alt: 3 designs for a todo app. }
pubDate: 21.8.2023
tags: [devlog, design, frontend]
isDraft: false
---

This is my brain churning away after hours whether I want to or not. I might as well write this down.

I'm doing some new things in my current project -- animations, state machines -- and I need an outlet for the inevitable frustrations.

Just so You know, I'll be throwing around jargon relating to the stack. Not because it's cool, but because I wanna let this be a stream-of-consciousness kind of thing.

If You want any of this to go into more detail, let me know. I can write a mean guide! (meaning, a very friendly one)

## So what _are you doing_?

I'm building a todo app. I wanna focus on interactions. I wanna design and build some animations.

Here's me trying to model just how to check off an item:

![screenshot of a pretty convoluted state flow chart](/assets/blog/pictures/xstate-anim-first-model.png)

I can already tell this is going to be fun.

### More context

My goals on this project are:

-   reality: build something interesting-looking for my portfolio
-   build a UI that _feels_ like something. I want feedback through animations

I'm also going to be using this app for my grocery shopping day-to-day, so I want this thing to shine ✨.

Here's my level of expertise:

I'm using state machines for the first time. I heard they were dope. Managing a UI like this has been on my _todo list_ for a long time.

I'm pretty new to animations. I've played with CSS transitions and animations and react-spring before, but this will be on another level. The vision is to use the state machines to control the animations.

Oh and I want there to be dragging. Also first time long time.

## Stack

-   Figma for designing and prototyping
-   stately.ai to visualize\think through the application
-   Xstate to implement the state machine
-   Pinia?
-   Vue.js as UI framework
-   unoCSS
-   smth smth animations

-   started with the Vitesse Lite template (shoutout to antfu!)

## Animations

I have some tools on my radar. It feels like there's gonna be a lot to try out:

-   Vue's native animation capabilities...
-   ... maybe combined with custom CSS animations
-   @vue/motion
-   GSAP
-   RIVE

## So far

### Prelude

I've built a todo app last year. Been using it ever since, buggy as it is. Messed around with animations there, quickly realized how midfuckingly complex they make everything and abandoned the concept. But now I've reworked the design, I've got the state machines, I've got insomnia, so let's goooo!

### Design

-   Made some designs
    ![Screenshot of 3 designs in Figma, one grey two green. Much gradients.](/assets/blog/pictures/xstate-anim-figma-designs.png)

-   Prototyped some animations
    <video controls preload='metadata'>
    <source src="/assets/blog/pictures/xstate-anim-figma-proto-1.webm" type="video/webm" ></source>
    	Your browser doesn't support embedded videos, but You can <a href="/assets/blog/pictures/xstate-anim-figma-proto-1.webm">download it as a WEBM file</a>.

    </video>
    <video controls preload='metadata'>
    <source src="/assets/blog/pictures/xstate-anim-figma-proto-2.webm" type="video/webm" ></source>
    	Your browser doesn't support embedded videos, but You can <a href="/assets/blog/pictures/xstate-anim-figma-proto-2.webm">download it as a WEBM file</a>.

    </video>

This is still pretty lo-fi. I realized I know so little about how to actually build and choreograph animations in the browser that I better not go to far into this. I feel there's gonna be iteration (compromises) here. I would maybe love for my todo items to become fluid like water when they get checked off, but building that (and keeping performance... fluid, hhehe) is another matter.

I'm gonna come back to designing once I get a grip on the technical limitations. I wanna especially find out

-   how the spring animations of @vue/motion jibe with the dragging
-   how easy it is to choreograph animations

Especially with the dragging and checking off it will be a matter of trying it out with my hands to see what _feels right_. And there's of course performance issues. I want no less than buttery smooth.

### Project setup

-   Set up a basic Pinia store. Not sure how this will interact with Xstate
-   Implemented the C in CRUD. Items are stored in `localStorage` <3
-   Skeleton styling

![Screenshot of the implemented project.](/assets/blog/pictures/xstate-anim-implemented.png)

Also, a Notion page because can't have anything in my life happening without managing it in Notion. I'll be writing about writing this article there, later.

### Modelling

I did this for the first time today -- making a statechart in the Xstate ecosystem. It got kind of intense. I think this is what made me write this piece here in the first place.

This is me seriously learning Xstate and state machines for the first time. I come to it with like the most basic of basic understanding ("there are states and transitions, aha") but pretty much everything else is new.

I spent most of the day reading the docs and designing several machines focusing on just a single interaction: checking off an item. Mind you, checking off an item will be done by dragging it to one side. Think archiving stuff in Gmail or adding a song to your queue in Spotify.

So what's the big deal -- you drag, and it gets checked off, right?

Right, easy stuff -- until you add transitions.

### A sample problem

Say you check off an item -- meaning you dragged it to the right -- what happens next? Well, I want it to pop out of existence and move on to the next life (on the DONE list). This popping out will be animated in some way. After it's gone, there will be a gap -- we'll miss you, todo item.

Then I'd like the rest of the list to scooch and fill dat gap in a smooth motion. Seems easy enough to do with Vue's `<Transition>`. (I call this part "list-reordering".)

But, **hmm**, I often open my todo app and then check off several items one after the other: bam bam bam! So how would that jive with the above sequence of events then?

I see two options:

A. After an item gets checked off, the app 'locks itself' into the list-reordering animation. I have to wait for that to finish, and onlt THEN I can check off the next item.

B. OR, after an item gets checked off, the list doesn't fill dat gap immediately. Instead, there is a window of time where the list stays put and I can check off the next item right away. Only when I'm done and lift my finger from the screen for good, does the list reorder itself and fill all the gaps at once.

I vote for option B. That seems like the road I wanna go. It also leaves room for implementing some kind of combo reward-feedback, which I'd also really like to do. (Nothing like a m-m-m-mULTIKILL in a supermarket.)

So how do you model this process? I tried 3 ideas so far: first with an if-then (see the very first image in this article), then a flag, then a sub-state. This is the sub-state attempt:

![Screenshot of a statechart.](/assets/blog/pictures/xstate-anim-statechart-substate.png)

Doing this one, I started to realize how deep my ignorance goes.

### The depths

It's all connected: how do I model animations? How do I model the items? Does it make sense to make them actors? What kind of actors? Would it cause performance issues to have many state machines 'running' at the same time? I'm sure it wouldn't help.

So that's where I'm at now. I'm starting to scratch the surface of what I don't know. So I can at least put my confusion into words. Progress takes many forms.

---

## Next steps

I wanna get specific:

-   research how to model animations with xstate -- read guides, look at examples
-   look at other relevant examples: todo-lists using xstate, vue apps using xstate
-   possibly, if I'm sick of looking and reading, implement dragging

---

Let me know if You want more!\
Until next time,\
Tom
