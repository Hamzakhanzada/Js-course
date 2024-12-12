
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
// console.log(userLoggedIn('Hamza'));


// how to pass rest operator in functions
// ... is a rest operator

function calculateCartPrice (...price1) {
    return price1
}

console.log(calculateCartPrice(100,300,400))


// how to pass object and array  to functions

const user = {
    name: 'hamza',
    price: 1000,
}

function handleObject (anyobject) {
  console.log(`the username is ${anyobject.name} and the price is ${anyobject.price}`)
}
handleObject({
    name : 'sam',
    price : 90
}); 

const myArr = [1,2,3,4];

function handleArray (anyarray) {
    return anyarray[3]
}

console.log(handleArray(myArr));