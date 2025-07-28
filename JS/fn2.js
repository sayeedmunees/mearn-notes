//  write to fumc to check the voting eligibility of persom


// Normal Func

// function vote(age) {
//     return age >= 18 ? "Eligible" : "Not Eligible";
// }

// Arrow Func
const vote = age => (age >= 18) ? "Eligible" : "Not Eligible";


console.log(vote(40));
console.log(vote(10));


