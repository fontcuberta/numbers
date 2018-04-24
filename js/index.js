
function compareNumbers(event) {
  event.preventDefault();
  'use strict';
  const randNumber = getRandom();
  const inputNumber = parseInt(getInputNumber());
  console.log(randNumber);
  console.log(inputNumber);
  if (isNaN(inputNumber)) {
    error();
  }
  else if (randNumber > inputNumber) {
    bigger();
  }
  else if (randNumber < inputNumber) {
    smaller();
  }
  else {
    win();
  }
  return;
}

function getRandom(event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber() {
  return document.getElementById('randNumberInput').value;
}

function error() {
  console.log("Text is not allowed. Try a number");
}

function bigger() {
  console.log("The random is bigger");
}

function smaller() {
  console.log("The random is smaller");
}

function win() {
  console.log("YOU WIN!!!");
}

function start() {
  var buttons = document.getElementsByClassName("button");
  buttons[0].addEventListener("click", compareNumbers);
}


