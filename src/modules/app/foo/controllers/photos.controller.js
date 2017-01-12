'use strict';

module.exports = /*@ngInject*/
    function photosController($scope, $http, $rootScope) {
      $scope.photo = {};

      console.log($rootScope.indexPhoto);

      var rootPath = "http://jsonplaceholder.typicode.com/";

      $http.get(rootPath + 'photos/' + $rootScope.indexPhoto).then(function(response) {
        $scope.photo = response.data;
        console.log($scope.photos);
      });
    };
