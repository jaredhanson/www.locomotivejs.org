---
title: 'Datastores : Mongoose'
layout: 'guide'
---

### Datastores : Mongoose

[Mongoose](http://mongoosejs.com/) is popular object modeling layer for
[MongoDB](http://www.mongodb.org/), an open source, document-oriented NoSQL
database written in C++.

#### Adapter

[locomotive-mongoose](https://github.com/jaredhanson/locomotive-mongoose) is a datastore
adapter that adds Mongoose model awareness to Locomotive.

To use the Mongoose adapter, install it via [npm](https://npmjs.org/) and save it in `package.json`:

```bash
npm install locomotive-mongoose --save
```

Register it in `config/environments/all.js`:

```javascript
this.datastore(require('locomotive-mongoose'));
```

#### Model Awareness

Mongoose documents can then be passed directly to `urlFor()`:

```javascript
Animal.findById(this.param('id'), function(err, animal) {
  if (err) { return next(err); }
  self.url = self.urlFor(animal);
  next();
});
```

#### Initializer

The following initializer, located at `config/initializers/nn_mongoose.js` will
configure Mongoose and connect to MongoDB when starting a Locomotive application:

```javascript
module.exports = function() {
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://mongodb.example.com/dev');
      break;
    case 'production':
      mongoose.connect('mongodb://mongodb.example.com/prod');
      break;
  }

  mongoose.model('User', schemas.UserSchema);
  mongoose.model('Post', schemas.PostSchema);
}
```
