//  write to fumc to check the voting eligibility of persom

function vote(age) {
    return age >= 18 ? "Eligible" : "Not Eligible";
}

console.log(vote(40));
console.log(vote(10));

// WAP to find cube of a number

function cube(num) {
    return num**3;
}

console.log(cube(3));
console.log(cube(4));


// WAP to check if the number is odd or even

function oddOrEven(num) {
    return num%2 == 0 ? "Even" : "Odd"
}

console.log(oddOrEven(6));
console.log(oddOrEven(7));
