"use strict";
exports.__esModule = true;
//File Name:myModule.ts
//exporting Employee type
var Employee = /** @class */ (function () {
    function Employee(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    Employee.prototype.showDetails = function () {
        return this.firstname + "," + this.lastName;
    };
    return Employee;
}());
exports.Employee = Employee;
//exporting Student typee
var Student = /** @class */ (function () {
    function Student(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    Student.prototype.showDetails = function () {
        return this.rollNo + "," + this.name;
    };
    return Student;
}());
exports.Student = Student;
