function compareNumbers(randNumber) {
  const inputNumber = getInputNumber();
  if (randNumber > inputNumber) {
    setResult(bigger());
  }
  else if (randNumber < inputNumber) {
    setResult(smaller());
  }
  else if (randNumber === inputNumber) {
    setResult(win());
  } else {
    setResult(introduceNumber())
  }
}

function getRandom(event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber() {
  return Number(document.getElementById('randNumberInput').value);
}

function setResult(result) {
  document.getElementById('result').innerHTML = result;
}

function bigger() {
  return "The random is bigger";
}

function smaller() {
  return "The random is smaller";
}

function win() {
  return "YOU WIN!!!";
}

function introduceNumber() {
  return "Please introduce a number";
}

function start() {
  var randomNumber = getRandom();
  var comparisonTrigger = document.getElementById("compare-numbers-button");
  comparisonTrigger.addEventListener("click", function () {
    compareNumbers(randomNumber);
  });
}