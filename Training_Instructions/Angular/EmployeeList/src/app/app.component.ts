import { Component } from '@angular/core';
import { UserService } from "./user.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users =[];
  formTitle:string= "Add";
  message="";
  employeeRecord={
    "_id":"",
    "firstName":"",
    "mname":"",
    "lastName":"",
    "dept":"",
    "Salary":"",
    "City":"",
    "email":""
  }
 //Inject dependancy in to a component by putting parameter and type in to constructor

  constructor( private userService: UserService){}
  ngOnInit(){
    this.displayEmployeeList();
  }

  displayEmployeeList(){
    this.userService.getUsers()
    //.subscribe(data=>{ this.users = data })
    .subscribe(data=>this.users=data,error=>this.message=error);
   
  }

  refreshEmployeeList(){
    this.displayEmployeeList();
  }

  showForm(){
    document.getElementById("formSection").style.visibility = "visible";
  }

  //hide and clean form
  hideForm(){
    this.cleanForm();
    document.getElementById("formSection").style.visibility = "hidden";
  }

  cleanForm(){
    this.employeeRecord={
      "_id":"",
      "firstName":"",
      "mname":"",
      "lastName":"",
      "dept":"",
      "Salary":"",
      "City":"",
      "email":""
    }
  }

  addRecord(){
    this.formTitle="Add";
    this.showForm();
  }

  deleteRecord(id){
    this.userService.deleteRecord(id).subscribe();
    this.displayEmployeeList();
  }

  updateRecord(employee){
    this.formTitle="Update";
    this.employeeRecord = employee;
    this.showForm();
  }

  onSave(){
    if(this.formTitle==="Add"){
      this.userService.addRecord(this.employeeRecord).subscribe();
    }else if(this.formTitle==="Update"){
      this.userService.updateRecord(this.employeeRecord).subscribe();      
    }
    this.hideForm();
    this.displayEmployeeList();
  }

  onClose(){
    this.hideForm();
  }

  key:string = "firstName";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse= this.reverse;
  }
  p:number =1;
}
