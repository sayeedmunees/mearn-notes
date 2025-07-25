//  Reverse a number

// import prompt
const prompt = require("prompt-sync")({sigint:true})

const input = prompt("Enter a number: ")

var num = Number(input);
var reversedNumber = "";

while (num > 0) {
    let lastdigit = num%10;
    num = Math.floor(num/10)
    reversedNumber += lastdigit
}

console.log(reversedNumber == input ? "Number is palindrome" : "Not palindrome");
