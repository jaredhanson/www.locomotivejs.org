---
title: 'Application : Initialization'
layout: 'guide'
---

### Application : Initialization

When a Locomotive application is started, it proceeds through a sequence of
steps:

  1. Configure the Environment
  
     In this step, `config/environments/all.js` is executed followed by the
     configuration file for the current environment.  For instance, when running
     in development, `config/environments/development.js` is executed.
     
  2. Invoke Initializers
  
     After the environment has been configured, initializers are invoked.
     Initializers are used to configure sub-systems and connect to databases,
     message queues, and other services utilized by the application.
  
  3. Draw Routes
  
     The routes in `config/routes.js` are drawn.
     
  4. Start HTTP Server
  
     Finally, the HTTP server is started and the application begins handling
     requests.

#### Environments

An environment configuration exports a single function which is invoked when the
application is started:

```javascript
module.exports = function() {
  this.set('view engine', 'ejs');
    
  this.use(poweredBy('Locomotive'));
  this.use(express.logger());
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.cookieParser());
  this.use(express.bodyParser());
  this.use(express.session({ secret: 'keyboard cat' }));
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(this.router);
}
```

Within the function, the `this` context is set to the application, which
conforms to the [Express API](http://expressjs.com/api.html).

Environments are typically used to configure [settings](http://expressjs.com/api.html#app-settings)
and use [middleware](http://www.senchalabs.org/connect/).

#### Initializers

After the environment is configured, initializers are run.  Initializers are
identical to environments, in that they export a single function.

```javascript
module.exports = function() {
  // initialize something...
}
```

Initializers can also be asynchronous, in which case they accept a single `done`
argument that must be called once initialization is complete.

```javascript
module.exports = function(done) {
  // async initialize something...
  setTimeout(function() {
    done(); // or done(err) if an error occurred
  }, 1000);
}
```

Within the function, the `this` context is set to the application, which
conforms to the [Express API](http://expressjs.com/api.html).

Initializers are typically used to connect to databases and configure
sub-systems.  Each initializer executes sequentially, ensuring that the previous
one completes before the next one is invoked.

##### Initializing Mongoose and MongoDB

The following initializer connects to [MongoDB](http://www.mongodb.org/) using
[Mongoose](http://mongoosejs.com/) and defines models.

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

##### Initializing Passport for Authentication

The following initializer configures [Passport](http://passportjs.org/)
strategies used for authentication.

```javascript
module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.validPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
}
```
