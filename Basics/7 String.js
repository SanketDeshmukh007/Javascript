const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

let text = "Hello, World!";
let slicedText = text.slice(7, 12); // extracts characters from index 7 to 11
console.log(slicedText); // Output: "World"

// let text = "JavaScript";
// let slicedText = text.slice(-10, -6); // Negative indices count from the end
// console.log(slicedText); // Output: "Java"

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));