// [id,name, designation,location, salary,experience]
employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000,3],
    [1001, 'Max', 'tester', 'TVM', 15000,2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000,4],
    [1003, 'Vyom', 'QA', 'kochi', 45000,5],
    [1004, 'Laisha', 'tester', 'TVM', 55000,7],
    [1005, 'Aahan', 'developer', 'TVM', 15000,1],
    [1006, 'Aahil', 'QA', 'kochi', 20000,2],
    [1007, 'Shayan', 'developer', 'kochi', 30000,3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000,3],
]

// find total salary of all employees

console.log("------Total Salary--------");

const totalSalary = employee.map (emp=>emp[4]). reduce((s1, s2) => s1+s2);
console. log(`Total salary is ${totalSalary}`);

// var totalSalar = 0;
// employee.map(emp => totalSalar += emp[4]);
// console.log(totalSalar);


// Find employee with highest salary

console.log("------Highest Salary--------");

const highSalary = employee.reduce((a,b) =>a[4]>b[4] ? a :b)
console. log(`High salary : ${highSalary[1]} Salary : ${highSalary[4]}`);

// employee.sort((a, b) => b[4] - a[4])
// console.log(employee[0]);


// Find employee with Least salary

console.log("------Least Salary--------");

const leastSalary = employee. reduce((a,b)=>a[4]<b[4] ? a :b)
console. log(`leastSalary : ${leastSalary[1]} Salary : ${leastSalary[4]}`);

const leastSalaryFirst = employee.reduceRight((a,b)=>a[4]<b[4] ? a :b)
console. log( `leastSalary : ${leastSalaryFirst[1]} Salary : ${leastSalaryFirst[4]}`);

// employee.sort((a, b) => b[4] - a[4])
// console.log(employee[employee.length-1]);


//  Find employee name

console.log("------Employee Name--------");
employee.forEach( emp => console.log(emp[1]));

// for(let emp of employee){
//         console.log(emp[1]);
// }


// 2. print Total number of employees

console.log(`------Total Employee : ${employee.length} --------`);


// 3. print developer employee details :filter

console.log("------Developer employee--------");
employee.filter(emp => emp[2] == 'developer').forEach(emp => console.log(emp[1]));

// for(let emp of employee){
//         if (emp[2] == 'developer'){
//             console.log(emp);
//     }
// }


// 4. print employee whose salary > 30000  :filter

console.log("------Salary > 30000--------")
employee.filter(emp => emp[4] > 30000).forEach(emp => console.log(emp[1]));

// for(let emp of employee){
//         if (emp[4] > 30000){
//             console.log(emp);
//     }
// }


// 5. print details of employee Laisha

console.log("------Employee Laisha--------");
const emp = employee.find(emp => emp[1] == 'Laisha');
console.log(emp);

// for(let emp of employee){
//         if (emp[1] == 'Laisha'){
//             console.log(emp);
//     }
// }


// 6. Sort employee based on their salary in decending order

console.log("------Salary in decending order--------");
employee.sort((a, b) => b[4] - a[4])
employee.forEach(emp => console.log(`Name : ${emp[1]}, Salary : ${emp[4]}`));

// for (let emp of employee){
//     console.log(`Name : ${emp[1]}, Salary : ${emp[4]}`);
// }


// 7. sort employee based on their experience in ascending order

console.log("------Experience in ascending order--------");
employee.sort((a, b) => a[5] - b[5]).forEach(emp => console.log(`Name : ${emp[1]}, Experience : ${emp[5]}`));

// for (let emp of employee){
//     console.log(`Name : ${emp[1]}, Experience : ${emp[5]}`);
// }

