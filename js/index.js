
function compareNumbers(randNumber) {
  const inputNumber = getInputNumber();
  if (isNaN(inputNumber)) {
    setResult(error());
  }
  else if (randNumber > inputNumber) {
    setResult(bigger());
  }
  else if (randNumber < inputNumber) {
    setResult(smaller());
  }
  else {
    setResult(win());
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

function error() {
  return "Text is not allowed. Try a number";
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

function start() {
  const randNumber = getRandom();
  var button = document.getElementById("compare-numbers-button");
  button.addEventListener("click", eventHandler(function () {
    compareNumbers(randNumber);
  }));
}

function eventHandler(handler) {
  return function (event) {
    event.preventDefault();
    handler();
  };
}


