describe('the random number guess game', function(){
    var app;

    beforeEach(function(){
        app = application();
    });

    it('compares numbers', function(){
        expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
        expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
        expect(app.compareNumbers(10, 10)).toEqual(app.win());
    });
    it('validates that input numbers are correct', function(){
        expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
    });
});
// describe('creat a random number', function(){
//     // beforeEach(function(){
//     //     var randomNumber;
//     //     app = application();
//     // });
//     it('the number is between 1 and 100', function(){
        
//         randomNumber = getRandom();
        
//     });
// });

// describe('application', function() {
//   beforeEach(function() {
//     start();
//   });
//   describe('get random', function() {
//     var random;
//     beforeEach(function() {
//       random = getRandom();
//     });
//     it('shoud return a number', function() {
//       expect(random).toEqual(jasmine.any(Number));
//       // expect(typeof random).toBe('number');
//     });
//     it('should be an integer', function() {
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

// describe('the random number guess game', function(){
//   beforeEach(function(){
//       document.getElementById('result').innerHTML = '';
//   });

//   it('reads from the GUI and sets the result', function(){
//       start();
//       expect(document.getElementById('result').innerHTML).toEqual("");
//       document.getElementById('randNumberInput').value = 100;

//       document.getElementById('compare-numbers-button').click();

//       expect(document.getElementById('result').innerHTML).not.toEqual("");
//   });

//   it('generates a random number', function(){
//      expect(getRandom()).toBeGreaterThanOrEqual(1);
//      expect(getRandom()).toBeLessThanOrEqual(100);
//   });

//   it('compares number introduced by the user with a random', function(){
//       document.getElementById('randNumberInput').value = 20;

//       compareNumbers(40);

//       expect(document.getElementById('result').innerHTML)
//           .toEqual(bigger());
//   });
// });

// describe('compare', function(){
//   beforeEach(function (){
//     var value = document.getElementById('randNumberInput').value = 30;    
//   });
//   it('compare the number when is bigger' ,function(){
//       var instructions = document.getElementById('result');
//       var randomNumber = 40;
//       compareNumbers(randomNumber);
//       expect(instructions.innerHTML).toEqual("The random is bigger");
//   });
//   it('compare the number when is smaller', function(){
//       var instructions = document.getElementById('result');
//       var randomNumber = 10;
//       compareNumbers(randomNumber);
//       expect(instructions.innerHTML).toEqual("The random is smaller");
//   });
//   it('when the number is equal', function(){
//     var instructions = document.getElementById('result');
//     var randomNumber = 30;
//     compareNumbers(randomNumber);
//     expect(instructions.innerHTML).toEqual("YOU WIN!!!")
//   });
// });