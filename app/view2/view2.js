'use strict';

var app = angular.module('myApp.view2', ['ngRoute', 'react'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $location, myFactory) {
  $scope.person = { fname: 'Clark', lname: 'Kent' };
  $scope.city = myFactory.get();
  $scope.names = ['TriBeCa','Midtown West','Flatiron District','Times Square','Financial District',
                  'Midtown East','SoHo','Williamsburg','Brooklyn Heights','Long Island City'];
  $scope.getImgUrl=function() {
    $scope.myImgUrl="/assets/wework-w14.png"
  }
});


W14 = require("./assets/wework-w14.png")
W29 = require("./assets/wework-w29.png")
DOCK72 = require("./assets/wework-dock72.png")


var Hello = React.createClass( {
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hello ' + this.props.fname + ' ' + this.props.lname
    );
  }
} );

app.value( "Hello", Hello );
