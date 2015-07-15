describe('SavingsApp', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Savings App');
  });

  it('can calculate goal details', function() {
    element(by.id('goalTitle')).sendKeys('Tims Birthday Bike', protractor.Key.ENTER);
    element(by.id('goalAmount')).sendKeys('120', protractor.Key.ENTER);
    element(by.id('goalDetails')).sendKeys('Raleigh Striker 18"', protractor.Key.ENTER);
  });


});