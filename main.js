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
            new PartTime("Breece", 22, 20, 12),
            new PartTime("Float", 20, 42, 5)
        ];
        this.showMenu();
        this.displayEmployees();
    }

    //Choice Menu for User
    showMenu() {
        

        // I tried adding console.clear() and taking it out but no matter what it would not show up in the console. It would just appear randomly but once console.clear is added it disappears again.
        while (true) {
            let choice = prompt("Main Menu \n 1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n \nEnter Selection:");
        
        if (choice === "1" || choice === "2" || choice === "3" || choice === "4"){
            this.handleChoice(choice);
        } 
        else if (choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4" && choice !== "5"){
            alert("Please select the options presented to you.");
        }
        this.displayEmployees();
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
        let input = prompt("Add Employee Name, age, hours, pay rate [separate each by a comma]");
        let [name, age, hours, payRate] = input.split(",").map(item => item.trim());
        age = parseInt(age);
        hours = parseInt(hours);
        payRate = parseFloat(payRate);

        let newEmployee = hours < 40 ? new PartTime(name, age, payRate, hours) : new Manager(name, age, payRate);
        this.employees.push(newEmployee);
        console.log("Employee successfully added!");
        this.displayEmployees();
    }

    removeEmployee() {
        let name = prompt("Enter employee name to remove:");
        this.employees = this.employees.filter(remove => remove.name !== name);
        console.log("Employee successfully removed.");
        this.displayEmployees();
    }

    editEmployee() {
        let name = prompt("Enter employee name to edit:");
        let employee = this.employees.filter(edit => edit.name === name)[0];
        if (employee) {
            employee.payRate = parseFloat(prompt("Enter new pay rate:"));
            employee.calculatePay();
            console.log("Employee pay rate updated!")
        } else {
            alert("Employee not found. Enter an existing employee.");
            console.log("Employee not found.");
        }
        this.displayEmployees();
    }

    displayEmployees() {
        console.log("Shawn's Pizza Place");
        console.log("ID\tName\tAge\tSalary\tHours\tPay\tFT/PT");
        this.employees.forEach((emp, index) => {
            console.log(`${index + 1}\t${emp.name}\t${emp.age}\t${emp.employeeSalary}\t ${emp.hours || 40}\t  ${emp.payRate}\t ${emp.employeeType}`);
        });
    }
}

// IIFE
(function() {
    new Main();
})();
