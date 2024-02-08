"use strict";

const value = document.querySelector(".row--value");
const zero = document.querySelector(".btn--zero");
const one = document.querySelector(".btn--one");
const two = document.querySelector(".btn--two");
const three = document.querySelector(".btn--three");
const four = document.querySelector(".btn--four");
const five = document.querySelector(".btn--five");
const six = document.querySelector(".btn--six");
const seven = document.querySelector(".btn--seven");
const eight = document.querySelector(".btn--eight");
const nine = document.querySelector(".btn--nine");

const clearBtn = document.querySelector(".btn--clear");
const signBtn = document.querySelector(".btn--sign");
const modBtn = document.querySelector(".btn--mod");
const divBtn = document.querySelector(".btn--div");
const multBtn = document.querySelector(".btn--mult");
const subtBtn = document.querySelector(".btn--subt");
const addBtn = document.querySelector(".btn--add");
const dotBtn = document.querySelector(".btn--dot");
const equalBtn = document.querySelector(".btn--equal");

// final calculations in mathematical form (in array form)
let result = [];

// last of result list
function lastOfList() {
    if (result.length == 0) {
        return "NaN";
    } 
    const last = result[result.length - 1];
    if (last == "%" || last == "/" || last == "*" || last == "+" || last == "-") {
        return "NaN";
    } else if (Number(last) != "NaN" || Number(last.slice(0, -1)) != "NaN" && last.length > 1) {
        return last;
    }
    return "NaN";
}

// assign to the last of result list
function assignListLast(last) {
    result[result.length - 1] = last;
}

function getFromDisplay() {
    let val = value.textContent;
    return val;
}

// assign value to the display of calculator
function assignDisplay(val = "") {
    if (val == "") val = "0";
    value.textContent = val;
}

clearBtn.addEventListener("click", function() {
    result = [];
    assignDisplay();
    console.log(result);
});

signBtn.addEventListener("click", function() {
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    console.log(val, last);
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        last = String(-Number(last));
        console.log(last);
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);    
    // if zero in display
    } else if (val == "0") {
        last = "0";
        console.log(last);
        result.push(last);
        assignDisplay(last);    
    }
    console.log(result);
});

dotBtn.addEventListener("click", function() {
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN" && !last.includes(".")) {
        last += ".";
        assignListLast(last);
        assignDisplay(last);
        // if zero in display
    } else if (val == "0") {
        result.push("0.");
        assignDisplay("0.");
    }
    console.log(result);
});

modBtn.addEventListener("click", function() {
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        result.push("%");
    // if zero in display
    } else if (val == "0") {
        result.push("0");
        result.push("%");
    }
    console.log(result);
});

divBtn.addEventListener("click", function(){
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        result.push("/");
    // if zero in display
    } else if (val == "0") {
        result.push("0");
        result.push("/");
    }
    console.log(result);
});

multBtn.addEventListener("click", function(){
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        result.push("*");
    // if zero in display
    } else if (val == "0") {
        result.push("0");
        result.push("*");
    }
    console.log(result);
});

subtBtn.addEventListener("click", function(){
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        result.push("-");
    // if zero in display
    } else if (val == "0") {
        result.push("0");
        result.push("-");
    }
    console.log(result);
});

addBtn.addEventListener("click", function(){
    // For Zero in display
    let val = getFromDisplay();
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        result.push("+");
    // if zero in display
    } else if (val == "0") {
        result.push("0");
        result.push("+");
    }
    console.log(result);
});

equalBtn.addEventListener("click", function(){
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last != "NaN") {
        let calc = String(eval(result.join("")));
        if (String(calc).length > 10) {
            calc = calc.slice(0, 10);
        }
        result = [calc];
        assignDisplay(calc);
    }
    console.log(result);
});

zero.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("0");
        assignDisplay("0");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                last = String(10 * x);
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

one.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("1");
        assignDisplay("1");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 2);
                else last = String(10 * x + 2);    
            } else {
                last += '1';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

two.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("2");
        assignDisplay("2");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 2);
                else last = String(10 * x + 2);    
            } else {
                last += '2';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

three.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("3");
        assignDisplay("3");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 3);
                else last = String(10 * x + 3);    
            } else {
                last += '3';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

four.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("4");
        assignDisplay("4");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 4);
                else last = String(10 * x + 4);    
            } else {
                last += '4';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

five.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("5");
        assignDisplay("5");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 5);
                else last = String(10 * x + 5);    
            } else {
                last += '5';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

six.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("6");
        assignDisplay("6");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 6);
                else last = String(10 * x + 6);    
            } else {
                last += '6';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

seven.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("7");
        assignDisplay("7");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 7);
                else last = String(10 * x + 7);    
            } else {
                last += '7';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

eight.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("8");
        assignDisplay("8");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 8);
                else last = String(10 * x + 8);    
            } else {
                last += '8';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});

nine.addEventListener("click", function() {
    let last = lastOfList();
    // if last of list is not number or doesn't exist
    if (last == "NaN") {
        result.push("9");
        assignDisplay("9");
    } else {
    // Numbers over 16 digits overflow in display
        if (last.length < 16){
            if (!last.includes('.')) {
                let x = Number(last);
                if (x < 0) last = String(10 * x - 9);
                else last = String(10 * x + 9);    
            } else {
                last += '9';
            }
        }
    // Change last of list
        assignListLast(last);
    // Change display number appearance because of event
        assignDisplay(last);
    }
    console.log(result);
});