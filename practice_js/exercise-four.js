// loops practice set

for (let i = 10; i >= 1; i--) {
    console.log(i);
    
}

let i = 1
while (i <= 10 ) {
    console.log(i)
    i ++
}

let j = 1
do {
    console.log('Javascript fun',j)
    j++
} while (j < 4);


for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
     row += '*'        
    }
    console.log(row)
}