'use strict';

module.exports = /*@ngInject*/
    function albumPhotosController($scope, $http, $rootScope, $location) {
      $scope.photos = [];

      console.log($rootScope.index);

      var rootPath = "http://jsonplaceholder.typicode.com/";

      $http.get(rootPath + 'albums/' + $rootScope.index + '/photos').then(function(response) {
        $scope.photos = response.data;
        console.log($scope.photos);
      });

      $scope.reloadToPhoto = function(index) {
        $rootScope.indexPhoto = index;
        $location.path('/photos');
      };
    };
