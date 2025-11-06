//Varaible

// let js = "amazing";
// console.log(40+8+23-10);

// console.log('Jonas');
// console.log(23);

// let firstName = "Aesha";
// console.log(firstName);

// let aesha_nishant = "aeni";
// let $ae = "ni";

// let person = "jonas"
// let PI = 3.1415;

// assignemt

let country = "india";
let population = 20;

console.log (country);

//Data Types

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof javascriptIsFun);
// console.log(typeof 'Aesha');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year = 1991;
// console.log(typeof year);

// console.log(typeof null);

//assignment

let island = false;
let language;

console.log(typeof island);
console.log(typeof population);
console.log(typeof country);

//let,const & var

// let age = 30; //block
// age = 31;
// console.log(age);

// const birthYear =  1998;

// var job = "programmer";
// job = "tracher"; //function

//assignment

language = "Gujurati";
const coun = "india";

// //operator 

// //Math Operator
// const now = 2037
// const ageJonas = now - 1998;
// const ageSarah = now - 2005;
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// const firstName = 'jonas';
// const lastName = 'Patel';
// console.log(firstName+ ' ' +lastName);

// // Assignment operator
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4;
// x++;
// x--;    
// console.log(x);

// //comporison operator
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 35);

// challenge 1 & 2

const massMark = 78;
const heigthMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heigthMark * heigthMark)

const BMIJohn = massJohn / (heightJohn * heightJohn)

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is (${BMIMark}) and its greater than John's BMI`)
} else {
    console.log(`John's BMI is (${BMIJohn}) and its higer than Mark's`)
}


// challenge 2

const scoreDolphins  = (97 + 57 + 101) / 3;
const scoreKolas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKolas)

if (scoreDolphins<scoreKolas && scoreKolas >= 100) {
    console.log ("Koras wins the trophy")
} else if(scoreDolphins > scoreKolas && scoreDolphins >= 100) {
    console.log ('dolphin win')
} else if(scoreDolphins === scoreKolas && scoreDolphins >= 100 && scoreKolas >= 100 ) {
    console.log('both win')
} else {
    console.log("No one win")
}

// challenge 4

const bill = 335;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(bill);

console.log(tip);

console.log(bill+tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}`);
