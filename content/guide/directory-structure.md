---
title: 'Application : Directory Structure'
layout: 'guide'
---

### Application : Directory Structure

Locomotive favors convention over configuration.  One of these conventions is a
well defined directory structure, making it easy to locate files in an
application.

<dl>
  <dt>app/controllers<dt>
  <dd>Contains the controllers that handle requests sent to an application.</dd>
  <dt>app/models<dt>
  <dd>Contains the models for accessing and storing data in a database.</dd>
  <dt>app/views<dt>
  <dd>Contains the views and layouts that are rendered by an application.</dd>
  <dt>config<dt>
  <dd>Configuration for the application, including routes, databases, etc.</dd>
  <dt>config/environments<dt>
  <dd>Environment-specific configuration.  For example, _development_ and
      _production_ are two environments that require different settings.</dd>
  <dt>config/initializers<dt>
  <dd>Initialization code that is executed before the applications starts.</dd>
  <dt>public<dt>
  <dd>Static files and compiled assets served by the application.</dd>
</dl>
