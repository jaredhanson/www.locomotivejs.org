var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://locomotivejs.org/');
site.set('output', 'www');

site.engine('ejs', require('ejs-locals'));

site.content('content');
site.static('public');

site.plug(require('kerouac-sitemap')());
site.plug(require('kerouac-robotstxt')());


/**
 * .htaccess
 */
;(function() {
  var redirect = {
    '/guide/architecture.html': '/guide/architecture/',
    '/guide/controllers.html': '/guide/controllers/',
    '/guide/datastores.html': '/guide/datastores/',
    '/guide/directory-structure.html': '/guide/directory-structure/',
    '/guide/get-started.html': '/guide/get-started/',
    '/guide/routing.html': '/guide/routing/',
    '/guide/views.html': '/guide/views/'
  }
  
  site.plug(require('kerouac-htaccess')({ redirect: redirect }));
})();


site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
