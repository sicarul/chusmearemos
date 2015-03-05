'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('SearchCtrl', function ($scope, escuchas, $state) {
    $scope.error = false;

    $scope.buscar = function(){
      escuchas.byName($scope.filename, function(res){
        console.log(res);
        if(res){
          if(res.origen && res.destino){
            $state.go('^.grafo.escucha', {id: res.id});
          }else{
            $state.go('^.restantes.page.escucha', {id: res.id, pag:1});
          }
        }else{
          $scope.error = true;
        }
      });
    }

  });
