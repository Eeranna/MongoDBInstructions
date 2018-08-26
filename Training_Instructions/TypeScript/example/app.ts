//File Name:app.ts
//importing the exporting types Student and Employee from myModule file
import {Student, Employee} from "./myModule";
let st = new Student(1,"Mohan");
let result1=st.showDetails();
console.log("Student Details:"+result1);
let emp = new Employee("Shailendra","Chauhan");
let result2 = emp.showDetails();
console.log("Employee Details:"+result2);