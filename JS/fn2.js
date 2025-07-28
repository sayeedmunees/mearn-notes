//  write to fumc to check the voting eligibility of persom

function vote(age) {
    return age >= 18 ? "Eligible" : "Not Eligible";
}

console.log(vote(40));
console.log(vote(10));


// const vote = (age) => {
//     return age >= 18 ? "Eligible" : "Not Eligible";
// }
