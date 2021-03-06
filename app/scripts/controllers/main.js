'use strict';

angular.module('testApp')
  .controller('MainCtrl',[ '$scope', '$http', function ($scope, http) {
      http.get('movies.json').success(function (data) {
        $scope.data = data;
        $scope.streams = data[0].streams;
        $scope.title = data[0].title;
        $scope.meta = data[0].meta;
        $scope.description = data[0].description;
        $scope.placeholder = data[0].images.placeholder;

      });

    $scope.SelectFilms = function (data) {
      $scope.streams = data.streams;
      $scope.title = data.title;
      $scope.meta = data.meta;
      $scope.description = data.description;
      $scope.placeholder = data.images.placeholder;
    };

    $scope.$watch('streams', function (e) {
        document.getElementById('video1').load(function () {
        document.getElementById('video1').play()
      });



    });
  }]);
