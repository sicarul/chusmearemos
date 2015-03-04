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
    var format = d3.time.format("%d/%m/%Y %H:%M:%S");

    return {
        'transform': function transform(data){
        var res = {
          'nodos': [],
          'vinculos': []
        };
        var values = [];



        angular.forEach(data, function(item, i){
          if(item.origen && item.destino){
            if(item.inicio){
              item.inicio = format.parse(item.inicio);
            }
            if(item.fin){
              item.fin = format.parse(item.fin);
            }
            item.id = i;
            values.push(item);
          }
        });

        res.num = values.length;
        res.notincluded = data.length - values.length;
        res.indexadosOrigen = _.chain(values).groupBy('origen').mapValues(function(d){return _.sortBy(d, 'inicio');}).value();
        res.indexadosDestino = _.chain(values).groupBy('destino').mapValues(function(d){return _.sortBy(d, 'inicio');}).value();


        var allOrigin = _.map(values, function(item){return item.origen;});
        var allDestinos = _.map(values, function(item){return item.destino;});
        var all = _.union(allOrigin, allDestinos);

        res.nodos = _.chain(all).uniq().map(function(d){
          var found = res.indexadosOrigen[d];
          var prov = 'Desconocido';
          if(found){ prov = found[0].provincia; }
          return {'name': d, 'provincia':prov};
        }).value();

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
        

        return res;

      }
    }

  });
