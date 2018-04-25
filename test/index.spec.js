describe('the random number guess game', function () {
  beforeEach(function () {
    start();
    document.getElementById('result').innerHTML = '';
  });

  it('Shows the feedback in page', function () {
    expect(document.getElementById('result').innerHTML).toEqual("");
    //de entrada es vacío el resultados
    document.getElementById('randNumberInput').value = 100;
    //fakeamos el input a 100
    document.getElementById('compare-numbers-button').click();
    //cuando usuario clicka
    expect(document.getElementById('result').innerHTML).not.toEqual("");
    //esperamos que el valor del resultado no sea vacío, ya que se ha introducido el input
  });

  it('generates a random number', function () {
    expect(getRandom()).toBeGreaterThanOrEqual(1);
    expect(getRandom()).toBeLessThanOrEqual(100);
  });

  describe('Display the comparison between the input and the random', function () {
    it('The input is not a number', function () {
      document.getElementById('randNumberInput').value = 'k';
      compareNumbers(40);
      expect(document.getElementById('result').innerHTML).toEqual(introduceNumber())
    });
    it('Shows that the randomnumber is bigger', function () {
      document.getElementById('randNumberInput').value = 20;
      compareNumbers(40);
      //function compareNumbers(randNumber) 
      expect(document.getElementById('result').innerHTML)
        .toEqual(bigger());
    });
    it('Shows that the randomnumber is smaller', function () {
      document.getElementById('randNumberInput').value = 60;
      compareNumbers(40);
      //function compareNumbers(randNumber) 
      expect(document.getElementById('result').innerHTML)
        .toEqual(smaller());
    });
  });
});