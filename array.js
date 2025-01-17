
//Array of strings

const names = ["John", "Abagail", "Jerome"];
const greetings = [];

console.log(names);

for(let i=0; i < names.length; i++){
    greetings[i] = "hello " + names[i] +"!";
    console.log(greetings[i]);
}
console.log(greetings);

for(let name of names){
    console.log(name);
}

//Accessing elements in Array
const movies = ['Caddyshack', 'Interstellar', 'Scarface'];

let firstMovie = movies[0];  // 'Caddyshack'

movies[0] = "1";
let playMovie = movies[0];

// adds a new value to index 10 and will also add 6 empty indexes
movies[10] ="RRR";
movies[-1] ="Titanic";
console.log(movies[-1]);
console.log(movies[-2]);
// console.log(movies.length);
console.log(playMovie);
console.table(movies);

for (let i=0;i < movies.length; i++)
{
    console.log(movies[i]);
}

console.log(movies.at(-1));

console.log("=====================Array Methods=================");
const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

const ourMovies = yourMovies.concat(myMovies);
const ourMoviesCopy = ourMovies.concat();
ourMovies.push("dfsdf");

console.log(ourMovies); 
console.log(ourMoviesCopy);


const movieStr = ourMovies.join(" ");
console.log(movieStr.toUpperCase());

//join
console.log(ourMovies.concat(myMovies).join(" "));

//push
ourMoviesCopy.push("Trading Places", "Antitrust");
ourMoviesCopy.unshift('Star Wars');
console.log(ourMoviesCopy);

//pop
let lasttMovie = ourMoviesCopy.pop();
console.log(lasttMovie);

//shift
let fsttMovie = ourMoviesCopy.shift();
console.log(fsttMovie);

//splice
const topMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// removedMovies => ['Trading Places']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']
let removedMovies = topMovies.splice(3,1,'Spaceballs', 'Alien');
console.log(topMovies);

// This starts at element 0 and removes 3 elements.
// removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// movies => ['Spaceballs', 'Alien']
 removedMovies = topMovies.splice(0,3);

// This starts at element 1 and does not remove anything, but adds The Sting.
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']
removedMovies = topMovies.splice(1,0,'The String');
console.log(topMovies);

//slice
let oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let favMovies = movies.slice(1,3);

console.log(favMovies);
console.log(oldMovies);

//at

let currMovie = favMovies.at(1); 
console.log(currMovie);
currMovie = favMovies.at(-2); 
console.log(currMovie);

console.log(oldMovies);
console.log(oldMovies.reverse());