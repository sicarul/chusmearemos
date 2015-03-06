'use strict';

describe('Directive: popup', function () {

  // load the directive's module
  beforeEach(module('chusmearemosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<popup></popup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the popup directive');
  }));
});
