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

function populateDisplay() {
    const display = document.querySelector('.display');
    const digitBtn = Array.from(document.querySelectorAll('.digits button'));
    
    
};