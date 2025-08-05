// wap to print all vowels from the given word

const prompt = require( 'prompt-sync') ({sigint:true})
var data = prompt ("Enter any Word: ")
var vowels = ["a", "e", "i","o", "u"]

console. log(data.toLowerCase().split("").filter(char => vowels.includes(char)));