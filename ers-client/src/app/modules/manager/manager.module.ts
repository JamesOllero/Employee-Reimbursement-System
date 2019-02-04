import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent, NewEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    EmployeeDetailsComponent, EmployeesComponent, NewEmployeeComponent
  ]
})
export class ManagerModule { }
