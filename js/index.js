function compareNumbers () {
  const randNumber  = getRandom();
  const inputNumber = getInputNumber();
  console.log(randNumber);
  console.log(inputNumber);
  if (inputNumber < 0 || inputNumber > 100 || inputNumber === '') {
    error();
  }
  else if (randNumber < inputNumber) {
    smaller();
  }
  else if (randNumber === inputNumber){
    win();
  }
  else if (randNumber > inputNumber) {
    bigger();
  }
  else {
    error();
  }
  return;
}

function getRandom (event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber () {
  return document.getElementById('randNumberInput').value;
}

function bigger () {
  console.log ("The random is bigger");
}

function smaller () {
  console.log ("The random is smaller");
}

function win () {
  console.log("YOU WIN!!!");
}

function error () {
  console.error('Error. Please, introduce a number between 1 and 100');  
}

function start() {
  var buttons = document.getElementsByClassName("button");
  buttons[0].addEventListener("click", compareNumbers);
}

// (function (x) {
//   return function (y) {
//     return x
//   }
// })(1)(2);
