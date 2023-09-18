let operator = " ";
let previousValue = "";
let currentValue = ""


document.addEventListener('DOMContentLoaded', function () {
    let del = document.querySelector('.delete')
    let clear = document.querySelector('.clear')
    let equal = document.querySelector('.operator-equal')
    let numbers = document.querySelectorAll('.number')
    let operators = document.querySelectorAll('.operator')
    let previousScreen = document.querySelector('.previous')
    let currentScreen = document.querySelector('.current')
    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;


    }))
    operators.forEach((op) => op.addEventListener('click', function (e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    clear.addEventListener('click', function () {
        previousValue = '';
        operator = ' '
        currentValue = ''
        previousScreen.textContent = previousValue;
        currentScreen.textContent = currentValue;
    })
    del.addEventListener('click', function () {
        currentValue = currentValue.slice(0, -1)
        currentScreen.textContent = currentValue;
        if (currentValue < 1) {
            currentValue = previousValue + " " + operator
            previousValue = " "
            previousScreen.textContent = previousValue
            currentScreen.textContent = currentValue;
            operator = operator.slice(0, -1)
            currentValue = currentValue.slice(0, -1)
        }
    })

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


function handleNumber(num) {
    if (currentValue.length < 5) {
        currentValue += num;
    }

}
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';

}
