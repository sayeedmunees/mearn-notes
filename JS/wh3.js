//  write a program to do the logic below
// input     2           3           4                 5
// Logic 1   2*12        3*123       4*1234
// Logic 2   2+22        3+33+333    4+44+444+4444
// output    24          369         4936              ?

// import prompt
const prompt = require("prompt-sync")({sigint:true})

const input = prompt("Enter a number: ")

var num = Number(input);

// Logic 1 using multiplication
var addingNumber = 1 ;
var multiplyNumber = "";

while (addingNumber <= num) {
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
