'use strict';

/**
 * @ngdoc overview
 * @name 523App
 * @description
 * # 523App
 *
 * Main module of the application.
 */
angular
  .module('523App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    var customPrimary = {
      '50': '#c2e0e0',
      '100': '#b2d7d7',
      '200': '#a1cecf',
      '300': '#90c5c6',
      '400': '#7fbdbe',
      '500': '#6EB4B5',
      '600': '#5dabac',
      '700': '#519e9f',
      '800': '#488d8e',
      '900': '#407c7d',
      'A100': '#d3e8e9',
      'A200': '#e4f1f1',
      'A400': '#f5fafa',
      'A700': '#376b6c'
    };
    $mdThemingProvider
      .definePalette('customPrimary',
        customPrimary);

    var customAccent = {
      '50': '#a55710',
      '100': '#bc6413',
      '200': '#d37015',
      '300': '#e87c19',
      '400': '#ea8a31',
      '500': '#ed9748',
      '600': '#f1b176',
      '700': '#f4be8d',
      '800': '#f6cca5',
      '900': '#f8d9bc',
      'A100': '#f1b176',
      'A200': 'EFA45F',
      'A400': '#ed9748',
      'A700': '#fbe6d3'
    };
    $mdThemingProvider
      .definePalette('customAccent',
        customAccent);

    var customWarn = {
      '50': '#efc7cc',
      '100': '#e9b3b9',
      '200': '#e39fa7',
      '300': '#dd8c95',
      '400': '#d87883',
      '500': '#D26471',
      '600': '#cc505f',
      '700': '#c73c4d',
      '800': '#b53544',
      '900': '#a12f3c',
      'A100': '#f4dbde',
      'A200': '#faeef0',
      'A400': '#ffffff',
      'A700': '#8d2935'
    };
    $mdThemingProvider
      .definePalette('customWarn',
        customWarn);

    var customBackground = {
      '50': '#acb8c3',
      '100': '#9dabb8',
      '200': '#8e9eae',
      '300': '#7f91a3',
      '400': '#708598',
      '500': '#64788B',
      '600': '#596b7c',
      '700': '#4f5e6d',
      '800': '#44525e',
      '900': '#394550',
      'A100': '#bac4ce',
      'A200': '#c9d1d8',
      'A400': '#d8dee3',
      'A700': '#2f3841'
    };
    $mdThemingProvider
      .definePalette('customBackground',
        customBackground);

    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn')
      .backgroundPalette('customBackground');
  });