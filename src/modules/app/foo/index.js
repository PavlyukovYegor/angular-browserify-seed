'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('barController', require('./controllers/bar.controller'))
        .controller('photosController', require('./controllers/photos.controller'))
        .controller('albumPhotosController', require("./controllers/album.photos.controller"));
