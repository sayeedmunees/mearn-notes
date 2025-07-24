// WAP to print second largest number among 3 unique number and print them in ascending order

let num1 = 100, num2 = 60, num3 = 55;

// console.log(`Before sorting ${num1}, ${num2}, ${num3}`);

a = (num1 > num2) && (num1 < num3) || (num1 < num2) && (num1 > num3) ? [num1 ,num2] = [num2, num1] : (num2 > num1) && (num2 < num3) || (num2 < num1) && (num2 > num3) ? true : (num3 > num1) && (num3 < num2) || (num3 < num1) && (num3 > num2) ? [num2 ,num3] = [num3, num2] : false ;

console.log( a ? `${num2} Second largest` : `3 unique numbers are expected`);
console.log( a && num1 > num3 ? `After sorting ${num3}, ${num2}, ${num1}` : a ? `After sorting ${num1}, ${num2}, ${num3}` : ``);



// a = (num1 > num2) && (num1 < num3) || (num1 < num2) && (num1 > num3)
// b = (num2 > num1) && (num2 < num3) || (num2 < num1) && (num2 > num3)
// c = (num3 > num1) && (num3 < num2) || (num3 < num1) && (num3 > num2)

// console.log( a ? `${num1} Second largest` : b ? `${num2} Second largest` : c ? `${num3} Second largest` : `Enter unique number`);