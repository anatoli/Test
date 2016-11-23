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
      })

    $scope.SelectFilms = function (data) {
      $scope.streams = data;
    }
  }]);
