'use strict';

describe('Service: toGraph', function () {

  // load the service's module
  beforeEach(module('chusmearemosApp'));

  // instantiate service
  var toGraph;
  beforeEach(inject(function (_toGraph_) {
    toGraph = _toGraph_;
  }));

  it('should do something', function () {
    expect(!!toGraph).toBe(true);
  });

});
