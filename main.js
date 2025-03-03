// Employee super class + sub classes
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.employeeSalary = 0;
    }
}

class PartTime extends Employee {
    constructor(name, age, payRate, hours) {
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = "Part-Time";
        this.calculatePay();
    }
    calculatePay() {
        this.employeeSalary = this.payRate * this.hours * 52;
    }
}

class Manager extends Employee {
    constructor(name, age, payRate) {
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Full-Time";
        this.calculatePay();
    }
    calculatePay() {
        this.employeeSalary = (this.payRate * 40 * 52) - 1000;
    }
}

// Main Class
class Main {
    constructor() {
        this.employees = [
            new Manager("Shawn", 45, 25),
            new PartTime("Maggy", 22, 20, 12),
            new PartTime("Tom", 42, 5)
        ];
        this.showMenu();
    }

    //Choice Menu for User
    showMenu() {
        while (true){
            console.clear();
            let choice = prompt("Choose an option: \n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5. Exit");
            if (choice === "5") break;
            this.handleChoice(choice);
        }
    }

    handleChoice(choice) {
        if (choice === "1") {
            this.addEmployee();
        } else if (choice === "2"){
            this.removeEmployee();
        } else if (choice === "3"){
            this.editEmployee();
        } else if (choice === "4"){
            this.displayEmployees();
        }
    }

    // User Prompts & Edits

    addEmployee() {
        let name = prompt("Enter employee name:");
        let age = parseInt(prompt("Enter employee age:"));
        let payRate = parseFloat(prompt("Enter employees' hourly pay rate:"));
        let hours = parseInt(prompt("Enter hours per week:"));

        let newEmployee = hours < 40 ? new PartTime(name, age, payRate, hours) : new Manager(name, age, payRate);
        this.employees.push(newEmployee);
        console.log("Employee successfully added!");
        this.displayEmployees();
    }
}


// IIFE
(function() {
    new Main();
})();
