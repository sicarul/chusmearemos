'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:SindatosEscuchaCtrl
 * @description
 * # SindatosEscuchaCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('SindatosEscuchaCtrl', function ($scope, escuchas, $stateParams, $state, $sce, $location) {

    $scope.host =$location.host();
    $scope.requestId = $stateParams.id;
    $scope.pageId = $state.params.pag;

    var format = d3.time.format("%d/%m/%Y %H:%M:%S");

    escuchas.byId($scope.requestId, function(res){

      var escucha = angular.copy(res);

      $scope.escucha = escucha;
      $scope.id = escucha.filename.slice(0,-4);

      $scope.audio = {
        sources: [{src: $sce.trustAsResourceUrl("http://nismangate.s3-website-us-east-1.amazonaws.com/" +escucha.filename), type: "audio/mpeg"}],
        theme: "bower_components/videogular-themes-default/videogular.css"
      }

    });
  });
