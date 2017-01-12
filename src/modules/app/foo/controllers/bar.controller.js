'use strict';

module.exports = /*@ngInject*/
    function barController($scope, $http, $rootScope, $location) {
        $scope.name = {
            value: 'expressly'
        };

        $scope.albums = [];

        for (var i = 0; i < 100; i++) {
          $scope.albums[i] = i;
        }

        var rootPath = "http://jsonplaceholder.typicode.com/";

        $http.get(rootPath + 'photos').then(function(response) {
          $scope.images = response.data;
          console.log($scope.images);
          console.log($scope.albums);
        });

        $scope.reloadToAlbum = function(index) {
          $rootScope.index = index;
          $location.path('/albums');
        };

        $scope.reloadToPhoto = function(id, albumId) {
          $rootScope.indexPhoto = id;
          $rootScope.index = albumId;
          $location.path('/photos');
        };

        // $scope.albumIcon = require('/src/assets/img/icon_album.png');
    };
