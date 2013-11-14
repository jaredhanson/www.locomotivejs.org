---
title: 'Get Started'
layout: 'guide'
---

### Get Started

The quickest way to get started with Locomotive is to create an application
skeleton using `lcm`, the CLI included with Locomotive.  Install Locomotive
globally from [npm](http://npmjs.org/) to make the command available on your
system.

#### Install Locomotive

```bash
$ npm install locomotive -g
```

#### Create an Application

Now we can create an application, using `lcm create <name>`.  In this quick
tutorial, we'll create an app named _hello_.

```bash
$ lcm create hello
```

Now we'll switch into the newly created directory containing our app and
install dependencies.

```bash
$ cd hello
$ npm install
```

#### Start the Server

```bash
$ lcm server
```

Our new app is now up and running at [localhost:3000](http://localhost:3000)!

*Note:* Install supervisor via ```npm install supervisor -g``` if you use ```lcm server -w``` for reloading the server on file changes.

#### Explore the Code

The application skeleton is simplistic, but the code it contains has helpful
comments and useful tips.  It is worth taking a moment to browse through the
code to get a sense of how a Locomotive application is structured.  Then
continue reading this guide for details on how the pieces fit together.
