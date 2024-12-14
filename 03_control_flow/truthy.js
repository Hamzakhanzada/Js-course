const userEmail = [];

if (userEmail) {
    console.log("I have user Email")
    
} else {
    console.log(" I don't Have user Email")
}
 
// falsy values 1 false, 2 0 ,3 -0, 4 Bigint jis ma 0n ho, 5 "", 6 null , 7 undefined, 8 NaN

// how to check array is empty

if(userEmail.length == 0) {
    console.log("my array is totally empty")
}

// how to check object is empty 

const myObj = {};

if(Object.keys(myObj).length == 0) {
    console.log("my object is empty");
}

// Nullish Coalescing  Operator (??): is used for null and undefined

let val;

val = 5 ?? 10;
console.log(val);
// val = null ?? 10;
// val = undefined ?? 10;
console.log(val)