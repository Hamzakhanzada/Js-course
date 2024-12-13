// discus about Arrow Function


// const user = {
//     name : "hamza",
//     age : 18,
//     email: "hamza@gmail.com",
//     isLoggedIn : true
// }

// function one () {
//     let username = "hamza"
//     console.log(this.username);
// }

// one();

// const one = function () {
//     let username = "hamza"
//     console.log(this.username)
// }
// one();

const one =  () => {
    let username = "hamza"
    console.log(this)
}
one();


const addTwo = (num1,num2) => ({usernmae1:"hamzakz"});
     

console.log(addTwo(2,9));


