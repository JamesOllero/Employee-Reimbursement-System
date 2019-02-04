import { Component, OnInit } from '@angular/core';
import {ManagerServiceService} from "../../services/manager-service.service";
import {Employee} from "../../../employee/employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(
    private managerService: ManagerServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.managerService.getEmployees(
      () => {
        let empArr = JSON.parse(localStorage.getItem('employees'));
        this.employees = empArr;
        return;
      },
      (err) => {
        console.log(err);
      });
  }

  loadDetails(id: number) {
    this.managerService.getEmployee(id,
      () => this.router.navigateByUrl('/main/manager/employees/details/'+id.toString()),
      (err) => {
      console.log(err);
      });
  }
}
