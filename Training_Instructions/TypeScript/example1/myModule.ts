//File Name:myModule.ts
//exporting Employee type
export class Employee{
	constructor(private firstname:string,private lastName:string){}
	showDetails(){
		return this.firstname+","+this.lastName;
	}
}
//exporting Student typee
export class Student{
	constructor(private rollNo:number,private name:string){}
	showDetails(){
		return this.rollNo+","+this.name;
	}
}