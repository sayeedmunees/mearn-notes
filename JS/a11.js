var numArray = [10,11,52,45,87,23,34];

var newArray = numArray.filter(num => num%2 != 0);
console.log(newArray);

// for (let oddNum of newArray){
//     console.log(oddNum);
// }

console.log(numArray.map(num => num**2));


// print a new array with values satisfying the given condition, if existing array value is greater than 50 the decrement its value by 1 or i

console.log(numArray.map(num => num > 50 ? num-1 : num+1));

// find least number
console.log("Least value: ", numArray.reduce((a, b) => a < b ? a : b));

// find highest number
console.log("Hoghest value: ", numArray.reduce((a, b) => a > b ? a : b));

// find the sum of all number
console.log("Total sum: ",numArray.reduce((a, b) => a + b));
