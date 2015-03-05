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
    'angular-loading-bar',
    'ui.bootstrap'
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
        url: "escucha/{id:int}",
        templateUrl: "views/grafo.escucha.html",
        controller: 'GrafoEscuchaCtrl'
      })

    .state('main.restantes', {
      url: "restantes",
      templateUrl: "views/sindatos.html",
      controller: 'SindatosCtrl'
    })
      .state('main.restantes.page', {
        url: "/{pag:int}",
        templateUrl: "views/sindatos.pagina.html",
        controller: 'SindatosPaginaCtrl'
      })
        .state('main.restantes.page.escucha', {
          url: "/escucha/{id:int}",
          templateUrl: "views/sindatos.escucha.html",
          controller: 'SindatosEscuchaCtrl'
        })

    ;

  });
