import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Employee} from "../../employee/employee";

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {
  private employeeUrl = 'http://localhost:8080/user';

  constructor(
    private http: HttpClient
  ) {
  }

  getEmployees(success, fail) {
    return this.http.get<Array<Employee>>(this.employeeUrl).toPromise()
      .then((resp) => {
          localStorage.setItem('employees', JSON.stringify(resp));
          console.log('Got all employees');
          success();
        },
        (err) => {
          fail(err);
        });
  }

  getEmployee(employeeId: number, success, fail) {
    let params = new HttpParams().set('employeeId', employeeId.toString());
    return this.http.get<Employee>(this.employeeUrl, {params}).toPromise()
      .then((resp) => {
          localStorage.setItem('employee', JSON.stringify(resp));
          success();
        },
        (err) => {
          fail(err);
        });
  }

  createEmployee(employee: Employee, success, fail) {
    return this.http.post(this.employeeUrl, JSON.stringify(employee)).toPromise()
      .then((resp)=>{
        success();
      },
        (err)=>{
        fail(err);
        });
  }
}


