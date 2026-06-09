let currentInput = "";

function updateDisplay() {
  if (typeof document !== "undefined") {
    document.getElementById("result").value = currentInput;
  }
}

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function appendOperator(operator) {
  if (!/[+\-*/]$/.test(currentInput)) {
    currentInput += operator;
    updateDisplay();
  }
}

function clearResult() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = "Erreur";
  }
  updateDisplay();
}

// 👉 fonction TESTABLE avec Jest
function evaluateExpression(expression) {
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    throw new Error("Expression invalide");
  }
  return eval(expression);
}

// export pour Jest
if (typeof module !== "undefined") {
  module.exports = {
    evaluateExpression,
  };
}
