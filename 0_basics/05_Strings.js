const  firstName = "Hamza";
const lastName = "Khan";
console.log(firstName + lastName); // don't use these method using string concatinate

// use this 
console.log(`My First name is ${firstName} and my last Name is ${lastName} `);

const gameName = new String("PubgMobile");
// console.log(gameName[5]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt([2]));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,5)
console.log(newString);
const anotherString = "    hellohamza    "
console.log(anotherString);
console.log(anotherString.trim());

const url = "https://hamza.com/hamza%20khan"
console.log(url.replace('%20','-'));

console.log(url.includes('hamza'));
console.log(url.includes('sure'));

const usingSplit = "hello-hamza.com-kz";
console.log(usingSplit.split('-'));



