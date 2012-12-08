---
title: 'Routing : Verbs'
layout: 'guide'
---

### Routing : Verbs

Locomotive's router supports verb routing in the form of `this.VERB()`, where
_VERB_ is one of the HTTP methods, such as `this.post()`.

```javascript
this.post('bands', 'bands#create');
```

Verb routing is syntactic sugar for match routes, meaning the above route is
equivalent to:

```javascript
this.match('bands', 'bands#create', { via: 'post' });
```

#### Middleware

Middleware and route handling functions can also be passed as arguments to verb
routes:

```
this.get('/user/:id', user.load, function(req, res) {
  res.json(req.locals.user);
});
```

When use in this form, Locomotive's router supports the [API](http://expressjs.com/api.html#app.VERB)
exposed by [Express](http://expressjs.com/) for routing, making it easy to
gradually refactor routes from Express to an MVC architecture when needed.
