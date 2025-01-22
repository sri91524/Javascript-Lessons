// const providedName = prompt("Enter your name");
// sayHello(providedName);

// function definition
function sayHello(userName)
{
    console.log("Hello " + userName 
        + "!"
    );
}

sayHello("Sri")


//function expression
let sayBye = function(userName){
    console.log("See you later "+ userName);
}
sayBye("Tom");

//Arrow function
const add = (a,b) => console.log(a + b);

//function call
add(1,2);


const addFive = (num) =>{
    console.log(num + 5);
}
addFive(5);

//using function with a function or method or callback function
const nums =[3, 5, 16];
// nums.forEach((num) => console.log(num));

console.log("=========nums.forEach(addTen)=======")
nums.forEach(addTen);

// nums.forEach(function(num)
// {
//     console.log(num);
// }
// )

//Functions with return keyword
function addTen(a){
    console.log(a + 10);
    return a + 10;
}
const result = addTen(5);
console.log(result);

function areBothEven(n1, n2){
    return !(n1 % 2) && !(n2 % 2);
}

// let n1 = prompt("Enter number 1");
// let n2 = prompt("Enter number 2");
let n1 = 2;
let n2 = 4; 
let checkEven = areBothEven(n1, n2);
console.log(`Are both number ${n1} and ${n2} - ${checkEven}`);


//The area of a rectangle with a width of _ and a height of _ is ___ square units.

function computeArea(width, height)
{
    console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`);
}
computeArea(100, 102);

// Write a function named planetHasWater using the function expression syntax.

// It will have one parameter: planet.
// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

function planetHasWater(planet){
    if(planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars" ){
        return true;
    }
    else{
        return false;
    }
}

console.log(`Earth has water - ${planetHasWater("Earth")}`);
console.log(`MARS has water - ${planetHasWater("MARS")}`);
console.log(`Jupiter has water - ${planetHasWater("Jupiter")}`);
console.log(`Mercury has water - ${planetHasWater("")}`);