const promiseOne = new Promise(function(resolve, reject){
    //Do all your async tasks
    //DB calls, Cryptography, network calls
    setTimeout(() => {
        console.log("Aysnc tasks completed");
        resolve();
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            userName: "Rabi",
            email: "rabilodha@google.com"
        })
    }, 1000)
})

PromiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                userId: 72345,
                password: "rabi2507"
            })
        } else{
            reject('ERROR: Something Went Wrong')
        }
    },2000)
})

const userid = promiseFour
.then((user) => {
    console.log(user);
    return user.userId
})
.then((userId) => {
    console.log(userId);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("Work done sucessfully"))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                userType: "Pyhton",
                Gender: "male"
            })
        } else{
            reject('ERROR: Python went worong')
        }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()