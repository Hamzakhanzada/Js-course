const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

console.log(newNums);

const books = [
    {title : 'Book-1',genre : 'English',publish : '1996'},
    {title : 'Book-2',genre : 'History',publish : '1999'},
    {title : 'Book-3',genre : 'Botnoy',publish : '1997'},
    {title : 'Book-4',genre : 'Zology',publish : '1560'},
    {title : 'Book-5',genre : 'Math',publish : '1280'},
    {title : 'Book-6',genre : 'Cs',publish : '2602'},
    {title : 'Book-7',genre : 'History',publish : '1980'},
]

// const userBook = books.filter((bk) => bk.genre === 'History')
// console.log(userBook);

const userBook1 = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBook1);