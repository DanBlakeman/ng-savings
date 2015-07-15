describe('SavingsController', function() {

  var ctrl;

  beforeEach(module('SavingsApp'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('SavingsController');
  }));

  it('initialises with an empty goal date', function() {
  expect(ctrl.goalDate).toEqual(null);
  });


});