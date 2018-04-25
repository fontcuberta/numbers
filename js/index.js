var app = (function getApplication (){
  var randomNumber;
  function compareNumbers (randomNumber, userSelectedNumber) {

    console.log(randomNumber);

    if (userSelectedNumber < 1 || userSelectedNumber > 100 || userSelectedNumber === 0) {
      return error();
    }
    else if (randomNumber < userSelectedNumber) {
      return smaller();
    }
    else if (randomNumber === userSelectedNumber){
      return win();
    }
    else if (randomNumber > userSelectedNumber) {
      return bigger();
    }
    else if (isNaN(Number(userSelectedNumber))){
      return error();
    }
  }

  function getRandom (event) {
    return (Math.floor(Math.random() * (100 - 1)) + 1);
  }

  function getUserSelectedNumber () {
    return Number(document.getElementById('rand-number-input').value);
  }
  function setResult (result) {
    document.getElementById('result').innerHTML = result;
  }
  function bigger () {
    return "The random is bigger";
  }

  function smaller () {
    return "The random is smaller";
  }

  function win () {
    return "YOU WIN!!!";
  }

  function error () {
    return 'Error. Please, introduce a number between 1 and 100';  
  }
  function onClick() {
    setResult(compareNumbers(randomNumber, getUserSelectedNumber()));
  }
  function start() {
    randomNumber = getRandom();
    var compareNumbersButton = document.getElementById("compare-numbers-btn");
    compareNumbersButton.addEventListener("click", onClick);
  }
  // start();

  return {
    compareNumbers: compareNumbers,
    start: start,
    error: error,
    smaller: smaller,
    bigger: bigger,
    win: win
  };
})();

// getApplication().start();