// WAP to check a email is valid or not
const prompt = require('prompt-sync')({sigint: true})
var mail = prompt('Enter email id:');
console.log(`${mail.endsWith("@gmail.com") ? "Valid email" : "Not Valid email"}`)