describe('random number guess name', function () {
  describe('compare the number function', function () {
    it('shows that the random number is bigger', function () {
      expect(app.compareNumbers(20, 10)).toEqual(app.bigger())
    });
    it('shows that the random number is smaller', function () {
      expect(app.compareNumbers(10, 20)).toEqual(app.smaller())
    });
    it('shows that the random number is equal to input', function () {
      expect(app.compareNumbers(10, 10)).toEqual(app.win())
    });
  });

  it('shows error when input is NaN', function () {
    expect(app.compareNumbers(20, )).toEqual(app.error())
  });


  it('creates a random number between 1 and 100', function () {
    expect(app.getRandom()).toBeGreaterThanOrEqual(1);
    expect(app.getRandom()).toBeLessThanOrEqual(100)
  });

  it('is shows the message in the to user', function () {
    app.start()
    document.getElementById('randNumberInput').value = 20
    document.getElementById("compare-numbers-button").click()
    var result = document.querySelector('#result').innerHTML;
    expect(result).toEqual(app.bigger())
  });
});