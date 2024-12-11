//Single ton jab hum literals ki tarah karta hn to single ton nahi banta 
// jab constructor sa bana ga to single ton bana ga ;


// Object.create // is sa single ton ban ta ha ya ha constructor

// Object Literals  This way Object is declare
const symb = Symbol('key1');
const jsUser = {
    name: 'Hamza',
    'full name':'Hamza Khan',
    [symb]: 'mykey 1',
    age: 19,
    location: 'Karachi',
    email: 'hamzakhanzada@gmail.com',
    isLoggedIn: true,
    lastLoginDays:['Monday','Sunday']
}

// console.log(jsUser.email);
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(jsUser[symb]);

// object value change

jsUser.email = 'Hammad@gmail.com';
console.log(jsUser.email);

// Object.freeze(jsUser);
jsUser.email = "muhammad.hamza@gmail.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js user");

}

jsUser.greetingTwo = function() {
    console.log(`Hello Js user ${this.name}`);

}
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());



