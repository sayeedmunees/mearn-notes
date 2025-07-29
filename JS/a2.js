// find out

var expenses = [23000, 45000, 55000, 10000, 22000, 12000, 97000]

// Display least expense
// Display Highest expense
// Display total expense

var leastExpense = expenses[0];
var highestExpense = expenses[0];
var totalExpense = 0;
for (let i of expenses){
    leastExpense > i ? leastExpense = i : highestExpense < i ? highestExpense = i : "false";
    totalExpense += i ;
}

console.log(`Least expense: ${leastExpense}, Highest expense: ${highestExpense}, Total expense: ${totalExpense}`);


// if ( leastExpense > i){
//         leastExpense = i
//     }
// else if (highestExpense < i){
//     highestExpense = i
// }