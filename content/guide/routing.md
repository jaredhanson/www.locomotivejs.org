---
title: 'Routing'
layout: 'guide'
---

### Routing

Locomotive's router is responsible for receiving requests to your application
and dispatching them to a controller's action.  Dispatching is based on the
request's URL and HTTP method.

The router also dynamically generates routing helper functions that build paths
and URLs.  These helpers are available in controllers and views, eliminating the
need to hardcode strings.

Routes are configured in `config/routes.js`

#### Match Routes

Locomotive can match arbitrary URL patterns to a controller's action.

For example, declaring this match route:

```javascript
this.match('songs/:title', { controller: 'songs', action: 'show' });
```

will cause `SongsController`'s `show()` action to handle requests for URLs which
match the pattern.

<pre>
/songs/like-a-rolling-stone
/songs/all-along-the-watchtower
</pre>

Shorthand notation, in the form of _controller#action_ is also available to
target a controller's action.  For example, the following route is equivalent to
the one declared above:

```javascript
this.match('songs/:title', 'songs#show');
```

The values associated with named placeholders, in this case `:title`, will be
available in the controller via the `param()` function.

```javascript
this.param('title');  // returns 'like-a-rolling-stone'
```

##### Via

By default, match routes use `GET` as the HTTP method.  This can be changed by
specifying the `via` option:

```javascript
this.match('photos/upload', 'photos#upload', { via: 'POST' });
```

A route that responds to multiple methods can be specified as an array.

```javascript
this.match('photos/upload', 'photos#upload', { via: ['POST', 'PUT'] });
```

##### Helper

A routing helper can be declared along with the route with the `as` option:

```javascript
this.match('bands/:id', 'bands#show', { as: 'bands' });
```

in which case a path routing helper, and corresponding URL routing helper, will
be available in controllers and views.

<div class="row">
  <div class="span4">
    <table class="table table-condensed table-striped">
      <thead>
        <tr>
          <th>Helper</th>
          <th>Returns</th>
        </tr>
      </thead>
      <tbody class="monospace">
        <tr>
          <td>bandsPath('radiohead')</td>
          <td>/bands/radiohead</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


#### Routing to Middleware

Instead of routing to a controller, you can route directly to any
[Connect](http://www.senchalabs.org/connect/)-compatible middleware.

For example, the following will route login requests to [Passport](http://passportjs.org/)
for authentication.

```
this.match('login', passport.authenticate('local', { successRedirect: '/',
                                                     failureRedirect: '/login' })
                    { via: 'post' });
```

Routes can be sent to a middleware chain by specifying each middleware as an
element within an array.

```javascript
this.match('somewhere', [ middlewareOne(),
                          middlewareTwo() ]);
```

#### Root Route

The root route, _/_, can be declared with the `root()` function:

```
this.root('pages#main');
```
