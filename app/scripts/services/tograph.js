'use strict';

/**
 * @ngdoc service
 * @name chusmearemosApp.toGraph
 * @description
 * # toGraph
 * Service in the chusmearemosApp.
 */
angular.module('chusmearemosApp')
  .service('toGraph', function () {

    return {
        'transform': function transform(data){
        var res = {
          'nodos': [],
          'vinculos': []
        };
        var values = [];

        angular.forEach(data, function(item){
          if(item.origen && item.destino){
            values.push(item);
          }
        });

        var allOrigin = _.map(values, function(item){return item.origen;});
        var allDestinos = _.map(values, function(item){return item.destino;});
        var all = _.union(allOrigin, allDestinos);

        res.nodos = _.chain(all).uniq().map(function(d){return {'name': d};}).value();

        var nodeNames = _.pluck(res.nodos, 'name');
        var nodeIds = {};
        for(var i =0; i < nodeNames.length; i++){
          nodeIds[nodeNames[i]] = i;
        }

        var c = _.countBy(values, function(n){return n.origen + '---' + n.destino})

        res.vinculos = _.map(c, function(v, k){
          var sp = k.split('---');
          return {'source': nodeIds[sp[0]], 'target': nodeIds[sp[1]], 'value': v};
        });

        res.indexadosOrigen = _.indexBy(values, 'origen');
        res.indexadosDestino = _.indexBy(values, 'destino');

        return res;

      }
    }

  });
