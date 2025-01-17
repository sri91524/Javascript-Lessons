


// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.

// Count down to 0 from a given number.

let x = 10;

console.log(`x`);
while(x >= 0)
    {
        console.log(`x is ${x}`);
        x--;
    }

    // Log integers in multiples of 3 as long as they are less than 35.
    let i = 3;
    while(i < 35){
        console.log(i);
        i +=3;
    }

    // Print integers in multiples of 5 as long as they are less than 100.
    let j = 5;
    while( j < 100)
    {
        if(j % 5 === 0)
        {
            console.log(j);
        }
        j++;
    }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

console.log("******************************")
    let y = 0;

    while (y <= 20){

        if(y % 2 === 0)
        {          
            console.log(`y = ${y} and output after multiplication: ${y*3}`);
        }
        y++;
    }

    console.log("*****************Nested For Loops****************************");

    let str ="ABC";
    for(let i=0; i < str.length;i++){
        // console.log(str[i]);
        {
            for(let j =0; j < str.length; j++)
            {
                console.log(str[i]+ str[j]);
            }
        }
    }
       
     console.log("*************************************************************"); 

     for (let i = 1; i <= 20; i++) {

    let isPrime = true; //flag

    // 1 & 3 as odd
    if (i === 1 || i == 3) {
        console.log(`${i} is Odd`);
        continue

        // log odd numbers
    } else if (i % 2 !== 0) {
        console.log(`${i} is Odd`);
    }
    
    // Treat 2 as an even number
    if (i === 2) {
        console.log(`${i} is Even`);
        continue

        // log even numbers
    } else if (i % 2 === 0) {
        console.log(`${i} is Even`);
    }

    // checks for prime numbers
    for (let j = 2; j < i; j++) {
        
        // if i is divisible by j
        if (i % j === 0) {
            isPrime = false
            // console.log(`${i} is Not Prime`);
            break;
        }
    }

    if (isPrime) {
        console.log(`${i} is Prime`);
    }
}

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received

let cookiePrice = 4;
let payment = 10;

let change = payment- cookiePrice;
let quarters = 0;
console.log(change);

while (change >= 0.25 ){
    change -= 0.25;
    quarters ++;    
}
console.log(quarters);
console.log("=======Do while Example=========");
//Do while loop
let z = 10;
do {
	z--;
	console.log(z);
} while (z > 50);

let num;
do{
    console.log("Hello to my numner game!");
    num = parseInt(prompt("Enter a number greater than 10 and less than 20"));
    console.log(`You enter:${num}`);
}while(num <= 10 || num >= 20);

// example of labeled statements
// let x1 = 1;
// let y1 = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x1}.`);
// 	x1++;

// 	while (true) {
// 		console.log(`Inner loop ${y1}.`);
// 		y1++;

// 		if (x1 == 5 && y1 % 5 == 0) {
// 			break myLoop;
// 		} else if (y1 % 5 == 0) {
// 			break;
// 		}
// 	}
// }

// //example of continue statements
// let x2 = 1;
// let y2 = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x2}.`);
// 	x2++;

// 	while (true) {
// 		console.log(`Inner loop ${y2}.`);
// 		y2++;

// 		if (x2 == 5 && y2 % 5 == 0) {
// 			break myLoop;
// 		} else if (y2 % 5 == 0) {
// 			continue myLoop;
// 		}
// 	}
// }