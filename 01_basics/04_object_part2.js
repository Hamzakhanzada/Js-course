const tinderUser = {

}
tinderUser.id2 = '347';
tinderUser.name = "Hitesh";
tinderUser.loggedIn = false;


const newUser = {
    email: "some@gmail.com",
    userLoggedIN: true,
    fullName: {
        userFullName: {
            firstName: 'hamza',
        
        }
    }
}

console.log(newUser.fullName.userFullName.firstName);

const obj1 = {1:'a',2:'b'};

const obj2 = {3:'c',4:'d'};

// const allObj = Object.assign({},obj1,obj2)
// console.log(allObj); 

const newObj = {...obj1,...obj2}; // most of the time iam use this method
console.log(newObj);


const users = [
    {
        id: 1,
        name:'hamza'
    },
    {
        id: 2,
        name:'ali'
    },
    {
        id: 3,
        name:'messam'
    }
]

users[1].id

console.log(tinderUser);
// this method is used database its very important 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedIni'));
