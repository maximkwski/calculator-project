let a = null;
let b = null;
let result = null;
let operator = "";

function add(a,b) {
    return Number(a) + Number(b);
};

function substract(a,b) {
    return Number(a) - Number(b)
};

function multiply(a,b) {
    return Number(a) * Number(b)
};

function devide(a,b) {
    return Number(a) / Number(b)
};

function operate(operator,a,b) {
    switch (operator) {
        case "add" : result = Math.round((add(a,b)) * 100000) / 100000;
        break ;
        case "substract" : result = Math.round((substract(a,b)) * 100000) / 100000; 
        break ;
        case "multiply" : result = Math.round((multiply(a,b)) * 100000) / 100000; 
        break ;
        case "devide" : result = Math.round((devide(a,b)) * 100000) / 100000; 
        break ;
    }
};

const display = document.querySelector('.display');
const digitBtn = Array.from(document.querySelectorAll('.digits button'));
const operatorBtn = Array.from(document.querySelectorAll('.operators button'));
const resetBtn = document.querySelector('.reset');
const decimalBtn = document.querySelector('.decimal');
const deleteBtn = document.querySelector('.delete');
let operatorCalled = false;

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    if(btn.textContent != "="){
        operatorCalled = true;
        // display.textContent = null;
        if (btn.textContent === "+") { 
            calculateMore(); // if  use a  operator again to render result
            operator = "add";
            
        } else if (btn.textContent === "-") {
            calculateMore();
            operator = "substract";

        } else if (btn.textContent === "x" ){
            calculateMore(); 
            operator = "multiply";

        } else { // devide
            calculateMore(); 
            operator = "devide";
        };
        console.log(operator);
    } else {
        if (a === null || b === null) {
            resetAll(); // reset values when clicked '=' second time
        } else {
            operate(operator,a,b);
            console.log(operator,a,b);
            a = result;
            b = null;
            display.textContent = a;
        }
    }
    });   
});

function populateDisplay() {
    digitBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (operatorCalled === false) {
                if (display.textContent == 0) { 
                    display.textContent = null;
                }
                a = display.textContent += btn.textContent;
              console.log('value of A is: ',a);
            } else {
                if (display.textContent != null) {
                    display.textContent = b;

                }
                b = display.textContent += btn.textContent;

                console.log('value of A is: ',a);
                console.log('value of B is: ',b);
                
            }
        });

    });
};

decimalBtn.addEventListener("click", () => { //floating point numbers
    if (operatorCalled === false) {
        if (!display.textContent.includes(".")) {
           a = display.textContent += decimalBtn.textContent;
        }
    } else {
        if (!display.textContent.includes(".")) {
            b = display.textContent += decimalBtn.textContent;
        }
    }
});

function calculateMore() { // render result when operator clicked
    if (b != null) {
        operate(operator,a,b);
        console.log(operator,a,b);
        console.log("result for now is :", result);
        a = result;
        b = null;
        display.textContent = a;
        
    };
}

resetBtn.addEventListener("click", () => { // reset all values when AC button clicked
    resetAll();
});

function resetAll() {
    operatorCalled = false;   
    a = null;
    b = null;
    result = null;
    operator = "";
    display.textContent = 0;
}

deleteBtn.addEventListener("click", () => { // erase last char
    if (operatorCalled === false) {
        deleteChar();
        a = display.textContent; // and asign new val to A
    } else {
        deleteChar();
        b = display.textContent; // or asign val to B
    }
});

function deleteChar() { 
    if (display.textContent != null && display.textContent != 0) {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        if (display.textContent === "") {
            display.textContent = 0;
        };
    };
};

populateDisplay();
