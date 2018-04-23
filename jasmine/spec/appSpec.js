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
});