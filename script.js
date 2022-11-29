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
        case "add" : result = add(a,b);
        break ;
        case "substract" : result = substract(a,b); 
        break ;
        case "multiply" : result = multiply(a,b); 
        break ;
        case "devide" : result = devide(a,b); 
        break ;
    }
};

const display = document.querySelector('.display');
const digitBtn = Array.from(document.querySelectorAll('.digits button'));
const operatorBtn = Array.from(document.querySelectorAll('.operators button'));
const resetBtn = document.querySelector('.reset');
const decimalBtn = document.querySelector('.decimal')
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

        } else if (btn.textContent === "*" ){
            calculateMore(); 
            operator = "multiply";

        } else { // devide
            calculateMore(); 
            operator = "devide";
        };
        console.log(operator);
    } else {
        if (a === null || b === null) {
            display.textContent = 0;
        } else {
            operate(operator,a,b);
            console.log(operator,a,b);
        
            display.textContent = result;

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

decimalBtn.addEventListener("click", () => {
    if (operatorCalled === false) {
        if (!display.textContent.includes(".")) {
           a = display.textContent += decimalBtn.textContent;
        }
    } else {
        b = display.textContent += decimalBtn.textContent;
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

resetBtn.addEventListener("click", () => {
 operatorCalled = false;   
 a = null;
 b = null;
 result = null;
 operator = "";
 display.textContent = 0;
})

populateDisplay();
