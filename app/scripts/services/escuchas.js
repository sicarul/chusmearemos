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
    var cacheEscuchas;

    var res = $resource( 'data/escuchas.json', {}, {
      get: {method:'GET', isArray:true, cache: true}
    });

    var all = function(callback){
      res.get({}, function(res){
        cacheEscuchas = res;
        callback(res);
      });
    };

    var byId = function(id, callback){
      if (cacheEscuchas){
        callback(cacheEscuchas[id])
      }else{
        res.get({}, function(res){
          cacheEscuchas = res;
          callback(res[id]);
        });
      }
    };


    return {
      all: all,
      byId: byId
    };
  });
