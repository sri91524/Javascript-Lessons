console.log("loops");

for(let i=0; i < 10; i++){
    console.log(`The value of i is : ${i}`);
}

console.log("10 to 1");

for(let x=10; x >0; x--){
    console.log(`The value of x is : ${x}`);
}

console.log("=================output even numbers from 1 to 10============");
for(let i = 2;i <= 10;i+=2)
{
    console.log("The value of x:",i);    
}


console.log("=====output multiples of 3, starting at 6 and ending at 60====")
for(let i = 6; i <60; i +=3)
{
    console.log(i);
}

let hashtag = ''

for(let i = 1;i <= 7; i++)
{
    hashtag += '#';
    console.log(hashtag);
    
    // console.log("#".repeat(i));
}

console.log("======= :oop over a string ==========");
let str = "Hello World!";

console.log(str[0]);
console.log(str.length);

for(let i = 0; i< str.length; i++)
{
    console.log(str[i]);
}


console.log("====== For in Loop =======");

//For in loops are normally used with object and they return the index or the property name

for(const i in str){
    console.log(str[i]);
}

//Looping over object will return the property name
let myObject = {name: "Max"};
for (const i in myObject){
    console.log(i);
}

console.log("===== For of Loop ========")

//For of loop return the values of a iterable
for (const i of str)
{
    console.log(i);
}

//Loop over an array and access each value in the array
let myArray = ["Hello", "world", "JS", "HTML"];
for(const word of myArray){
console.log(word);
}

console.log("====== continue (Control Flow) =====");

for (let i=0; i < str.length; i++)
    {
        if ( str[i] === 'l'){
            continue;
        }
        
        console.log(str[i]);
    }

    console.log("====== break (Control Flow) =====");
    
    for (let i=0; i < str.length; i++)
        {
            if ( str[i] === 'l'){
                break;
            }
            
            console.log(str[i]);
        }
        
        
        let value = 30;
        
        console.log("====== While Loop =====");
        while (value > 0)
        {            
            if(value === 20){
                value--;
                continue;
            }

            if(value === 15){
                break;
            }
            console.log(value);
            value--;          

        }