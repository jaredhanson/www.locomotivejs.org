---
title: 'Routing : Resources'
layout: 'guide'
---

### Routing : Resources

Resource routing declares routes to a resourceful controller.  These routes map
HTTP methods to a controller's actions, according to REST conventions.  Resource
routing is the preferred routing mechanism in a Locomotive application.

#### Collection Resources

Declaring this route:

```javascript
this.resources('photos');
```

will result in the following routes being mapped to `PhotosController`:

<div class="row">
  <div class="span4">
    <table class="table table-condensed table-striped">
      <thead>
        <tr>
          <th>Method</th>
          <th>Path</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="monospace">
        <tr>
          <td>GET</td>
          <td>/photos</td>
          <td>index</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/photos/new</td>
          <td>new</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/photos</td>
          <td>create</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/photos/:id</td>
          <td>show</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/photos/:id/edit</td>
          <td>edit</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>/photos/:id</td>
          <td>update</td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/photos/:id</td>
          <td>destroy</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Additionally, the following routing helpers will be declared and available in
controllers and views:

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
          <td>photosPath()</td>
          <td>/photos</td>
        </tr>
        <tr>
          <td>photoPath(id)</td>
          <td>/photos/123</td>
        </tr>
        <tr>
          <td>newPhotoPath()</td>
          <td>/photos/new</td>
        </tr>
        <tr>
          <td>editPhotoPath(id)</td>
          <td>/photos/123/edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Each of these path routing helpers has a corresponding URL routing helper (such
as `photosURL()`), that returns an absolute URL, including scheme and host.
Using these helpers, as opposed to hardcoding paths, makes an application easier
to maintain as routes change.

#### Singleton Resources

An application may contain singleton resources that are not referenced using an
ID.  For example, `/account` is often used to show account details for the
logged in user (rather than `/account/:id`).

In this case, a singleton resource route can be declared:

```javascript
this.resource('account');
```

resulting in the following routes being mapped to `AccountController`:

<div class="row">
  <div class="span4">
    <table class="table table-condensed table-striped">
      <thead>
        <tr>
          <th>Method</th>
          <th>Path</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="monospace">
        <tr>
          <td>GET</td>
          <td>/account/new</td>
          <td>new</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/account</td>
          <td>create</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/account</td>
          <td>show</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/account/edit</td>
          <td>edit</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>/account</td>
          <td>update</td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/account</td>
          <td>destroy</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Additionally, the following routing helpers will be declared and available in
controllers and views:

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
          <td>accountPath()</td>
          <td>/account</td>
        </tr>
        <tr>
          <td>newAccountPath()</td>
          <td>/account/new</td>
        </tr>
        <tr>
          <td>editAccountPath()</td>
          <td>/account/edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Each of these path routing helpers has a corresponding URL routing helper.
