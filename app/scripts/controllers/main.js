'use strict';

/**
 * @ngdoc function
 * @name chusmearemosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chusmearemosApp
 */
angular.module('chusmearemosApp')
  .controller('MainCtrl', function ($scope, $state, $timeout, $templateCache) {

    $scope.popup = {
      content: 'Cargando...',
      options: {
        title: null,
        placement: 'bottom',
        html: true,
        trigger: 'click',
        delay: { show: 150, hide: 100 }
      }
    };

    $timeout(function(){
      $scope.popup.content = $templateCache.get('views/donatePopup.html')[1];
    },3000);



    $scope.isActive = function(state) {
     return $state.includes(state);
     }
  });
