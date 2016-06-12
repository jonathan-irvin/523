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

  // Welcome Message
  $scope.welcomeHeader = "Welcome to Five Two Three!";
  $scope.welcomeMessage = "We are the Irvins and over the years of being together, we've created a handful of websites centered in different areas. We have many websites: some personal, some professional, but all fun.";
  $scope.whatHeader = "What is 523?";
  $scope.whatMessage = "523 is what you get when an artist and a geek get married.";
  $scope.thanksHeader = "Thanks for visiting!";
  $scope.thanksMessage = "Feel free to scroll down and check out our network.";

}