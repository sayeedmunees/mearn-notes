// WAP to print factorial of a number using for loop

// import package
const prompt = require("prompt-sync")({sigint:true});

const input = prompt("Enter a number : ");

var fact = 1;
for (let num = Number(input) ; num > 1 ; num--) {
    fact *= num;
}

console.log(`Factorial of ${input} is ${fact}`);