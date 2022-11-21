let a = Number;
let b = Number;

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

function operate(operator, a,b) {
   return operator(a,b);
};

const display = document.querySelector('.display');
const digitBtn = Array.from(document.querySelectorAll('.digits button'));
const operatorBtn = Array.from(document.querySelectorAll('.operators button'));
let operatorCalled = false;
console.log(operatorCalled);
operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    operatorCalled = true;
    console.log(operatorCalled);
    });
    
});



function populateDisplay() {
    digitBtn.forEach(btn => {
        btn.addEventListener("click", () => {
           display.textContent += btn.textContent;
        })   
    });
};

populateDisplay();
