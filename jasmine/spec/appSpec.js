describe("App", function(){
    beforeEach(function(){
        start();
    });

    describe("get random number", function() {
        
        it("should be between 1 and 100", function() {
            expect(getRandom()).toBeGreaterThanOrEqual(1);
            expect(getRandom()).toBeLessThanOrEqual(100);
        });
        
        
    });
});