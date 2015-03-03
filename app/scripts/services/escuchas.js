'use strict';

/**
 * @ngdoc service
 * @name chusmearemosApp.escuchas
 * @description
 * # escuchas
 * Service in the chusmearemosApp.
 */
angular.module('chusmearemosApp')
  .service('escuchas', function ($resource) {
    return $resource( 'data/escuchas.json', {}, {
      get: {method:'GET', isArray:true, cache: true}
    });
  });
