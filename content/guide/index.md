---
layout: 'guide'
title: 'Overview'
---

### Overview

Locomotive is a web framework for [Node](http://nodejs.org/) that makes building
web applications easier.  Locomotive provides strong support for [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
patterns and [REST](http://en.wikipedia.org/wiki/Representational_state_transfer)
principles, leading to well-architected applications.  Locomotive favors
convention over configuration, making developers more efficient.  It does all
this without sacrificing any of the power you've come to expect from Node.

When choosing a technology stack, developers are drawn to Node for its
event-driven, non-blocking I/O model, which makes it higly effective for
building _network_ applications in general.  While this is a powerful foundation
to build on, it does not address the needs of _web_ applications in particular.

[Express](http://expressjs.com/) and [Connect](http://www.senchalabs.org/connect/)
have set the de-facto standard for web applications in Node, centered around the
effective use of HTTP middleware.  Express is an incredible framework, but its
minimal nature leaves some questions unanswered:  How should an application's
code be structured?  Where should an application's files be located?

Locomotive answers these questions.  Best of all, it builds entirely on top of
Express - every Locomotive application is also an Express application.  If
you're already familiar with Express, all your knowledge applies equally well to
Locomotive.  If you're new to Node web development, Locomotive provides the
structure you need, without sacrificing the flexibility of a more minimal
framework when its appropriate.

Developers coming to Node from other frameworks such as [Ruby on Rails](http://rubyonrails.org/)
will feel immediately comfortable.  Rails revolutionized web development,
setting the bar by which other frameworks are measured.  Locomotive embraces the
concepts introduced by Rails, while tailoring them to the idioms of Node.

The end result is a framework that is both familiar, yet able to meet the
demands of the modern web.  Let's [get started](/guide/get-started)!
