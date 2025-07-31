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

// Find employee with highest salary

console.log("------Highest Salary--------");

employee.sort((a, b) => b[4] - a[4])

console.log(employee[0]);


// Find employee with Least salary

console.log("------Least Salary--------");

employee.sort((a, b) => b[4] - a[4])

console.log(employee[employee.length-1]);


//  Find employee name

console.log("------Employee Name--------");

for(let user of employee){
        console.log(user[1]);
}



// 2. print Total number of employees

console.log(`------Total Employee : ${employee.length}--------`);

// 3. print developer employee details :filter

console.log("------Developer employee--------");

for(let user of employee){
        if (user[2] == 'developer'){
            console.log(user);
    }
}

// 4. print employee whose salary > 30000  :filter

console.log("------salary > 30000--------");

for(let user of employee){
        if (user[4] > 30000){
            console.log(user);
    }
}

// 5. print details of employee Laisha

console.log("------employee Laisha--------");

for(let user of employee){
        if (user[1] == 'Laisha'){
            console.log(user);
    }
}
// 6. Sort employee based on their salary in decending order

console.log("------salary in decending order--------");

employee.sort((a, b) => b[4] - a[4])

for (let user of employee){
    console.log(`Name : ${user[1]}, Salary : ${user[4]}`);
}


// 7. sort employee based on their experience in ascending order

console.log("------experience in ascending order--------");

employee.sort((a, b) => a[5] - b[5])

for (let user of employee){
    console.log(`Name : ${user[1]}, Experience : ${user[5]}`);
}

