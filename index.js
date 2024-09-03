const outputLabel = document.querySelector("#output");

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => { 
    return a / b;
}

const operate = (operator, a, b) => {
    let activeFunction = null;
    switch(operator){
        case "+":
            activeFunction = add;
            break;
        case "-":
            activeFunction = subtract;
            break;
        case "x":
            activeFunction = multiply;
            break;
        case "/":
            activeFunction = divide;
            break;
    }
    return output = activeFunction(a, b);
}

const updateOutput = (outputText) => {
    outputLabel.innerHTML = outputText;
}

const buttonPressed = (e) => {
    console.log(parseInt(e.target.innerHTML))
    if(Number.isInteger(parseInt(e.target.innerHTML)))
        processNumber(parseInt(e.target.innerHTML));
    else{
        processOperator(e.target.innerHTML);
    }
    updateOutput(`${outputValue}`)
}

const processNumber = (number) => {
    if (operand === null){
        firstValue = parseInt(firstValue.toString() + number.toString());
        console.log(firstValue);
    } else{
        secondValue = parseInt(secondValue.toString() + number.toString());
        console.log(secondValue);
    }
}

const clearOperator = () => {
    firstValue = null;
    secondValue = null;
    operand = null;
    outputValue = defaultOutputValue;
}

const processOperator = (operator) => {
    switch(operator){
        case "C":
            clearOperator();
            break;
        case "=":
            console.log(operate(operand, firstValue, secondValue));
            break;
        case ".":
            //Handle later
            break;
        default:
            operand = operator;
            break;
    }
}
const defaultOutputValue = outputLabel.innerHTML;
let outputValue = defaultOutputValue;
let firstValue = 0;
let secondValue = 0;
let operand = null;

const BUTTON_NODES = document.querySelectorAll(".input-button");

for (button of BUTTON_NODES){
    button.addEventListener("click", buttonPressed);
}