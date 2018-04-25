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
    it('validates number interval between 0-100', function(){
        expect(app.getRandom()).toBeGreaterThan(0);
        expect(app.getRandom()).toBeLessThan(100);
    })
    it('is start function working', function(){
        app.start();
        document.getElementById('randNumberInput').value = '100';
        document.getElementById("compare-numbers-button").click();
        var result = document.getElementById('result');
        expect(result.innerHTML).toEqual(app.smaller());

    })
});