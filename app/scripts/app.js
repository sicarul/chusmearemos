'use strict';

/**
 * @ngdoc overview
 * @name chusmearemosApp
 * @description
 * # chusmearemosApp
 *
 * Main module of the application.
 */
angular
  .module('chusmearemosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    'angular-loading-bar'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
    .state('main', {
      url: "/",
      abstract: true,
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('main.grafo', {
      url: "",
      templateUrl: "views/grafo.html",
      controller: 'GrafoCtrl'
    })
    .state('main.grafo.escucha', {
      url: "escucha/:id",
      templateUrl: "views/grafo.escucha.html",
      controller: 'GrafoEscuchaCtrl'
    });

  });
