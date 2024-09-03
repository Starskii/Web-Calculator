const outputLabel = document.querySelector("#output");
let firstValue = null;
let secondValue = null;
let operator = null;

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

}

const processOperatorInput = (input) => {

}

const clear = () => {
    firstValue = null;
    secondValue = null;
    operator = null;
}

const buttonClicked = (e) => {
    let input = e.target.innerHTML;
    if (Number.isInteger(parseInt(input))){
        processNumberInput(input);
    } else if (input === "="){

    } else if (input === "C"){

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