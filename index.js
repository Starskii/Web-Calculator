const outputLabel = document.querySelector("#output-label");
let firstValue = null;
let secondValue = null;
let operator = null;
let output = "0";

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
    return activeFunction(a, b);
}

const processNumberInput = (input) => {
    if(firstValue === null){
        firstValue = parseInt(input);
        output = firstValue.toString();
    } else if (operator === null){
        let newFirstValue = firstValue.toString();
        newFirstValue += input;
        firstValue = parseInt(newFirstValue);
        output = firstValue.toString();
    } else if(secondValue === null){
        secondValue = parseInt(input);
        output += secondValue.toString();
    } else {
        let newSecondValue = secondValue.toString();
        newSecondValue += input;
        secondValue = parseInt(newSecondValue);
        let outputArray = output.split(" ");
        output = `${outputArray[0]} ${outputArray[1]} `; 
        output += secondValue.toString();
    }
    updateOutput();
}

const processOperatorInput = (input) => {
    if(operator === null){
        operator = input; 
        output += ` ${input} `;
    }else{ 
        output = output.replace(operator, input);
        operator = input;
    }
    updateOutput();
}

const clear = () => {
    firstValue = null;
    secondValue = null;
    operator = null;
    output = "0";
    updateOutput();
}

const updateOutput = () => {
    outputLabel.innerHTML = output;
}

const processExpression = () => {
    if(operator === null)
        return;
    if(secondValue === null)
        secondValue = firstValue;
    let result = operate(operator, firstValue, secondValue);
    clear();
    firstValue = result;
    output = firstValue;
    updateOutput();
}

const buttonClicked = (e) => {
    let input = e.target.innerHTML;
    if (Number.isInteger(parseInt(input))){
        processNumberInput(input);
    } else if (input === "="){
        processExpression();
    } else if (input === "C"){
        clear();
    }else{
        processOperatorInput(input);
    }
    console.log(`Clicked ${e.target.innerHTML}`);
}

const main = () => {
    for (button of document.querySelectorAll(".input-button")){
        button.addEventListener("click", buttonClicked);
    }
}

main();