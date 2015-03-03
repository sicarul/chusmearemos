'use strict';

describe('Service: escuchas', function () {

  // load the service's module
  beforeEach(module('chusmearemosApp'));

  // instantiate service
  var escuchas;
  beforeEach(inject(function (_escuchas_) {
    escuchas = _escuchas_;
  }));

  it('should do something', function () {
    expect(!!escuchas).toBe(true);
  });

});
