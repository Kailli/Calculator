//For Dark Mood
const themeToggleBtn= document.querySelector('.theme-toggler');
const calculator= document.querySelector('.calculator');
const toggleIcon= document.querySelector('#toggle-icon');
let isDark= true;
themeToggleBtn.onclick= () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark != isDark;
}

// get value number, operator and display screen
const display1E1= document.querySelector('.display-1');
const display2E1= document.querySelector('.display-2');
const tempResultE1= document.querySelector('.temp-res');
const numberE1= document.querySelectorAll('.number');
const operatorE1= document.querySelectorAll('.btn-operator');
const equalE1= document.querySelector('.btn-equal');
const clearAllE1= document.querySelector('#clearAll');
const clearOneE1= document.querySelector('#clearOne');

let disNum1= '';
let disNum2= '';
let result= null;
let lastoperation= '';
let haveDot= false;

// to show number
numberE1.forEach(number => {
    number.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        disNum2 += e.target.innerText;
        display2E1.innerText =disNum2;
    })
})

// to show operator
operatorE1.forEach(operator => {
    operator.addEventListener('click', (e) =>{
        if(!disNum2) result;
        haveDot = false;
        const operatorName= e.target.innerText;
        if(disNum1 && disNum2 && lastoperation){
            mathOperation(); //calculate value
        }else{
            result= parseFloat(disNum2);
        }
        clearVar(operatorName);// if click operator, the value will show at display 1
        lastoperation = operatorName;
        console.log(result);
    })
});

//For Equal button
equalE1.addEventListener('click', (e) => {
    if(!disNum1 || !disNum2) result;
    haveDot= false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    disNum2 = result;
    disNum1 = '';
});

// For All Clear
clearAllE1.addEventListener('click', (e) => {
    display1E1.innerText = '';
    display2E1.innerText = '';
    disNum1 = '';
    disNum2 = '';
    result = '';
    tempResultE1.innerText = '';
});

//For Backspace button
clearOneE1.addEventListener('click', (e) => {
    display2E1.innerText = '';
    disNum2 = '';
});

//To Get Window keyboard to calculate
window.addEventListener('keydown', (e) => {
    if(
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 
    ){
        clickButtonE1(e.key);
    }else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ){
        clickOperation(e.key);
    }
    else if(e.key === '*'){
        clickOperation('x');
    }
    else if(e.key == 'Enter' || e.ky ==='='){
        clickEqual(e.key);
    }
});

// if click operator, the value will show at display 1
function clearVar(name = ''){
    disNum1+= disNum2 + '' + name + '';
    display1E1.innerHTML = disNum1;
    display2E1.innerText = '';
    disNum2 = '';
    tempResultE1.innerText= result; //to show tempory rersult
}

//calculation
function mathOperation(){
    if(lastoperation === 'x'){
        result = parseFloat(result) * parseFloat(disNum2);
    }else if(lastoperation === '+'){
        result = parseFloat(result) + parseFloat(disNum2);
    }else if(lastoperation === '-'){
        result = parseFloat(result) - parseFloat(disNum2);
    }
    else if(lastoperation === '/'){
        result = parseFloat(result) / parseFloat(disNum2);
    }else if(lastoperation === '%'){
        result = (parseFloat(result)/100) * parseFloat(disNum2);
    }
}

//to click with outer keyboard for number
function clickButtonE1(key){
    numberE1.forEach (button => {
        if(button.innerText === key){
            button.click();
        }
    });
}

//to click with outer keyboard for operator
function clickOperation(key){
    operatorE1.forEach ( button => {
        if(button.innerText === key){
            button.click();
        }
    });
}

//to click with outer keyboard for equal
function clickEqual(key){
    equalE1.click();
}

