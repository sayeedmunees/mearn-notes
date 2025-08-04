var numArray = [
[10, 20], [30,50, [22, 66]], [90,100], [90, 25]
]

// console. log(numArray) ;
const flatArray = numArray.flat(Infinity);

// WAP to print all numbers >50
console. log(flatArray.filter (num => num>50));

// WAP to display all square of all numbers
console.log(flatArray.map(num => num**2));