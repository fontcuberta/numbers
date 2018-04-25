describe('the random number guess game', function () {
  var app;

  beforeEach(function () {
    app = application();
  });

  it('compares numbers', function () {
    expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
    expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
    expect(app.compareNumbers(10, 10)).toEqual(app.win());
  });
  it('validates that input numbers are correct', function () {
    expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
  });
  it('validates that random number is between 1 and 100', function () {
    expect(app.getRandom()).toBeGreaterThanOrEqual(1);
    expect(app.getRandom()).toBeLessThanOrEqual(100);
  });
  it('validates that random number is between 1 and 100', function () {
    expect(app.getRandom()).toBeGreaterThanOrEqual(1);
    expect(app.getRandom()).toBeLessThanOrEqual(100);
  });

  describe('interfaz functionalities', function () {
    var comparisonTrigger = document.getElementById("compare-numbers-button");
    var resultBox = document.getElementById('result');

    beforeEach(function () {
      app = application();
      app.start();
      resultBox.innerText = "";
    });
    it("paints the DOM when user introduces a number", function () {
      expect(resultBox.innerText).toBe("");
      comparisonTrigger.click();
      expect(resultBox.innerText).not.toBe("");
    });
    it("validates that user introduces a number in the input", function () {
      comparisonTrigger.click();
      expect(app.getUserSelectedNumber()).toBeGreaterThanOrEqual(0);
    });
  });
});