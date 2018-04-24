describe('application', function() {
  beforeEach(function() {
    start();
  });
  describe('get random', function() {
  
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
      expect(random).toBeGreaterThanOrEqual(1);
      expect(random).toBeLessThanOrEqual(100);
    });
    it('compares that the number introduced by the user is bigger than the random one', function () {
      document.getElementById('rand-number-input').value = 20;
      compareNumbers(40);
      expect(document.getElementById('result').innerHTML).toEqual(bigger());
    });
    it('compares that the number introduced by the user is smaller than the random one', function () {
      document.getElementById('rand-number-input').value = 50;
      compareNumbers(40);
      expect(document.getElementById('result').innerHTML).toEqual(smaller());
    });
  });
  xdescribe('compare numbers', function() {
    
  });
  xdescribe('check input', function() {
    it ('could the input contain a number', function(){
      document.getElementById('rand-number-input').value = 44;
      expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));
    });
  });

  xdescribe('compare a number', function(){
    it('compare smaller', function(){
     window.getRandom = function() {
       return 80;
     }
     document.getElementById('rand-number-input').value = 82;
     console.log = jasmine.createSpy();
     compareNumbers();
     expect(console.log).toHaveBeenCalledWith("The random is smaller");
    });
  });

});
