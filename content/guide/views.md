---
title: 'Views'
layout: 'guide'
---

### Views

Views are used when rendering a response to a request.  Views are processed by
template engines which compile the view and substitute variables to produce the
final output.

Locomotive delegates all rendering to [Express](http://expressjs.com/), ensuring
seamless compatibility with [EJS](https://github.com/visionmedia/ejs),
[Jade](http://jade-lang.com/), and the [many](https://github.com/visionmedia/express/wiki)
[other](https://github.com/visionmedia/consolidate.js) compliant template engines.

#### Settings

By default, Locomotive uses [EJS](https://github.com/visionmedia/ejs) as its
template engine.  That is easily changed by setting the `view engine` option in
`config/environments/all.js`:

```javascript
this.set('view engine', 'jade');
```

When rendering, Locomotive finds templates using a `name.format.engine`
convention, resulting in file names such as `show.html.ejs`.

Some template engines, such as Jade, internally locate layouts using just the
engine as a extension (for example, `layout.jade`).  This results in a mixed
set of conventions that can cause confusion.

To avoid this, a format can be mapped to an explicit convention:

```javascript
this.format('html', { extension: '.jade' })
```

With that setting in place, a call to `render('home')` would render the template
named `show.jade`.

#### Selecting an Engine at Render Time

Controllers can selectively override the application's default template engine
in the call to render:

```javascript
PhotosController.show = function() {
  this.render({ engine: 'ejs' });
}
```

This feature is not widely used, but can come in handy when one or two pages
in your site follow a different layout or are self-contained in an EJS template.
