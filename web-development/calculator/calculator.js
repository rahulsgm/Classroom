function addNumber(i, textbox) {
  if (operend1) {
    if (operation) {
      textbox.value = i;
      operation = false;
    } else {
      textbox.value += i;
    }
  } else {
    textbox.value += i;
  }
}

function clearInput(textbox) {
  textbox.value = "";
  operation = false;
  operend1 = undefined;
}
let operend1 = undefined;
let operation = false;
let operator = undefined;
function add(textbox) {
  operate("+", textbox);
}
function calc(textbox) {
  if (operator == "+") {
    textbox.value = operend1 + parseFloat(textbox.value);
  }
  if (operator === "*") {
    textbox.value = operend1 * parseFloat(textbox.value);
  }
  if (operator === "-") {
    textbox.value = operend1 - parseFloat(textbox.value);
  }
  if (operator === "/") {
    textbox.value = operend1 / parseFloat(textbox.value);
  }
}
function multiply(textbox) {
  operate("*", textbox);
}
function operate(inputoperation, textbox) {
  if (operend1) {
    calc(textbox);
  }
  operend1 = parseFloat(textbox.value);

  operator = inputoperation;
  operation = true;
}
function subtract(textbox) {
  operate("-", textbox);
}
function divide(textbox) {
  operate("/", textbox);
}
function convertIntegers(textbox) {
  textbox.value = parseFloat(textbox.value) * -1;
}
function percentage(textbox) {
  textbox.value = parseFloat(textbox.value) * (1 / 100);
}
function decimalPoint(textbox) {
  if (!textbox.value.includes(".")) {
    addNumber(".", textbox);
  }
}
