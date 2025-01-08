console.log("5 greater than 4:", 5 > 4);
console.log("9 less than 4:", 9 < 4)
console.log("200 less equal to 400:", 200<=400)

//(==) type conversion
console.log("300 == '300'", 300 == "300")

//(===) No type conversion
console.log("300 === '300'", 300 === "300")

console.log(10!=100);
console.log(10!=10);

//(!=) type conversion
console.log("10 != '10'",10 != "10")
//(!==) No type conversion
console.log("10 !== '10'",10 !== "10")


console.log(3 + 3); // 6
console.log(3 + "3"); // "33"
console.log("6" + 6); // "66"
console.log("hello" + "world"); // "helloworld"

//
let result = 3 + 3;

console.log(result);

//logical operator
// && - and operator
// || - or operator
// ! - not operator

let thisLogic = 3 > 2 && 6 === 6;
thisLogic = 3 > 4 && 6 === 6;
thisLogic = 3 > 2 && 6 === 3;
console.log("And Logic: ", thisLogic);

thisLogic = 3 > 4 || 6 === 6;
thisLogic = 3 > 2 || 6 === 3;
console.log("OR Logic: ", thisLogic);


thisLogic = !false;
console.log("Negates :", thisLogic);

//string concatenation

let message ="Hello JS!"
console.log("Hello" +" " + "World!" + "!!! " + message);

console.log("Hello" - "JS");

const userName = "Welcome to USA"
console.log(userName.length);
console.log(userName[0]);
console.log("Hello World!"[6]);

console.log("hey" === "hey"); //true
console.log("Hey" === "Hey"); //true
console.log("Hey" === "hey");//false
console.log("Hey" < "hey"); //true

let password ="Password123$";
// let userPassword = prompt("Enter your password")

// if(password === userPassword)
// {
//     console.log("Welcome");
// }
// else
// {
//     console.log("Wrong Password");
// }