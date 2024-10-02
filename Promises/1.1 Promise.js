// Promise Creation
/*
const promiseOne = new Promise( (resolve,reject)=>{
    // Do an async task - e.g DB calls, cryptography, network

    setTimeout( ()=>{
        console.log("Async Task 1 Complete")
        resolve()
    }, 1000 )
} )

// Consuming the Promise
promiseOne.then(()=>{
    console.log("Promise 1 Consumed")
})
*/

/*
new Promise( (resolve,reject)=>{

    setTimeout( ()=>{
        console.log("Async Task 2 complete")
        resolve()
    }, 1000)

} ).then( ()=>{
    console.log("Promise 2 Consumed")
} )
*/

/*
const promiseThree = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        resolve({
            username : "chai",
            email : "chai@gmail.com"
        })
    } ,1000)
} )

promiseThree.then( (user)=>{
    console.log(user)
} )
*/

/*
const promiseFour = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        let error = false

        if(!error)
        {
            resolve({
                username : "sanket",
                password : "123"
            })
        }
        else
        {
            reject('ERROR : Something Went Wrong!')
        }
    }, 1000)
} )

promiseFour.then( (user)=>{
    console.log(user)
    return user.username
} ).then( (username)=>{
    console.log(username)
} ).catch( (error)=>{
    console.log(error)
} ).finally( ()=> console.log('The promise is either resolved or rejected') )

*/

/*
const promiseFive = new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
        let error = true

        if(!error)
        {
            resolve({
                username : "Javascript",
                password : "123"
            })
        }
        else
        {
            reject('ERROR : Javascript Went Wrong!')
        }
    }, 1000)
} )

async function consumePromiseFive()
{
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()
*/

