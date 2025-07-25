// wap to find factorial of a number
// import prompt

const prompt = require('prompt-sync')({sigint:true})

var num = prompt("Enter any number: ")

var fact = 1;
while (num>0) {
    fact *= num;
    num--
}
console.log(`Factorial is ${fact}`);
