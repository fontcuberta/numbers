
describe("App", function () {

    // beforeEach(function () {
    //     start();
    // })

    it("should returns a number between 0 and 1", function () {

        expect(getRandom()).toBeGreaterThan(0);
    })
})


// describe("Player", function () {

//     var functionRandom;

//     beforeEach(function () {
//         startApp();
//         functionRandom = getRandomArbitrary("1", "100");

//     });

//     it("checks if number randoms is between 1 and 100", function () {
//         expect(functionRandom).toBeGreaterThan(0);
//         expect(functionRandom).toBeLessThan(101);
//     });
// });