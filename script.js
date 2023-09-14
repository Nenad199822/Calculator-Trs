function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
let firstNumber = "";
let secondNumber = "";
let operator = "";
let numbers = document.querySelectorAll('.number')
function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        add(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (operator == "-") {
        subtract(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (operator == "*") {
        multiply(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (operator == "/") {
        divide(firstNumber.parseInt(), secondNumber.parseInt());
    }
}