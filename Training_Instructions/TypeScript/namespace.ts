export namespace InsideNs{
	//exporting outside the namespace body
	export class Student{
		constructor(private rollNo:number,private name:string){}
		showDetails(){
				return this.rollNo+","+this.name;
			}
		}
		//Only available inside the namespace body
		let maxCount: number=100;
		class Employee{
			constructor(private firstName:string,private lastName:string){}
			showDetails(){
				return this.firstName+","+this.lastName;
			}
		}
	}
	namespace SNTricks {//accessing insideNs namespace student class
import Student = InsideNs.Student;
export class Person {
	constructor(private firstName:string,private lastName:string){}
	fullName():string{
		return this.firstName+""+this.lastName;
	}
   }
   //creating object of student class
  let st = new Student(1,"Mohan");
  console.log(st.showDetails());
 }
