const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls ,cryptography,
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise consumed');

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('second Async task is completed');
        resolve()
    }, 1000)
})

    .then(function () {
        console.log('consumed');

    })

const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ user: 'Hamza', userEmail: 'HamzaKz@gmial.com' })
    }, 1000)
})
thirdPromise.then(function (data) {
    console.log(data);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({
                userName: 'Hamza', password: '1234'
            })

        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.userName
    })
    .then((userName) => {
        console.log(userName)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log('The Promise is either resolved or rejected'));

const fivePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userEmail: 'khan@gmail.com', password: '204' })
        } else {
            reject('error userEmail not be found')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await fivePromise;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getAllUsers()

fetch('https://api.github.com/users/Hamzakhanzada')
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error)=> {
    console.log(error)
})




