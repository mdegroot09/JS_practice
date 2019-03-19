//DATATYPES

/*
For the first part of the exercise let's make
some variables with different datatypes
*/

//list the six main datatypes
//boolean
//number
//string
//null
//undefined
//symbol

//Create a variable with a boolean value called likesPizza. ANSWER CORRECTLY! 
var likesPizza = true;

//Create a variable with a string datatype and call it myString
let myString = " ";

//Create a variable with the value of your favorite number called favoriteNumber
var favoriteNumber = 17;

//Create a variable with an Array of 5 items listing your favorite foods called favoriteFoods
var favoriteFoods = ["pizza", 'burgers', 'steak', 'hot dogs', 'cereal'];

/*
Create a variable called favCeleb that is an Object with the key value pairs of name, age, quote, and characteristics.
name should be a string, age should be a number, quote should also be a string,
and characteristics should be an array.
*/
var favCeleb = {
    name: "Chris Pratt",
    age: 34,
    quote: "I like everything about your plan, except it sucks.",
    characteristics: ["funny", "good actor"]
}

//Create a function that returns the value of the favoriteNumber variable that you created
function favNumber(){
    return favoriteNumber;
}

//Create a variable with the value of null called placeholder and one of undefined called nothing
var placeholder = null;
var nothing = undefined;

//!BONUS ROUND!

// Create a new variable that is equal to a concatanation of myString and favoriteNumber and call it concat
let concat = myString + favoriteNumber;

// Create another concatanated variable using myString, favoriteNumber, and two different items from favoriteFoods
let concat2 = myString + favoriteNumber + favoriteFoods[0] + favoriteFoods[1];

//Try to use the typeof Operator on all of the variables you just created
console.log(typeof(placeholder));
console.log(typeof(nothing));
console.log(typeof(concat));
console.log(typeof(concat2));

//Truthy and Falsy

//comment next to these values whether they are truthy or falsy

let car = 'DeLorean' //truthy

let nope = false //falsy

let pizza = NaN //falsy

let theVoid; //falsy

let person = {} //truthy

const zero = 0 //falsy

let blank = '' //falsy

let differentBlank = ' ' //truthy

let honestPoliticians = [] //truthy

//Try to put the variables in this if statement to help if you get stuck
//uncomment to get working on it

// if (differentBlank){
//     console.log(`It's truthy!`)
// } else{
//     console.log(`That's falsy, my dude.`)
// }

//SCOPE

//Help! the imBroken function wont work! try to fix it using what you learned about scope in yesterday's lecture and afternoon project
//uncomment to get working on it

const magicNumber = 42
let adder = 4

function notSoMagicNumGenerator(magicNumber, adder){
    let notSoMagicNumber = magicNumber + adder;
    return notSoMagicNumber
}

function imBroken(){
    return magicNumber + notSoMagicNumber;
}

notSoMagicNumber = notSoMagicNumGenerator(magicNumber, adder);
sum = imBroken()

//Here's another function that needs a fixin'
//uncomment to get working on it

// let people = "Donovan"
// let goldenYear = 50

// function assignVals(name,age){
//     return `Hello my name is ${name} and I am ${age} years young.`
// }

// assignVals(goldenYear,people)

//Oopsie I brokeded another!

// let doge = 'bestest boy'

// function dogtown(){
//     console.log(doge)
// }

// dogtown('Me cat now')

//!BONUS ROUND!

//Uncomment the same problem and find a different way to solve the scope issue

/*
const magicNumber = 42

function notSoMagicNumGenerator(num){
    let notSoMagicNumber = num
    return notSoMagicNumber
}


function imBroken(){
    function innerFunc(){
        return magicNumber + notSoMagicNumber
    }
}

notSoMagicNumGenerator(4)
imBroken()
*/