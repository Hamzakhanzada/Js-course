let arr = [0,1,2,3,4,5,6];
console.log(arr[6]);

const myFavouriteGame = ["Pubg Mobile","Resident Evil","GTA Five","Granny"];
console.log(myFavouriteGame);

const number = new Array(1,5,9,4);
console.log(number);

// Arrays Methods//
// arr.push(99); // add value
// arr.push(4);
// arr.pop(); //remove value
arr.unshift(78); // add number to start the array
arr.shift(); // same as pop remove the value but starting value change
console.log(arr.includes("Hamza")); // Question and includes should be response yes or no simple
console.log(arr.indexOf("Hamza"));

const newArr = arr.join(); 
console.log(typeof newArr); 
console.log(typeof arr); 


// slice and splice 

console.log("A",arr)
const newArr1 = arr.slice(1,4);
console.log(newArr1);

console.log("B",arr);

const newArr2 = arr.splice(1,4);
console.log("c",arr);

console.log(newArr2);





