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

const displayTop = document.querySelector('.top')
const displayBottom = document.querySelector('.bottom');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const operateButton = document.querySelector('.equals');
const allClearButton = document.querySelector('.allClear');

let argument1;
let argument2;
let operator;

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayBottom.textContent += button.textContent;
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(!argument1 && argument1 != 0) {
            argument1 = parseInt(displayBottom.textContent);
            displayTop.textContent += displayBottom.textContent + button.textContent;
            displayBottom.textContent ='';
        } else if(!argument2 && argument2 != 0) {
            argument2 = parseInt(displayBottom.textContent); 
            if(operator == '/' && argument2 == 0) {
                alert('cannot divide by 0')
                allClear();
                return;
            }
            displayTop.textContent = `${Math.round((operate(argument1, operator, argument2)) * 100) / 100}` + button.textContent;
            argument1 = Math.round((operate(argument1, operator, argument2)) * 100) / 100;
            displayBottom.textContent ='';
        } else {
            argument2 = parseInt(displayBottom.textContent);
            if(operator == '/' && argument2 == 0) {
                alert('cannot divide by 0')
                allClear();
                return;
            }
            displayTop.textContent = `${Math.round((operate(argument1, operator, argument2)) * 100) / 100}` + button.textContent;
            argument1 = Math.round((operate(argument1, operator, argument2)) * 100) / 100;
            displayBottom.textContent ='';
        }
        operator = button.textContent;
        console.log(argument1,'argument1')
        console.log(argument2,'argument2')
        console.log(operator);
    });
});

operateButton.addEventListener('click', () => {
    if(!displayBottom.textContent){
        alert('please enter a number return');
        return;
    }
    argument2 = parseInt(displayBottom.textContent);
    if(operator == '/' && argument2 == 0) {
        alert('cannot divide by 0')
        allClear();
        return;
    }
    if(!(!argument1 && argument1 != 0)){
        displayBottom.textContent = `${Math.round((operate(argument1, operator, argument2)) * 100) / 100}`;
    }
    displayTop.textContent += argument2 + '=';
    argument1 = 0;
    operator = '+';
});

allClearButton.addEventListener('click' , allClear);

function allClear() {
    displayBottom.textContent = '';
    displayTop.textContent= '';
    argument1 = undefined;
    argument2 = undefined;
    operator = '';
}