"use strict";
exports.__esModule = true;
//File Name:app1.ts
var reexport_1 = require("./reexport");
//importing st as Student
var st = new reexport_1.st(1, "Mohan");
var result1 = st.showDetails();
console.log("Student Details:" + result1);
