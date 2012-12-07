---
title: 'Application'
layout: 'guide'
---

### Application

A Locomotive application is a web application that declares RESTful routes and
handles requests using controllers, models, and views.  Locomotive applications
are organized according to a set of conventions, simplifying configuration and
initialization.

Locomotive extends [Express](http://expressjs.com/) in the same way that Express
extends [Connect](http://www.senchalabs.org/connect/).  All Locomotive
applications are Express applications, enhanced with the MVC design pattern and
RESTful routing, while preserving the power of middleware and support for
template engines.