'use strict';

describe('Controller: SindatosCtrl', function () {

  // load the controller's module
  beforeEach(module('chusmearemosApp'));

  var SindatosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SindatosCtrl = $controller('SindatosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
