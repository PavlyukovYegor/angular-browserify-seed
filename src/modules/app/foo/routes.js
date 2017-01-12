'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/foo/templates/bar.html',
                controller: 'barController'
            })
            .when('/albums', {
              templateUrl: 'app/foo/templates/albumPhotos.html',
              controller: 'albumPhotosController'
            })
            .when('/photos', {
              templateUrl: 'app/foo/templates/photos.html',
              controller: 'photosController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    };
