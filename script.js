function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  let operation;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operator === "+") {
    operation = add(num1, num2);
  } else if (operator === "-") {
    operation = subtract(num1, num2);
  } else if (operator === "x") {
    operation = multiply(num1, num2);
  } else if (operator === "/") {
    operation = divide(num1, num2);
  }
  return operation;
}

const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const operation = document.querySelectorAll(".operator");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  });
});

let num1 = "";
let num2 = "";
let isOperatorClicked = false;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (isOperatorClicked) {
      num2 += number.textContent;
    } else {
      num1 += number.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  display.textContent = "";
  isOperatorClicked = false;
  num1 = "";
  num2 = "";
});

let operator;
operation.forEach((op) => {
  op.addEventListener("click", () => {
    operator = op.textContent;
    isOperatorClicked = true;
  });
});

equals.addEventListener("click", () => {
  display.textContent = operate(operator, num1, num2);
  num1 = display.textContent;
  num2 = "";
  isOperatorClicked = false;
});
