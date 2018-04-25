describe('application random number', function () {
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

  
});

// describe('application', function() {
//   beforeEach(function() {
//     start();
//   });
//   describe('get random', function() {
  
//     beforeEach(function() {
//       random = getRandom();
      
//     });
//     xit('shoud return a number', function() {
//       expect(random).toEqual(jasmine.any(Number));
//       // expect(typeof random).toBe('number');
//     });
//     xit('should be an integer', function() {
//       expect(Math.ceil(random)).toBe(Math.floor(random));
//     });
//     it('should be a number between 1 and 100', function() {
//       expect(random).toBeGreaterThanOrEqual(1);
//       expect(random).toBeLessThanOrEqual(100);
//     });
    
//   });
//   describe('compare numbers', function() {
//     it('compares that the number introduced by the user is bigger than the random one', function () {
//       document.getElementById('rand-number-input').value = 20;
//       compareNumbers(40);
//       expect(document.getElementById('result').innerHTML).toEqual(bigger());
//     });
//     it('compares that the number introduced by the user is smaller than the random one', function () {
//       document.getElementById('rand-number-input').value = 50;
//       compareNumbers(40);
//       expect(document.getElementById('result').innerHTML).toEqual(smaller());
//     });
//     it('compares that the number introduced by the user is equal than the random one', function () {
//       document.getElementById('rand-number-input').value = 40;
//       compareNumbers(40);
//       expect(document.getElementById('result').innerHTML).toEqual(win());
//     });
//   });
//   describe('check input', function() {
//     it('check if the number introduced by the user is empty', function () {
//       document.getElementById('rand-number-input').value = 0;
//       compareNumbers(40);
//       expect(document.getElementById('result').innerHTML).toEqual(error());
//     });
//     it('check if the number introduced by the user is negative', function () {
//       // document.getElementById('rand-number-input').value = 0;
//       // compareNumbers(40);
//       // expect(document.getElementById('result').innerHTML).toEqual(error());
//     });
//     xit ('could the input contain a number', function(){
//       document.getElementById('rand-number-input').value = 44;
//       expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));
//     });
//   });

//   xdescribe('compare a number', function(){
//     it('compare smaller', function(){
//      window.getRandom = function() {
//        return 80;
//      }
//      document.getElementById('rand-number-input').value = 82;
//      console.log = jasmine.createSpy();
//      compareNumbers();
//      expect(console.log).toHaveBeenCalledWith("The random is smaller");
//     });
//   });

// });
