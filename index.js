//Console logs are used for debug our code

console.log("Hello from External Script");
console.log(100);
console.log(true);

//Variable
var myVariable ="My First Variable";
let loginName ="Sri";
let loggedIn = true;

//constant variable
const PI =3.14;
console.log(PI);

//absence of value
let password = null;
console.log(password);

//undefined variable
let someValue;
console.log(someValue);

//store new value
someValue = 35.5;
console.log(someValue);

let x = 10; //Global scope
// Here x is 10
console.log("Global:",x)

{
  let x = 2; //local/block scope
  // Within this block, x is now 2
  console.log("Block:",x)
}

// Outside of the block, x is still 10
console.log("Out of local block:",x);

console.log(typeof null);
console.log(typeof true);
console.log(typeof 45);
