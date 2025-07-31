var numArray = [10,11,12,45,87,23,34];

var newArray = numArray.filter(num => num%2 != 0);
console.log(newArray);

// for (let oddNum of newArray){
//     console.log(oddNum);
// }

console.log(numArray.map(num => num**2));
