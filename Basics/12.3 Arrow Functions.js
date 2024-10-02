const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {}

// function chai(){
//     let username = "hitesh"
//     console.log(this); // {context}
//     console.log(this.username); // undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this); // {context}
//     console.log(this.username); // undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
    //     console.log(this.username); // undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// Returning Object
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

const obj1 = {
    name: "Sanket",
    regularFunction: function() {
      console.log(this.name);  // 'this' refers to the current object (obj)
    }
  };
  
obj1.regularFunction();  // Output: Sanket

const obj2 = {
    name: "Sanket",
    arrowFunction: () => {
      console.log(this.name);  // 'this' refers to the global scope, not 'obj'
    }
  };
  
  obj2.arrowFunction();  // Output: undefined (since 'this' does not refer to 'obj')
  