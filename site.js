var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://www.locomotivejs.org/');
site.set('output', 'www');

site.engine('ejs', require('ejs-locals'));

site.content('content');
site.static('public');

site.page('/sitemap.xml', require('kerouac-sitemap')());
site.page('/robots.txt', require('kerouac-robotstxt')());
site.page('/CNAME', require('kerouac-cname')());


/**
 * .htaccess
 */
/*
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
*/

site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
