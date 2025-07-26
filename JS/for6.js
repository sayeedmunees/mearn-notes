// wap to check a number is prime or not

// import package
const prompt = require("prompt-sync")({sigint:true});

const input = prompt("Enter a number : ");

var num = Number(input)
var halfOfInput = num/2
var flag = true;
for (let i = 2 ; i <= Math.ceil(num/2) ; i++) {
    if (num%i == 0) {
        flag = false;
        break
    }
}

console.log(flag ? "Is prime" : "Not prime");