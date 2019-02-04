import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import {ReimbursementServiceService} from "../../../reimbursement/services/reimbursement-service.service";
import { Reimbursement} from "../../../reimbursement/reimbursement";
import {forEach} from "@angular/router/src/utils/collection";
import {AuthServiceService} from "../../../../services/auth-service.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employee: Employee = JSON.parse(localStorage.getItem('authToken'));
  public recentReimbursements: Reimbursement[];

  constructor(
    private reimbursementService: ReimbursementServiceService,
    private authService: AuthServiceService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRecentReimbursements();
  }

  getRecentReimbursements() {
    this.reimbursementService.getRecentReimbursements(this.employee.id,
      () => {
        let reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
        this.recentReimbursements = reimbArr;
      },
      (err) => {
      console.log(err);
      });

  }

}
