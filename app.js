const oldTypedDisplay = document.getElementById("old-typed");
const recentTypedDisplay = document.getElementById("recent-typed");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

let oldTypedText = "";
let newTypedText = "";
let operator = "";

function update() {
  oldTypedDisplay.textContent = oldTypedText;
  recentTypedDisplay.textContent = newTypedText;
}

function clear() {
  oldTypedText = "";
  newTypedText = "";
  operator = "";
  update();
}

function del() {
  oldTypedText = oldTypedText.slice(0, -1);
  newTypedText = newTypedText.slice(0, -1);
  update();
}

function calculator() {
  let number1 = parseFloat(oldTypedText);
  let number2 = parseFloat(newTypedText);
  if (isNaN(number1) || isNaN(number2)) {
    return;
  }
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "x":
      result = number1 * number2;
      break;
    case "÷":
      result = number2 / number2;
      break;
    case "%":
      result = number1 / 100;
      break;
    case "%":
      result = (number1 / 100) * number2;
      break;
    default:
      return;
  }
  newTypedText = result.toString();
  oldTypedText = "";
  update();
}

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    newTypedText += operator;
    oldTypedText += newTypedText;
    newTypedText = "";
    update();
  });
});

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    newTypedText += button.textContent;
    update();
  });
});

deleteButton.addEventListener("click", del);
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", calculator);
