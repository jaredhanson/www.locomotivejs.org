---
title: 'Routing : Namespaces'
layout: 'guide'
---

### Routing : Namespaces

Locomotive's router supports namespaces and nesting, which are used to structure
routes according to a heirarchy.

#### Namespaces

You may want to organize an application by grouping controllers under a
namespace.  Most commonly, administrative functionality is grouped under an
`Admin::` namespace by placing controllers in the `app/controllers/admin`
directory and declaring routes within a namespace:

```javascript
this.namespace('admin', function() {
  this.resources('posts');
});
```

The above results in the following URLs and routing helpers being mapped to
`Admin::PostsController`:

<div class="row">
  <div class="span6">
    <table class="table table-condensed table-striped">
      <thead>
        <tr>
          <th>Method</th>
          <th>Path</th>
          <th>Action</th>
          <th>Helper</th>
        </tr>
      </thead>
      <tbody class="monospace">
        <tr>
          <td>GET</td>
          <td>/admin/posts</td>
          <td>index</td>
          <td>adminPostsPath()</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/admin/posts/new</td>
          <td>new</td>
          <td>newAdminPostPath()</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/admin/posts</td>
          <td>create</td>
          <td></td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/admin/posts/:id</td>
          <td>show</td>
          <td>adminPostPath(id)</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/admin/posts/:id/edit</td>
          <td>edit</td>
          <td>editAdminPostPath(id)</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>/admin/posts/:id</td>
          <td>update</td>
          <td></td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/admin/posts/:id</td>
          <td>destroy</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Each of the above path routing helpers has a corresponding URL routing helper.

#### Nested Resources

It is common to have resources that are logically children of other resources.
These relationships can be captured in routes by nesting resources:

```javascript
this.resources('bands', function() {
  this.resources('albums');
});
```

In addition to the routes for bands, the following URLs and routing helpers are
mapped to `AlbumsController`:

<div class="row">
  <div class="span8">
    <table class="table table-condensed table-striped">
      <thead>
        <tr>
          <th>Method</th>
          <th>Path</th>
          <th>Action</th>
          <th>Helper</th>
        </tr>
      </thead>
      <tbody class="monospace">
        <tr>
          <td>GET</td>
          <td>/bands/:band_id/albums</td>
          <td>index</td>
          <td>bandAlbumsPath(bandId)</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/bands/:band_id/albums/new</td>
          <td>new</td>
          <td>newBandAlbumPath(bandId)</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/bands/:band_id/albums</td>
          <td>create</td>
          <td></td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/bands/:band_id/albums/:id</td>
          <td>show</td>
          <td>bandAlbumPath(bandId, id)</td>
        </tr>
        <tr>
          <td>GET</td>
          <td>/bands/:band_id/albums/:id/edit</td>
          <td>edit</td>
          <td>editBandAlbumPath(bandId, id)</td>
        </tr>
        <tr>
          <td>PUT</td>
          <td>/bands/:band_id/albums/:id</td>
          <td>update</td>
          <td></td>
        </tr>
        <tr>
          <td>DELETE</td>
          <td>/bands/:band_id/albums/:id</td>
          <td>destroy</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Each of the above path routing helpers has a corresponding URL routing helper.

While no limit is placed on the number of levels to which resources can be
nested, applications are encouraged not to nest more than one level deep, as
doing otherwise quickly becomes cumbersome.
