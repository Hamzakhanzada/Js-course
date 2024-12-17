const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc,currVal) {
//     console.log(`acc Value ${acc} and currval Value ${currVal}`)
//     return acc + currVal
    
// },0)

const myTotal = myNum.reduce((acc,curval) => (acc + curval),0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999,
    },
    {
        itemName : "HTml Course",
        price : 1999,
    },
    {
        itemName : "Css Course",
        price : 999,
    },
    {
        itemName : "React Course",
        price : 3999,
    },
]

const shoppingCartPrice = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(shoppingCartPrice);