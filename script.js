let a = null;
let b = null;
let result = null;
let operator = "";

function add(a,b) {
    return a + b;
};

function substract(a,b) {
    return a - b;
};

function multiply (a,b) {
    return a * b;
};

function devide(a,b) {
    return a / b;
};

function operate(operator,a,b) {
    switch (operator) {
        case "add" : result = add(a,b); break ;
        case "substract" : result = substract(a,b); break ;
        case "multiply" : result = multiply(a,b); break ;
        case "devide" : result = devide(a,b); break ;
    }
};

const display = document.querySelector('.display');
const digitBtn = Array.from(document.querySelectorAll('.digits button'));
const operatorBtn = Array.from(document.querySelectorAll('.operators button'));
let operatorCalled = false;
console.log(operatorCalled);
operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    if(btn.textContent != "="){
        operatorCalled = true;
        display.textContent = null;
        if (btn.textContent === "+") { 
            operator = "add";
        } else if (btn.textContent === "-") {
            operator = "substract";
        } else if (btn.textContent === "*" ){
            operator = "multiply";
        } else {
            operator = "devide";
        };
        console.log(operator);
    } else {
        operate(operator,a,b);
        console.log(operator,a,b);
        console.log(result);
        display.textContent = result;
    }
    });
    
});


function populateDisplay() {
    digitBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (operatorCalled === false) {
              a = display.textContent += btn.textContent;
              console.log('value of A is: ',a);
            } else {
                b = display.textContent += btn.textContent;
                console.log('value of B is: ',b);
            }
        });

    });
};

populateDisplay();
