'use strict';

  /**
   * Popup, a Bootstrap popover wrapper.
   *
   * Usage:
   *  <div ng-model="model" popup="options"></div>
   *
   * Remarks:
   *  To prevent content overflow and clipping, use CSS
   *  .popover { word-wrap: break-word; }
   *  Popup without title and content will not be shown.
   *
   * @param {String}  ngModel           popup content
   * @param {Object}  options           popup options
   * @param {String}  options.title     title
   * @param {Boolean} options.html      content should be treated as html markup
   * @param {String}  options.placement placement (top, bottom, left or right)
   * @param {String}  options.trigger   trigger event, default is hover
   * @param {Object}  options.delay     milliseconds or { show:<ms>, hide:<ms> }
   */
   angular.module('chusmearemosApp').directive('popup', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '=',
        options: '=popup'
      },
      link: function(scope, element) {
        scope.$watch('ngModel', function(val) {
          element.attr('data-content', val);
        });

        var options = scope.options || {} ;

        var title = options.title || null;
        var placement = options.placement || 'right';
        var html = options.html || false;
        var delay = options.delay ? angular.toJson(options.delay) : null;
        var trigger = options.trigger || 'hover';

        element.attr('title', title);
        element.attr('data-placement', placement);
        element.attr('data-html', html);
        element.attr('data-delay', delay);
        element.popover({ trigger: trigger });

        element.on('shown.bs.popover', function (a, b) {
          $('#donar').select();
        })
      }
    };
  });
