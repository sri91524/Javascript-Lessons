
console.log("Conditional Examples")

//Global Scope
let lastName ="Vidhya";
let firstName ="Sree";

{
    let firstName='John';
    let lastName ='Smith';
    //Local Scope
    let fullName = `${firstName}${lastName}`;
    console.log(fullName);
}

// var pollution ='sucks'
// console.log(window.pollution);

let pollution ='sucks'
console.log(pollution);

//Var
{
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
//let  
  {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  let total =1;
  if(total === 10)
  {
    console.log(`Total is equals to ${total}`);
  }
  else{
    console.log("Sorry total is not equal to 10")
  }

  total = -10;
  //single line block
  if(total > 5) console.log("Success!");
  else console.log("failed");

  let secretCode;
  if(secretCode)
  {
    console.log("truthy");
  }
  else
  {
    console.log("falsy");
  }

  let num = -46;
  if(num > 0)
  {
    console.log("Positive");
  }
  else
  {
    console.log("negative");
  }

  //==================
  let userAge = 19;
  let paidUser = false;

  if (userAge >=18 )
  {
    console.log("Access Granted");
    if(paidUser)
    {
        console.log("Unlimited music");        
    }
    else{
        console.log("Watch ads every 30 mins");
    }
  }
  else
  {
    console.log("Access Denied");
  }

  //=====if elseif
  userAge = 19;
  if(userAge <=13)
  {
    console.log("Kids Team");
  }else if(userAge < 18)
  {
    console.log("Teenagers Team");
  }else if(userAge >= 18)
  {
    console.log('Adult Team');
  }else{
    console.log("Age is not valid");
  }

  //==============Exercise

let number = 101;
if(number > 0 && number > 100)
{
    console.log(`Number ${number} is positive & greater than 100`);
}else if(number > 0 && number < 100)
{
    console.log(`Number ${number} is positive but less than 100`);
}
else if(number < 0)
{
    console.log(`Number ${number} is negative`);
}
else
{
     console.log(`Given Input is ${number}`);
}

//=========================
// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let score = 100;

if(score >= 90 && score <=100)
{
    console.log("A");
}
else if(score >= 80 && score <=100)
{
    console.log("B");
}
else if(score >= 70 && score <=100)
{
    console.log("C");
}
else if(score >= 55 && score <=100)
{
    console.log("D");
}
else if(score <  55 && score > 0)
{
    console.log("F");
}
else
{
    console.log("Enter valid score");
}

// Switch Statement

let statusCode = 500;

switch(statusCode)
{
    case 200:
        console.log("Request was successful");
        break;
    case 404:
        console.log("No found!");
        break;
    case 500:
        console.log("Server Error!");
        break;
    default:
        console.log("Invalid Status Code");
}

//=======Terenary op ===========
let isAuthenticated = false;
let authorized = isAuthenticated? "Granted" : "Denied";
console.log(authorized);

//=========if else===========

let auth;
if(auth)
{
    console.log("Granted");
}
else
{
    console.log("Denied");
}

//Throw Keyword
let amount = 10;

if (amount < 0) {
	console.log("Negative!");
} else {
	//throw "Error - I don't know what I'm doing.";
}
console.log("Does this log?");

let orderAmount= 100;
try {
    if(orderAmount < 0)
    {
        console.log("Try Again!");
    }
    else
    {
        throw "Error with Payment";
    }
} catch (error) {
    console.log(error);    
}

console.log("Does this log?")