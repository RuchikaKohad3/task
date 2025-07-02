var currentInput = 'operand1';

function insertNumber(num) {
  const operand1 = document.getElementById("operand1");
  const operand2 = document.getElementById("operand2");

  if (currentInput === 'operand1') {
    operand1.value += num;
  } else if (currentInput === 'operand2') {
    operand2.value += num;
  }
}

function setOperator(op) {
  const operator = document.getElementById("operator");
  operator.value = op;
  currentInput = 'operand2'; 
}

function clearAll() {
  document.getElementById("operand1").value = "";
  document.getElementById("operand2").value = "";
  document.getElementById("operator").value = "";
  document.getElementById("result").value = "";
  currentInput = 'operand1';
}

function calculate() {
  
  const num1 = parseFloat(document.getElementById("operand1").value);
  const num2 = parseFloat(document.getElementById("operand2").value);
  const operator = document.getElementById("operator").value;
  const resultBox = document.getElementById("result");

  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "Error (div by 0)";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Invalid Operator";
  }
  resultBox.value = result;
}
