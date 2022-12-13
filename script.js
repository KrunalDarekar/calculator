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

function operate(a, operator ,b) {
    switch(operator) {
        case ('+') : {
            return add(a, b);
        }
        case ('-') : {
            return subtract(a, b);
        }
        case ('*') : {
            return multiply(a, b);
        }
        case ('/') : {
            return divide(a, b);
        }
    }
}

const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const operateButton = document.querySelector('.equals');
const allClearButton = document.querySelector('.allClear');

let arguments = [];
let argumentNo = 0;
let operators = [];
let operatorNo = 0;

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        arguments[argumentNo] = parseInt(display.textContent);
        operators[operatorNo] = button.textContent;
        display.textContent = "";
        console.log(arguments[argumentNo]);
        console.log(operators[operatorNo]);
        argumentNo++;
        operatorNo++;
    });
});

operateButton.addEventListener('click', () => {
    arguments[argumentNo] = parseInt(display.textContent);
    console.log(arguments[argumentNo]);
    console.table(arguments);
    console.table(operators);
    let prevArgument;
    let newArgument;
    for(let i = 0; i < operators.length; i++) {
        if( i == 0 ) {
            newArgument = operate(arguments[0],operators[i],arguments[1]);
        } else {
            prevArgument = newArgument;
            console.log(prevArgument)
            newArgument = operate(prevArgument,operators[i],arguments[i+1]);
            console.log(newArgument);
        }
    }
    display.textContent = `${newArgument}`;
});

allClearButton.addEventListener('click' , allClear);

function allClear() {
    display.textContent = '';
    argumentNo = 0;
    operatorNo = 0;
    arguments = [];
    operators = [];
}