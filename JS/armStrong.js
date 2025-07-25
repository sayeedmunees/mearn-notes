//  write a program to check a 3 digit number is armstrong or not

// import prompt
const prompt = require("prompt-sync")({sigint:true})

const input = prompt("Enter a number: ")

var num = Number(input);
var armstrongNumber = 0;


while (num > 0) {
    let lastdigit = num%10;
    num = Math.floor(num/10)
    armstrongNumber += (lastdigit**3)
}

console.log(armstrongNumber == input ? "Number is Armstrong" : "Not Armstrong");
