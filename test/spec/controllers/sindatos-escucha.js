'use strict';

describe('Controller: SindatosEscuchaCtrl', function () {

  // load the controller's module
  beforeEach(module('chusmearemosApp'));

  var SindatosEscuchaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SindatosEscuchaCtrl = $controller('SindatosEscuchaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
