import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../employee/employee";
import {ManagerServiceService} from "../../services/manager-service.service";
import {Location} from "@angular/common";
import {Reimbursement} from "../../../reimbursement/reimbursement";
import {ReimbursementServiceService} from "../../../reimbursement/services/reimbursement-service.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = JSON.parse(localStorage.getItem('employee'));
  employeeReimbursements: Array<Reimbursement>;

  constructor(
    private managerService: ManagerServiceService,
    private reimbursementService: ReimbursementServiceService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.reimbursementService.getUserReimbursements(this.employee.id,
      () => {
        let reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
        this.employeeReimbursements = reimbArr;
      },
      (err) => {
        console.log(err);
      });
  }

  goBack() {
    this.location.back();
  }
}

