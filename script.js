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

//display window
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  });
});

//only buttons that are numbers should be put in the num1 variable
//needs click event listener for the number class buttons
//on click of number buttons, store in variable num1

let num1 = "";
let num2 = "";

let isOperatorClicked = false;

console.log("isOperatorClicked?? : ", isOperatorClicked);

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
  console.log("operator result", operate(operator, num1, num2));
  console.log(display.textContent);
  console.log("num1: ", num1, "operator: ", operator, "num2  ", num2);
  console.log("isOperatorClicked: ", isOperatorClicked);
  num1 = display.textContent;
  num2 = "";
  isOperatorClicked = false;
  console.log("isOperatorCLicked: ", isOperatorClicked);
});

//clear variables on equals
//call the operator function with the first number, operator, and second number as arguments
