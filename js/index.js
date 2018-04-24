function compareNumbers (randNumber) {

  var inputNumber = getInputNumber();
  console.log(randNumber);
  console.log(inputNumber);
  if (inputNumber < 1 || inputNumber > 100 || inputNumber === 0) {
    setResult(error());
  }
  else if (randNumber < inputNumber) {
    setResult(smaller());
  }
  else if (randNumber === inputNumber){
    setResult(win());
  }
  else if (randNumber > inputNumber) {
    setResult(bigger());
  }
  else {
    setResult(error());
  }
}

function getRandom (event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber () {
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

function start() {
  var randNumber = getRandom();
  var compareNumbersButton = document.getElementById("compare-numbers-btn");
  compareNumbersButton.addEventListener("click", function () {
    compareNumbers(randNumber);
  });
}
