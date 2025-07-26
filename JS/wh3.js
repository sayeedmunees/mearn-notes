//  write a program to check a 3 digit number is armstrong or not

// import prompt
const prompt = require("prompt-sync")({sigint:true})

const input = prompt("Enter a number: ")

var num = Number(input);

// Logic 1 using multiplication
var addingNumber = 1 ;
var multiplyNumber = "";

while (num >= addingNumber) {
    multiplyNumber += addingNumber;
    addingNumber++;
}
console.log("Multiplication Method",num*Number(multiplyNumber));


// Logic 2 using adding
var i = 1;
var adderNumber = "";
var sumOfNumber = 0;
while (i <= num) {
    adderNumber += num ;
    sumOfNumber += Number(adderNumber);
    i++;
}
console.log(`Addition method`, sumOfNumber);
