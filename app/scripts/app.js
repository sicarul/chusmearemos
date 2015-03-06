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
    'ui.bootstrap',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/grafo");
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
      url: "grafo",
      templateUrl: "views/grafo.html",
      controller: 'GrafoCtrl'
    })
      .state('main.grafo.escucha', {
        url: "/escucha/{id:int}",
        templateUrl: "views/grafo.escucha.html",
        controller: 'EscuchaCtrl'
      })
    .state('main.escucha', {
        url: "escucha/{id:int}",
        templateUrl: "views/escucha.html",
        controller: 'EscuchaCtrl'
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

    .state('main.search', {
      url: "buscar",
      templateUrl: "views/search.html",
      controller: 'SearchCtrl'
    })
    ;

  });


  if(typeof(String.prototype.trim) === "undefined")
  {
    String.prototype.trim = function()
  {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}
