'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    styleUrls: 'view1/view1.css'
  });
}])

.controller('View1Ctrl', function($scope, $location, myFactory) {
    $scope.names = ['Atlanta','Austin','Baltimore','Boston','Charlotte','Chicago','College Park, MD','Dallas - Fort Worth',
                    'Denver','Detroit','Houston','Kansas','Los Angeles','Miami','Minneapolis','Nashville','New York City', 'Orange County',
                    'Philadelphia','Phoenix','Portland','Raleigh-Durham','SF Bay Area','San Diego','Seattle','Washington, D.C.'];
    $scope.go = function (data) {
      myFactory.set(data);
      $location.path('/view2');
    };
});
