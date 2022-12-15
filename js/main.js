const inputNumber1 = document.getElementById('number1');
const inputNumber2 = document.getElementById('number2');

const btnPlus = document.getElementById("btn-plus");
const btnTimes = document.getElementById("btn-times");
const btnClear = document.getElementById("btn-clear");

inputNumber1.addEventListener("change", handleInputNumberChange);
inputNumber2.addEventListener("change", handleInputNumberChange);

btnPlus.addEventListener("click", calcSum);
btnTimes.addEventListener("click", calcMult);
btnClear.addEventListener("click", clear);

function handleInputNumberChange(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    } 
    else {
        event.target.classList.add("input-error");
    }
}

function calcSum(event){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let sum = Number(number1) + Number(number2);
    if(!isNumber(sum)) {
        document.getElementById("result-box").value = 0;
    }
    else {
        document.getElementById("result-box").innerHTML = sum;
    }
}

function calcMult(event){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let mult = Number(number1) * Number(number2);
    if(!isNumber(mult)) {
        document.getElementById("result-box").value = 0;
    }
    else {
        document.getElementById("result-box").innerHTML = mult;    
    }
}

function clear(event){
    document.getElementById("number1").value = "";
    document.getElementById("number1").classList.remove("input-error");
    document.getElementById("number2").value = "";
    document.getElementById("number2").classList.remove("input-error");
    document.getElementById("result-box").innerHTML = 0;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



