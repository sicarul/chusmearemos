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
    var cacheRestantes;

    var res = $resource( 'data/escuchas.json', {}, {
      get: {method:'GET', isArray:true, cache: true}
    });

    var all = function(callback){
      res.get({}, function(res){
        cacheEscuchas = res;
        callback(res);
      });
    };

    var notGraphed = function(callback){
      if (cacheRestantes){
        callback(cacheRestantes)
      }else{
        res.get({}, function(res){

          var temp = [];
          angular.forEach(res, function(item, i){
            if(!item.origen || !item.destino){
              var newAdd = angular.copy(item);
              newAdd.id = i;
              this.push(newAdd);
            }
          }, temp);

          cacheRestantes = _.sortBy(temp, 'filename');
          callback(cacheRestantes);
        });
      }
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
      byId: byId,
      notGraphed: notGraphed
    };
  });
