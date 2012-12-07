---
title: 'Controllers'
layout: 'guide'
---

### Controllers

Controllers are responsible for handling a request and producing a response.
After routing has determined what controller to use, an _action_ function will
be invoked.  This action function does the work of loading data and rendering
views.

#### Defining a Controller

In Locomotive, controllers are instances of `Controller`.  Defining a new
controller is as simple as creating an instance and exporting it via the module.

```javascript
var PhotosController = new Controller();

module.exports = PhotosController;
```

#### Actions

Functions attached to the controller are known as _action_ functions.  When
Locomotive receives a request, it will create a new instance of the controller
and call the appropriate action function.

For example, if a request is received for `/photos/123`, Locomotive will call
the `show()` action of `PhotosController`.

```javascript
PhotosController.show = function() {
  this.render();
}
```

Controllers are responsible for sending a response to the request.  This is
typically accomplished by `render()`ing a view or issuing a `redirect()`.

#### Parameters

Requests often contain data that the controller needs to access when building a
response.  The `param()` function is used to get data contained in the route,
query, or body parameters.

```javascript
SearchController.find = function() {
  this.query = this.param('query');
  // execute search query...
  this.render('results');
}
```

The value returned by `param()` will be found by checking parameters in the
following order:

  - Check route params (req.params), ex: /photos/:id
  - Check query string params (req.query), ex: ?id=12
  - Check urlencoded body params (req.body), ex: id=12

#### Rendering a View

Rendering a view is accomplished by calling `render()`.  Any instance variables
attached to the controller will be made available to the view.  By convention,
variables named with a leading underscore are considered private and will not be
made available to the view.

```javascript
PhotosController.show = function() {
  // this._photo is "private", and not available in the view
  this.title = this._photo.title;
  this.description = this._photo.description;
  this.render();
}
```

The view found in `views/photos/show.html.ejs` will be rendered.

```xml
<h2><%= title %></h2>
<p><%= description %></p>
```

##### Render another Action's View

By default, the view corresponding to the current action will be rendered, in
this case `show`.  A different action's view can be rendered by specifying
it as an argument:

```javascript
this.render('index');
```

##### Render another Controller's Action's View

If you want to render a view belonging to an action in an entirely separate
controller, that can be accomplished as follows: 

```javascript
this.render('albums/show');
```

##### Rendering Options

Options can be used to render a different format or use a different template
engine.

```javascript
this.render({ format: 'xml' });
// => renders `action.xml.ejs`

this.render({ format: 'xml', engine: 'xmlb' });
// => renders `action.xml.xmlb`
```

Refer to [formats](/guide/formats/) for settings used to associate a format with
a template engines.

##### Capturing Render Output

By default, the output of rendering is automatically sent as a response to the
request.  By passing a callback as the final argument to `render()`, the output
can instead be captured.

```javascript
this.render('email', { name: 'Jack' }, function(err, html) {
  // ...
})
```

This is useful in cases where you want to use a template to generate an email
message, rather than a response.

#### Redirecting a Request

Instead of rendering a view, a controller may want to redirect the request.

```javascript
this.redirect('/login');
```

#### Request and Response

If an application needs access to the raw request and response, each is
available as an instance variable within the controller.

```javascript
PhotosController.show = function() {
  var req = this.req;  // also aliased as this.request
  var res = this.res;  // also aliased as this.response
  this.render();
}
```

In Locomotive, requests are dispatched through [Express](http://expressjs.com/)
and any middleware in use before arriving at the controller.  As such, the
entirety of the [Express API](http://expressjs.com/api.html) and the core Node.js
[HTTP API](http://nodejs.org/api/http.html) apply to these objects.

In most cases, the controller provides functions to access commonly needed
properties on the request and response, such as `param()`.  It's recommended to
use these functions whenever possible.
