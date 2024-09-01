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

const operate = (a, b, operator) => {

}

let firstValue = 0;
let secondValue = 0;
let operand = null;

const numberContainerNode = document.querySelector("#number-container");

for (let i = 1; i < 11; i++){
    const button = document.createElement("button");
    button.classList.add("number-button");
    if(i === 10)
        button.innerHTML = 0;
    else
        button.innerHTML = i;
    numberContainerNode.appendChild(button);
}
