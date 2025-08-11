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

const emp2 = new Employee(2, "Raju", 33000, "Developer");
emp2.displayEmp();

// create a class for product (id, name, price, quantity) in it a function for display product details and an object for that.

class Products {
    constructor(id, name, price, quantity) {
        this.prodId = id
        this.prodName = name
        this.prodPrice = price
        this.prodQuantity = quantity
    }

    displayProduct(){
        console. log(`Id is : ${this.prodId}`);
        console. log(`Name is : ${this.prodName}`);
        console. log(`Price is : ${this.prodPrice}`);
        console. log(`Quantity is : ${this.prodQuantity}`);
    }
}

const prod1 = new Products(1,'Biscuit', 20, 25)
prod1.displayProduct();