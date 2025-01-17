let myVar='Hello Js'.toLowerCase();
console.log(myVar);

let str1="Hello";
console.log(str1.length);

let str2= "World!";
console.log(str2.length);

let html ="hello html";
console.log(html.toUpperCase());

let email ="user1@example.com";
let providedEmail ="User1@example.com";

if(email.toLowerCase().trim() === providedEmail.toLowerCase().trim()){
    console.log(`Hello ${email}`);
}else{
    console.log("Hello random user");
}


