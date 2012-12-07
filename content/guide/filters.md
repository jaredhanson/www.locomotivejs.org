---
title: 'Controllers : Filters'
layout: 'guide'
---

### Controllers : Filters

Filters are functions that run before or after the action function.  Each filter
is executed sequentially, one after the other, after the previous filter calls
`next`.

Filters help to untangle nested blocks of async code, and are especially useful
for loading records from a database or implementing authentication and access
control.

#### Before Filters

Before filters run before the action function.

```javascript
PhotosController.before('show', function(next) {
  var self = this;
  Photo.findOne(this.param('id'), function(err, photo) {
    if (err) { return next(err) }
    self._photo = photo;
    next();
  });
});

PhotosController.show = function() {
  this.title = this._photo.title;
  this.description = this._photo.description;
  this.render();
}
```

##### Before All

Specify `*` to run a filter before _all_ actions in the controller.

```javascript
PhotosController.before('*', function(next) {
  // this executes before any action is invoked
});
```

##### Middleware as a Filter

[Connect](http://senchalabs.github.com/connect/)-style middleware can also be
used as a filter.

For example, to limit the size of an upload:

```javascript
PhotosController.before('upload', connect.limit('10mb'));
```

Or implementing authentication using [Passport](http://passportjs.org/) and [connect-ensure-login](https://github.com/jaredhanson/connect-ensure-login):

```javascript
LogInController.before('login', login.ensureLoggedOut('/'));
LogInController.before('login', passport.authenticate('local', { failureRedirect: '/login',
                                                                 failureFlash: true }));
LogInController.login = function() {
  this.redirect('/welcome');
}
```

#### After Filters

After filters are identical to before filters, except that they run after the
action, naturally.

```javascript
PhotosController.after('show', function(next) {
  hitCounter++;
  next();
});
```

#### After Error Filters

After error filters can be used to handle errors that occur within a controller.

```javascript
PhotosController.after('*', function(err, req, res, next) {
  this.render('error', { message: err.message });
});
```

If no after error filters are defined, the error will be passed out where it can
be handled by application-level [error handling](http://expressjs.com/guide.html#error-handling)
middleware.
