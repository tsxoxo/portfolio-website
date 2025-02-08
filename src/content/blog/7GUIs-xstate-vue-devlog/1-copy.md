---
series: Building the 7 GUIs using Xstate and Vue -- a devlog.
slug: building-interactions-xstate-vue-1
part: 1
title: Where are the states?
description: Where I look back on these 7 tasks and wonder
socialImage: { filename: '', alt: '' }
pubDate: ''
tags: [devlog, frontend, fsm, xstate, vue]
isDraft: true
---

# Goals

- Sharing research results
- Thinking after hours, project review
- Asking for help

# Baffled

- How few states I had to use. (The heart of FSM, no?) The pattern that I've used again and again: self-transition, update context. Here's my most complex state diagram (show... te most complex one -- timer?) The diagram for the last task -- the spreadsheet app -- looks like this (show). It's been by far the most advanced task in terms of coding, and this is all it is from a state machine perspective. Baffled
- Am I doing it wrong? I realize (have heard) there's more than one ways to model -- example? Am I doing it wrong? Any feedback is appreciated
- I realize that these tasks are fairly straightforward compared to the average modern web app -- they stay squarely in the realms of the synchronous.

# Ideas

- I'm tempted to add async behavior, to spice things up -- put a database here, add an animation there.
- Especially with the animations, I'm curious if you would bind them to state and bind the actual UI appearance to state? Like: states: state1(onInteraction) -> transitioningState -> state2
- Go back and make these more presentable. One presentation idea would be to conjoin them into a dashboard that would cool in a case study. This would be a project in itself. A. Making them visually consistent B. Designing the dashboard C. Probably some refactoring and improvements in each D. Implementing the dashboard on my site (as an island of interactivity -- that sounds like fun!)
- Go back and add tests. Get comfortable with A. Component testing B. Xstate path traversal testing
