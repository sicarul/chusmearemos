'use strict';

/**
 * @ngdoc directive
 * @name chusmearemosApp.directive:selectOnClick
 * @description
 * # selectOnClick
 */
angular.module('chusmearemosApp')
  .directive('selectOnClick', function () {
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              element.on('click', function () {
                  this.select();
              });
          }
      };
  });
