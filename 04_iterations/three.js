// for of loop 


// const arr = [1,2,3,4,5];

// for (const element of arr) {
//     console.log(element);
// }

// const greeting = "Hello Worl";

// for (const greet of greeting) {
//     console.log(greet);
// }

const map = new Map();
map.set("PK" , "Pakistan");
map.set("USA" , "United State America");
map.set("FR" , "France");
map.set("FR" , "France"); // map are unique values dont repeat

// console.log(map);

for (const [key,value] of map) {
    console.log(key, " : ",value);
}


const myObject = {
   "game 1" : "Pubg ",
   "game 2" : "NFS"
}

for (const [key, value] of myObject) {
    console.log(key,value);
}
