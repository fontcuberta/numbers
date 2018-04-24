describe("App", function () {
    beforeEach(function () {
        start();
    });

    describe("get random number", function () {
        it("should be between 1 and 100", function () {
            expect(getRandom()).toBeGreaterThanOrEqual(1);
            expect(getRandom()).toBeLessThanOrEqual(100);
        });
    });

    describe("get input number", function () {
        it("should be a number", function () {
            document.getElementById('randNumberInput').value = 50;
            expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));
        });
    });

    describe("compare a number", function () {
        it("compare smaller", function () {
            window.getRandom = function () {
                return 80;
            }
            document.getElementById('randNumberInput').value = 82;
            console.log = jasmine.createSpy();
            compareNumbers();
            expect(console.log).toHaveBeenCalledWith("The random is smaller");
        });
    });

    describe("compare string", function () {
        it("compare number with string", function () {
            window.getRandom = function () {
                return 80;
            }
            document.getElementById('randNumberInput').value = 'hola';
            console.log = jasmine.createSpy();
            compareNumbers();
            expect(console.log).toHaveBeenCalledWith("Text is not allowed. Try a number");
        });
    });
});