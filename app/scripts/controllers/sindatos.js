'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:SindatosCtrl
 * @description
 * # SindatosCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('SindatosCtrl', function ($scope, $state) {
    
    if (typeof $state.params.pag !== "number"){
      $state.go('.page', {pag: 1});
    };
  });
