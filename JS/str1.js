var str = "Malayalam";

console.log(`Total Charecters: ${str.length}`);
console.log(`Capital Letters: ${str.toUpperCase()}`);
console.log(`Lower case Letters: ${str.toLowerCase()}`);

console. log(`SubString of ${str}: ${str.substring(0,3)}`);
console. log(`SubString of ${str}: ${str.slice(0,-2)}`);
console. log(`Is ${str} starts with "M": ${str.startsWith("M")}`);
console. log(`Is ${str} Ends with "M": ${str.endsWith ("M")}`);

var sentence = "Language is JS";
console.log(sentence.split(' '));
console.log(sentence.split(''));
console.log(`Does str starts with Ma: ${str.includes('Ma')}`);

var word = "    Hello World    ";
console.log(`Word length before: ${word.length}`);
console.log(`Word length after: ${word.trim().length}`);
