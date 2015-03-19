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
      content: '<div align="center"><input id="donar" type="text" style="width:290px;" value="1LgShXaqvHhYtxxwMxy7BCWre7QEbdH9Bu"/><br><div class="bitcoin-donate"></div></div>',
      options: {
        title: null,
        placement: 'bottom',
        html: true,
        trigger: 'click',
        delay: { show: 150, hide: 100 }
      }
    };


    $scope.isActive = function(state) {
     return $state.includes(state);
     }
  });
