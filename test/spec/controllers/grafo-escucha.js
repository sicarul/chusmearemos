'use strict';

describe('Controller: GrafoEscuchaCtrl', function () {

  // load the controller's module
  beforeEach(module('chusmearemosApp'));

  var GrafoEscuchaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrafoEscuchaCtrl = $controller('GrafoEscuchaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
