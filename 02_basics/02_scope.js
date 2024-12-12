let a = 300

if (true) {
let a = 10;
const b = 20;
// console.log(a);

}
// console.log(a);
// console.log(b);


// scope in nested functions

function one () {
    const username = "Hamza";
    function two () {
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username1 = "hamza"
    if (username1 === "hamza") {
        const website1 = "goggle";
        // console.log(username1,website1)
    }
    // console.log(website1)
    
}
// console.log(username1);

console.log(addTwo(5));
function addTwo (num) {
    return num + 1
}

const addTwo1 = function(num) {
    return num + 2
}
addTwo1(5);

