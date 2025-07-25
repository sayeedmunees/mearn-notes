// wap to find factorial of a number

// import prompt
const prompt = require('prompt-sync')({sigint:true})

var input = prompt("Enter any number: ")

// convert str to num
var num = Number(input)

var fact = 1;
while (num>0) {
    fact *= num;
    num--;
}
console.log(`Factorial of ${input} is ${fact}`);
