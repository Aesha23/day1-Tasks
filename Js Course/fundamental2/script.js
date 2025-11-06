"use strict"; //no code before this comment allowed

/*
let hasDriverLicense = false;
const passTest =  true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('i can drive');



function logger () {
    console.log('My name Is Aesha!');

}
// calling , running , revoking functions
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

//function declaration

function calcAge1(birthYear) {
  return 2035 - birthYear;
}
const age1 = calcAge1(1998);
console.log(`Nishant 's age is ${age1}`);

//function expression

const calcAge2 = function (birthYear) {
  //annyoms fn
  return 2035 - birthYear;
};
const age2 = calcAge2(2005);
console.log(`Aesha 's age is ${age2}`);

//arrow fn

const calcAge3 = (birthYear) => 2035 - birthYear;
const age3 = calcAge3(2031);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirment = 60 - age;
  return `${firstName} retires in ${retirment} years`;
};
console.log(yearsUntilRetirment(1998, "Nishant"));
console.log(yearsUntilRetirment(2005, "Aesha"));
