'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl',[ '$scope', '$http', function ($scope, http) {
      http.get('movies.json').success(function (data) {
        $scope.data = data;
        $scope.streams = data[0].streams;
        $scope.title = data[0].title;
        $scope.meta = data[0].meta;
        $scope.description = data[0].description;
      });

    $scope.SelectFilms = function (data) {
      $scope.streams = data.streams;
      $scope.title = data.title;
      $scope.meta = data.meta;
      $scope.description = data.description;
    };

    $scope.$watch('streams', function (e) {
       console.log(e);
      document.getElementById('video1').load(function () {
        document.getElementById('video1').play()
      });

    });
  }]);
