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
    var escuchasByName;

    var escuchasRes = $resource( 'data/escuchas.json', {}, {
      get: {method:'GET', isArray:true, cache: true}
    });

    var all = function(callback){
      escuchasRes.get({}, function(res){
        cacheEscuchas = res;
        callback(res);
      });
    };

    var notGraphed = function(callback){
      if (cacheRestantes){
        callback(cacheRestantes)
      }else{
        escuchasRes.get({}, function(res){

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
        escuchasRes.get({}, function(res){
          cacheEscuchas = res;
          callback(res[id]);
        });
      }
    };

    var byName = function(name, callback){
      var tryName = name.trim();
      if (escuchasByName){
        if(name + '.mp3' in escuchasByName){ callback(escuchasByName[name + '.mp3']); }
        else{callback(escuchasByName[name]);}
      }else{
        escuchasRes.get({}, function(res){
          var temp = [];
          angular.forEach(res, function(item, i){
            var newAdd = angular.copy(item);
            newAdd.id = i;
            this.push(newAdd);
          }, temp);

          escuchasByName = _.indexBy(temp, 'filename');
          if(name + '.mp3' in escuchasByName){ callback(escuchasByName[name + '.mp3']); }
          else{callback(escuchasByName[name]);}
        });
      }
    };


    return {
      all: all,
      byId: byId,
      byName: byName,
      notGraphed: notGraphed
    };
  });
