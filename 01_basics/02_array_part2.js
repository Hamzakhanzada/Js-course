// how to concatinate arrays

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// marvelHeroes.push(dcHeroes); avoid this method to concat the array
// console.log(marvelHeroes);

// const allMyHeroes = marvelHeroes.concat(dcHeroes); two way concat the array this one
// console.log(allMyHeroes);
// console.log(allMyHeroes[4]);

const allMyHeroes = [...marvelHeroes, ...dcHeroes]; // another one to concat array; people must be prefer this one
// console.log(allMyHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray('Hamza'));
console.log(Array.from('Hamza'));
console.log(Array.from({name:'hamza'})); //intresting case in the interview this statement returns empty array

let score1 =  100;
let score2 =  200;
let score3 =  300;

console.log(Array.of(score1,score2,score3));
