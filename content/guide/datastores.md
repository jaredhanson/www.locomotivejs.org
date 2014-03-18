---
title: 'Datastores'
layout: 'guide'
---

### Datastores

Locomotive recognizes that the demands of modern web applications entail the
use of a variety of datastores.  Choosing the correct database is an important
decision, and Locomotive does not impose on that choice.  Locomotive is fully
functional, independent of the choice of database or object mapping layer used
by an application.

#### Model Awareness

Locomotive includes a `urlFor()` helper that can be used to build URLs to a
controller's action.  For example:

```javascript
urlFor({ controller: 'animals', action: 'show', id: '123' });
// => http://www.example.com/animals/123
```

This helper is also model aware.  It can be passed a model object, which will be
introspected in order to determine the type of record and build the
corresponding URL.

```javascript
var animal = new Animal({ id: '123' });
urlFor(animal);
// => http://www.example.com/animals/123
```

Out of the box, model awareness works for any model that has a unique constructor.
Datastores that don't satisfy this requirement can be made model aware through
the use of adapters.
