// describe('application', function() {
//   beforeEach(function() {
//     start();
//   });
//   describe('get random', function() {
//     var random;
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
//       expect(getRandom()).toBeGreaterThanOrEqual(1);
//       expect(getRandom()).toBeLessThanOrEqual(100);
//     });
//   });
//   xdescribe('compare numbers', function() {
    
//   });
//   describe('check input', function() {
//     it ('could the input contain a number', function(){
//       document.getElementById('randNumberInput').value = 44;
//       expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));
//     });
//   });

//   describe('compare a number', function(){
//     it('compare smaller', function(){
//      window.getRandom = function() {
//        return 80;
//      }
//      document.getElementById('randNumberInput').value = 82;
//      console.log = jasmine.createSpy();
//      compareNumbers();
//      expect(console.log).toHaveBeenCalledWith("The random is smaller");
//     });
//   });

// });

// describe('compare string', function(){
//   it("compare number with string", function(){
//     window.getRandom = function (){
//       return 80;
//     }
//     document.getElementById('randomNumberInput').value = "hola";
//     console.log = jasmine.createSpy();
//     compareNumbers();
//     expect(console.log).toHaveBeenCalledWith("text is not a number");
//   });
// });

describe('the random number guess game', function(){
  beforeEach(function(){
      document.getElementById('result').innerHTML = '';
  });

  it('reads from the GUI and sets the result', function(){
      start();
      expect(document.getElementById('result').innerHTML).toEqual("");
      document.getElementById('randNumberInput').value = 100;

      document.getElementById('compare-numbers-button').click();

      expect(document.getElementById('result').innerHTML).not.toEqual("");
  });

  it('generates a random number', function(){
     expect(getRandom()).toBeGreaterThanOrEqual(1);
     expect(getRandom()).toBeLessThanOrEqual(100);
  });

  it('compares number introduced by the user with a random', function(){
      document.getElementById('randNumberInput').value = 20;

      compareNumbers(40);

      expect(document.getElementById('result').innerHTML)
          .toEqual(bigger());
  });
});

describe('', function(){
  it('' ,function(){

  });
});