---
title: 'Controllers : Formats'
layout: 'guide'
---

### Controllers : Formats

Part of Locomotive's support for REST principles is the ability to represent a
single resource with multiple data formats.  In technical terms this is known
as content negotiation, as it gives a client the ability to specify what
format it prefers to receive in response to a request.

#### Settings

When rendering multiple data formats, it is advisable to use a template engine
suited to the format.  For example, [Jade](http://jade-lang.com/) is an excellent
choice for rendering HTML, but is not well suited for rendering XML or JSON.

Template engines for formats are typically configured in `config/environments/all.js`.
For example, the following declares that [xmlb](https://github.com/jaredhanson/xmlb)
be used when rendering responses in XML format.

```javascript
this.format('xml', { engine: 'xmlb' });
```

#### Respond

Responding with the requested format is done by calling `respond()`, which
takes an object containing format keys as an argument:

```javascript
PostsController.index = function() {
  this.respond({
    'xml': { template: 'feed' },
    'html': { template: 'index' }
  });
}
```

The above code will render `views/posts/feed.xml.xmlb` for any client that
requests content in XML format, while rendering `views/posts/index.html.ejs` for
clients wanting HTML.

`respond()` works by automatically calling `render()`, passing along any options
associated with the format key.  If default options are sufficient, the format
key can simply be set to `true`.  For example, because the template is
automatically derived from the action, the above could be reduced to:

```javascript
this.respond({
  'xml': { template: 'feed' },
  'html': true
});
```

##### Default Format

By default, if a client requests a format that is not supported, Locomotive will
respond with a `406 Not Acceptable` error.  If instead it is desired to respond
using a default format, set a `default` format key.

```javascript
this.respond({
  'xml': { template: 'feed' },
  default: { format: 'html' }
});
```

The above will continue to respond with XML to clients that request it, while
rendering HTML for all other requests (for HTML or otherwise).

##### Fine-Grained Handling

If an application needs to perform specific handling when responding with a
format, the format key can be set to a function.  Instead of automatically
calling `render()`, the function will be invoked allowing the application to
handle the request as needed.

```javascript
var self = this;
this.respond({
  'json': function() { self.res.json({ hello: 'world' }); },
  default: function() { self.render(); }
})
```
