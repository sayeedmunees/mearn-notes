class Employee{
    // properties

    // methods
    constructor (id, name, salary, desig){
        this. empid = id
        this. empName = name
        this. empSalary = salary
        this. empDesig = desig
    }
    displayEmp(){
        console. log(`EmpName is : ${this. empName}`);
    }
}

// object
const emp1 = new Employee(1, "Sulu", 23000, "Tester");

emp1.displayEmp();