// Get all necessary HTML elements
const input = document.getElementById("input");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.getElementById("dot");
const ans = document.getElementById("ans");
const clr = document.getElementById("clr");

let currentInput = "0";
let previousInput = "0";
let currentOperator = null;
let shouldResetInput = false;

// Update input value with currentInput
function updateInput() {
  input.value = currentInput;
}

// Append the clicked number to the current input
function appendNumber(number) {
  if (currentInput === "0" || shouldResetInput) {
    resetInput();
  }
  currentInput += number;
  updateInput();
}

// Reset the input to "0"
function resetInput() {
  currentInput = "0";
  shouldResetInput = false;
}

// Handle operator button click
function handleOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  previousInput = currentInput;
  currentInput = "0";
  currentOperator = operator;
}

// Calculate the result of the previous operation
function calculate() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) {
    return;
  }
  switch (currentOperator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        result = Infinity;
      } else {
        result = prev / curr;
      }
      break;
    default:
      return;
  }
  shouldResetInput = true;
  currentInput = result.toString();
  currentOperator = null;
  updateInput();
}

// Add event listeners to all number buttons
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    appendNumber(numbers[i].textContent);
  });
}

// Add event listeners to all operator buttons
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    handleOperator(operators[i].textContent);
  });
}

// Handle decimal button click
dot.addEventListener("click", function() {
  if (shouldResetInput) {
    resetInput();
  }
  if (currentInput.indexOf(".") === -1) {
    currentInput += ".";
    updateInput();
  }
});

// Handle equals button click
ans.addEventListener("click", function() {
  calculate();
});

// Handle clear button click
clr.addEventListener("click", function() {
  resetInput();
  currentOperator = null;
  previousInput = "0";
  updateInput();
});

