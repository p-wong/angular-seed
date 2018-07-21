'use strict';

// Declare app level module which depends on views, and components

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'react'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
factory('myFactory', function () {
  var savedData = {}
  function set(data) {
    savedData = data;
  }
  function get() {
    return savedData;
  }
  return {
    set: set,
    get: get
  }
});
