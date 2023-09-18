let operator = " ";
let previousValue = "";
let currentValue = ""


document.addEventListener('DOMContentLoaded', function () {
    let clear = document.querySelector('.clear')
    let equal = document.querySelector('.operator-equal')
    let numbers = document.querySelectorAll('.number')
    let operators = document.querySelectorAll('.operator')
    let previousScreen = document.querySelector('.previous')
    let currentScreen = document.querySelector('.current')
    numbers.forEach((number) => number.addEventListener('click', function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

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
        currentValue += num
    }

}
