document.addEventListener('DOMContentLoaded', function () {
    displayValue();
    selectedOperator();
    operate(firstNumber, currentOperator, secondNumber)
})
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
let screenText = document.querySelector('.screen-text')
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let enteringFirstNumber = true;
let numbers = document.querySelectorAll('.number')
function operate(firstNumber, currentOperator, secondNumber) {
    let result;
    if (currentOperator == "+") {
        result = add(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (currentOperator == "-") {
        result = subtract(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (currentOperator == "*") {
        result = multiply(firstNumber.parseInt(), secondNumber.parseInt());
    } else if (currentOperator == "/") {
        if (firstNumber === 0 || secondNumber === 0) {
            result = 0;
        } else {
            result = divide(firstNumber.parseInt(), secondNumber.parseInt());
        }
    }
    return result;
}
function displayValue() {
    numbers.forEach(number => {
        number.addEventListener('click', function () {
            const clickedNumber = number.innerText;
            if (enteringFirstNumber) {
                firstNumber += clickedNumber;
                screenText.innerText = firstNumber;
            } else {
                secondNumber += clickedNumber;
                screenText.innerText = secondNumber
            }
        });

    });
}
let operators = document.querySelectorAll('.operator');
function selectedOperator(currentOperator) {
    operators.forEach(operator => {
        operator.addEventListener('click', function () {
            currentOperator = operator.innerText
            screenText.innerText = currentOperator;
        })
    })
}
let equal = document.getElementById('operator-equal')
equal.addEventListener('click', function () {
    result = operate(parseFloat(firstNumber), currentOperator, parseFloat(secondNumber));
    screenText.innerText = result;
})
