// wap to find GCD/HCF of 2 numbers

// import package
const prompt = require("prompt-sync")({sigint:true});

const input1 = prompt("Enter a 1st number : ");
const input2 = prompt("Enter a 2nd number : ");

var num1 = Number(input1);
var num2 = Number(input2);

const smallNumber = num1 > num2 ? num1 : num2;

var hcf = 1;
for (let i = 1 ; i <= smallNumber ; i++) {
    if (num1%i == 0 && num2%i == 0) {
        hcf = i;
    }
}

console.log(`GCD or HCF : ${hcf}`);