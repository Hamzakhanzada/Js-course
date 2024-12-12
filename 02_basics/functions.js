
// function sayMyName() {
//     console.log('H')
//     console.log('a')
//     console.log('m')
//     console.log('z')
//     console.log('a')
    
// }
// sayMyName  //reference
// sayMyName()  // Execute

// function parameter and arguments 

// function addTwoNumbers (number1,number2) {
//     console.log(number1+number2);
// }
function addTwoNumbers (number1,number2) {
    // let result = number1+number2
    // return result;
    // easy way 
    return number1 + number2
}
const result = addTwoNumbers(2,5)
// console.log('the result is ', result)

function userLoggedIn (username = "sam") {
    if (!username) {
        console.log("Please Enter Your User Name")
        return
    }
       return `${username} just logged in `
}

// console.log(userLoggedIn('Hamza'));
// if user not defined the the result is undefined
console.log(userLoggedIn('Hamza'));