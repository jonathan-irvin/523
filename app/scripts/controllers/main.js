'use strict';

/**
 * @ngdoc function
 * @name 523App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 523App
 */
angular.module('523App')
  .controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
  $scope.kelly = "Kelly Dayz";
}