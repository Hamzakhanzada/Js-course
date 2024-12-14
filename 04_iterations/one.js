// Discuss about for loops

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i);
    
// }

//  Printing the table using loop 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop vlaue : ${i}`);

    for (let j = 1; j <= 10; j++) {
    //  console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash","batman","superman"];
// console.log(myArray.length);

for (let index = 0; index <  myArray.length; index++) {
    const element =  myArray[index];
    // console.log(element);
    
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break
        
//     }
//     console.log(`The value is i = ${i}`);
    
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue
        
    }
    console.log(`The value is i = ${i}`);
    
}