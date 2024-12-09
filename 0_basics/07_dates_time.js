let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2005,0,3);
console.log(myCreatedDate.toDateString());

let newDate = new Date();

console.log(newDate.getMonth());
console.log(newDate.getDay() + 1);


newDate.toLocaleString('default',{
    weekday: "long"
})  
console.log(newDate);



