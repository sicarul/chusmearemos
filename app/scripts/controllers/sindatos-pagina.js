'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:SindatosPaginaCtrl
 * @description
 * # SindatosPaginaCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('SindatosPaginaCtrl', function ($scope, escuchas, $stateParams, $state) {
    $scope.perPage = 30;


    escuchas.notGraphed(function(res){

      var total = res.length;
      $scope.numPages = Math.ceil(total/$scope.perPage);
      $scope.activePage = $stateParams.pag;

      var start = ($scope.activePage-1)*$scope.perPage;
      $scope.data = res.slice(start, start+$scope.perPage);

      $scope.$watch('activePage', function(newVal){
        if(!$state.params.id){
          $state.go('^.page', {pag: newVal});
        }
      });
    });

    $scope.changePage = function() {
      $state.go('^.page', {page: $scope.activePage});
     };

  });
