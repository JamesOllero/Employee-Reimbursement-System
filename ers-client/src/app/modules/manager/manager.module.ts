import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent, NewEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class ManagerModule { }
