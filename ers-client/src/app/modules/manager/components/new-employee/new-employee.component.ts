import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../employee/employee";
import {ManagerServiceService} from "../../services/manager-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  newEmployee= new Employee;
  constructor(
    private managerService: ManagerServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newEmployee.id = 0;
    this.newEmployee.firstName = '';
    this.newEmployee.lastName = '';
    this.newEmployee.username = '';
    this.newEmployee.email = '';
    this.newEmployee.password = '';
    this.newEmployee.role = 'Employee';
  }

  onSubmit() {
    this.managerService.createEmployee(this.newEmployee,
      () => {
    this.router.navigateByUrl('main/manager/employees');
  },
      (err) => {
      console.log(err);
      });
  }
}
