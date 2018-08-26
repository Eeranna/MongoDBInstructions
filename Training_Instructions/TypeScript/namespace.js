"use strict";
exports.__esModule = true;
var InsideNs;
(function (InsideNs) {
    //exporting outside the namespace body
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
    InsideNs.Student = Student;
    //Only available inside the namespace body
    var maxCount = 100;
    var Employee = /** @class */ (function () {
        function Employee(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Employee.prototype.showDetails = function () {
            return this.firstName + "," + this.lastName;
        };
        return Employee;
    }());
})(InsideNs = exports.InsideNs || (exports.InsideNs = {}));
var SNTricks;
(function (SNTricks) {
    var Student = InsideNs.Student;
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.fullName = function () {
            return this.firstName + "" + this.lastName;
        };
        return Person;
    }());
    SNTricks.Person = Person;
    //creating object of student class
    var st = new Student(1, "Mohan");
    console.log(st.showDetails());
})(SNTricks || (SNTricks = {}));
