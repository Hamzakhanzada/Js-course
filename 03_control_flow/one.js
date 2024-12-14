
// if else statement 

// const userIsLoggedIn = true;

// if (userIsLoggedIn == true) {
//     console.log("user is logged in");
    
// } else {
//     console.log("user is not logged in because user value is false");
// }

// const temperature = 49;
// if ( temperature <= 49) {
//     console.log("temperature is less than to 49");
    
// } else {
//     console.log("temperature is greater than to 49")
// }

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500")
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn =  true;
const debitCard = true;
const userLoggedInGoggle = false;
const userLoggedInEmail = true;

if(userLoggedIn && debitCard) {
    console.log("yeh you are eligible for shopping")

}

if (userLoggedInGoggle || userLoggedInEmail) {
    console.log("User is logged in")
}
