import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/';
  pathAddRecord: string = "addRecord/";
  pathUpdateRecord: string = "updateRecord/";
  pathDeleteRecord: string = "deleteRecord/";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  addRecord(employeeRecord){
    return this.http.get<any>(this.baseUrl+this.pathAddRecord+ JSON.stringify(employeeRecord));
  }

  updateRecord(employeeRecord){
    return this.http.get<any>(this.baseUrl+this.pathUpdateRecord+ JSON.stringify(employeeRecord));
  }

  deleteRecord(id){
    return this.http.get<any>(this.baseUrl+this.pathDeleteRecord+id);
  }

}
