'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:GrafoEscuchaCtrl
 * @description
 * # GrafoEscuchaCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('EscuchaCtrl', function ($scope, $stateParams, escuchas, $sce, $location) {

    $scope.host =$location.host();
    $scope.requestId = $stateParams.id;

    var format = d3.time.format("%d/%m/%Y %H:%M:%S");

    escuchas.byId($scope.requestId, function(res){

      var escucha = angular.copy(res);

      if(escucha.inicio && typeof escucha.inicio === 'string'){
        escucha.inicio = new Date(format.parse(escucha.inicio));
      }
      if(escucha.fin && typeof escucha.fin === 'string'){
        escucha.fin = new Date(format.parse(escucha.fin));
      }



      $scope.escucha = escucha;
      $scope.id = escucha.filename.slice(0,-4);

      $scope.audio = {
        sources: [{src: $sce.trustAsResourceUrl("http://nismangate.s3-website-us-east-1.amazonaws.com/" +escucha.filename), type: "audio/mpeg"}],
        theme: "bower_components/videogular-themes-default/videogular.css"
      }

    });
  });
