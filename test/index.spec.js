describe('application', function() {
  beforeEach(function() {
    start();
  });
  describe('get random', function() {
    var random;
    beforeEach(function() {
      random = getRandom();
    });
    xit('shoud return a number', function() {
      expect(random).toEqual(jasmine.any(Number));
      // expect(typeof random).toBe('number');
    });
    xit('should be an integer', function() {
      expect(Math.ceil(random)).toBe(Math.floor(random));
    });
    it('should be a number between 1 and 100', function() {
      expect(getRandom()).toBeGreaterThanOrEqual(1);
      expect(getRandom()).toBeLessThanOrEqual(100);
    });
  });
  xdescribe('compare numbers', function() {
    
  });
  describe('check input', function() {
    it ('could the input contain a number', function(){
      document.getElementById('randNumberInput').value = 44;
      expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));


    });
  });

});
