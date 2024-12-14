// JavaScript Execution Context

// 1 Global Execution context
// 2 Functional Execution context

// First Memory Creation phase
// Second Execution phase

//  Difference between Creation phase and Execution phase

// Memory Creation Phase ma variables ya jo bhi hum na declare kiya ha un ka liya jiga locate hoti ha un ko execute nhi kiya jata ha
// Execution Phase ma Execute kiya jata ha 

// Iam writing a code for better understanding 

let val = 10;
let val1 = 20;

function valAdd (num1,num2) {
    let total = num1 + num2
    return total

}


let result1 = valAdd(val,val1);
let result2 = valAdd(2,5)
