---
title: 'Architecture'
layout: 'guide'
---

### Architecture

Locomotive is architected to make it easy to develop web applications while
encouraging the use of best practices.  Locomotive is powered by high caliber
[Node.js](http://nodejs.org/) modules and promotes time-tested design patterns,
yielding applications that have high performance and horizontal scalability.

#### MVC: Model View Controller

At the core of Locomotive is the [Model View Controller](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
design pattern, often referred to simply by its abbreviation MVC.  MVC improves
the architecture of an application by separating the user interface (the _View_)
from the underlying data (the _Model_).  Logic in the controller is used to bind
the model and the view.

This separation of concerns helps to organize code, making it quicker to develop,
cheaper to maintain, and easier to test.

(Aside: Design pattern enthusiasts will note that MVC, as implemented by
Locomotive, is more accurately termed [Model 2](http://en.wikipedia.org/wiki/Model_2).
Because the distinction is not widely known, this guide will continue to use
MVC to refer to the pattern.)

##### Model

The model represents the data used by an application, and the rules to
manipulate that data.  This includes loading data from a database, and
validating data before storing it.

##### View

The view represents the user interface of an application.  In Locomotive, views
are often HTML files with embedded JavaScript.  A view is rendered by the
application in response to a request, at which point it is displayed to the user
in a web browser.

##### Controller

The controller provides the glue between the model and the view.  In Locomotive,
controllers process incoming requests from the web browser, loading data from
models and passing that data on to a view for presentation.

#### REST: Representational State Transfer

[REST](http://en.wikipedia.org/wiki/Representational_state_transfer) is a set of
architectural principles for building distributed systems, and has emerged as the
predominant model for designing web services.

The concepts were introduced by [Roy T. Fielding](http://www.ics.uci.edu/~fielding/)
in his doctoral thesis: [Architectural Styles and the Design of Network-based Software Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).
While there are many details that can be analyzed in depth, in terms of Locomotive
the following key points apply:

  * Use URLs to identify resources
  * Use standard HTTP methods to interact with resources
  * When needed, represent a resource with multiple data formats
  
Locomotive provides resource routing that makes it easy to follow REST
guidelines.

For a more detailed introduction to REST, the following articles are recommended
reading:

  * [A Brief Introduction to REST](http://www.infoq.com/articles/rest-introduction) by [Stefan Tilkov](http://www.innoq.com/blog/st/)

#### Components of Locomotive

The Node.js community has embraced an [aesthetic](http://substack.net/node_aesthetic)
characterized by minimalistic modules and radical reusability.  Locomotive
follows suit, reusing existing modules while layering on only the necessary
amount higher-level structure.  It does this while preserving flexibility,
allowing developers the freedom to chose exactly which database and template
engine best suits the requirements of their application.

##### HTTP Middleware

The [Express](http://expressjs.com/) and [Connect](http://www.senchalabs.org/connect/)
combination has set the de facto standard for HTTP middleware in Node.js.

Locomotive builds entirely on top of Express - every Locomotive application is
also an Express application.  This ensures seamless compatibility with the wide
variety of Connect-compatible [middleware](https://github.com/senchalabs/connect/wiki)
that has been developed.

##### Template Engines

Express has also set the de facto standard for pluggable template engines in
Node.js.

Locomotive inherits the view layer provided by Express, again ensuring seamless
compatibility with [EJS](https://github.com/visionmedia/ejs), [Jade](http://jade-lang.com/),
and other [compliant](https://github.com/visionmedia/express/wiki) template
engines.

##### Databases & ORM

Locomotive does not provide a model layer of its own, recognizing that in the era
of big data and real-time events, the challenges faced by modern web applications
demand [polyglot persistence](http://martinfowler.com/bliki/PolyglotPersistence.html).

Rather than being trapped behind a restrictive and limiting abstraction,
developers are free to choose the database (or databases) and object mapping
layer that best fits their needs.
