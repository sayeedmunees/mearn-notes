//  Array

const days = ["Monday", "Tuesday", "Wednesday"]

console.log(days);
console.log(`Type of : ${typeof days}`);
console.log(`Total values in array : ${days.length}`);
console.log(`First data: ${days[0]}`);
console.log(`Last data: ${days[days.length-1]}`);


// Array methods ( array.push(value), array.unshift(value), array.pop(), array.shift())

days.push("Thursday");
console.log(days);

days.unshift("Sunday");
console.log(days);

days.pop();
console.log(days);

days.shift();
console.log(days);

// Iteration


// Normal for loop
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}

// For -of loop
for (let day of days) {
   console.log(day);
}

// For -in loop
for (let index in days) {
    console.log(days[index]);
}