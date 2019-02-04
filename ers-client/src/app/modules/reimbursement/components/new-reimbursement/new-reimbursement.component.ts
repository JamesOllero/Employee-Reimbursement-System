import { Component, OnInit } from '@angular/core';
import {Reimbursement} from "../../reimbursement";
import {Employee} from "../../../employee/employee";
import {ReimbursementServiceService} from "../../services/reimbursement-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-reimbursement',
  templateUrl: './new-reimbursement.component.html',
  styleUrls: ['./new-reimbursement.component.css']
})
export class NewReimbursementComponent implements OnInit {
  newReimbursement = new Reimbursement;
  constructor(
    private reimbursementService: ReimbursementServiceService,
    private router: Router) { }

  ngOnInit() {
    let employee: Employee;
    employee = JSON.parse(localStorage.getItem('authToken'));
    this.newReimbursement.authorId = employee.id;
    this.newReimbursement.id = 0;
    this.newReimbursement.description = '';
    this.newReimbursement.type = '';
    this.newReimbursement.amount;
  }

  onSubmit() {

    this.reimbursementService.createReimbursement(this.newReimbursement,
      () => {
        this.router.navigateByUrl('main/employee/profile');
      },
      (err) => {
      console.log(err);
      });
  }
}
