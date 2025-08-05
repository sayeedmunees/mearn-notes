// WAP program to check the given word starts with Q
const prompt = require('prompt-sync')({sigint: true})
var data = prompt('Enter a word:');

console.log(data.toUpperCase().startsWith("Q") ? "Starts with Q" : "Doesnt Starts with Q");

