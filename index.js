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
    let output = activeFunction(a, b);
}

let firstValue = 0;
let secondValue = 0;
let operand = null;
