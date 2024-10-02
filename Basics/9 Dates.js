// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Only Date
// console.log(myDate.toLocaleString()); // Date + Time
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // M->start from 0
// let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD M->start from 1
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// Returns time in mili_seconds from 1 Jan 1970 to now
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // Time in mili_seconds
// console.log(Math.floor(Date.now()/1000)); // Time in seconds

let newDate = new Date()
console.log(newDate); // current date
// getMonth() default starts from 0
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})