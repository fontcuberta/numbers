describe('application random number', function () {
  //definimos las variables que en nuestro js llegan como parámetros
  var randomize, randomNumber;

  beforeEach(function (){
    randomNumber = 101;
    randomize = function (){ return randomNumber; };

  });
  it('should be the random number a number between 1 and 100', function () {
    expect(app.randomizeDefault()).toBeGreaterThanOrEqual(1);
    expect(app.randomizeDefault()).toBeLessThanOrEqual(100);
  });

  describe('compares numbers', function(){
    it('compares if random number is smaller than input one', function(){
      expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
    });
    it('compares if random number is bigger than input one', function () {
      expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
    });
    it('compares if random number is the same than input one', function () {
      expect(app.compareNumbers(10, 10)).toEqual(app.win());
    });    
  });
  describe('validate input numbers', function(){
    it('validates that input numbers are not string', function () {
      expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
    });
    it('validates that input numbers are not less than 0 and bigger than 100', function () {
      expect(app.compareNumbers(10, -2)).toEqual(app.error());
      expect(app.compareNumbers(10, 101)).toEqual(app.error());
    });
  });
  it('validates if start works with the UI', function () {
    app.start(randomNumber);
    simulateThatUserInsertsValue(2);
    doClick();
    expect(giveResult()).toEqual(app.bigger());
  });

  function simulateThatUserInsertsValue(val) {
    document.getElementById('rand-number-input').value = val;
  }

  function doClick() {
    document.getElementById('compare-numbers-btn').click();
  }

  function giveResult() {
    return document.getElementById('result').innerHTML;
  }
  
});