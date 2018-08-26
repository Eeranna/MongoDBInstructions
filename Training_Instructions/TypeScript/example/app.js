"use strict";
exports.__esModule = true;
//File Name:app.ts
//importing the exporting types Student and Employee from myModule file
var myModule_1 = require("./myModule");
var st = new myModule_1.Student(1, "Mohan");
var result1 = st.showDetails();
console.log("Student Details:" + result1);
var emp = new myModule_1.Employee("Shailendra", "Chauhan");
var result2 = emp.showDetails();
console.log("Employee Details:" + result2);
