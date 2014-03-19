'use strict';

app.controller('MainCtrl', function ($scope, $http) {
    $scope.city = 'boulder';
    $scope.state = 'co';

    $scope.getWeather = function () {
      $scope.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city + ',' + $scope.state;
      $http({
        method: 'GET',
        url: $scope.url
      }).success( function(data, status){
        console.log('success: response status: ' + status);
        $scope.data = data;
        $scope.status = status;
        $scope.currtime = new Date().getTime();
      }).
      error(function(data, status) {
        console.log('there was an error: ' + status);
      });
    };
  });
