import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReimbursementServiceService} from "../../services/reimbursement-service.service";
import {Reimbursement} from "../../reimbursement";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {AuthServiceService} from "../../../../services/auth-service.service";
import {Employee} from "../../../employee/employee";


@Component({
  selector: 'app-reimbursement-detail',
  templateUrl: './reimbursement-detail.component.html',
  styleUrls: ['./reimbursement-detail.component.css']
})
export class ReimbursementDetailComponent implements OnInit {
  reimbursement: Reimbursement;
  editing: boolean = false;

  private reimbursementUrl = 'http://localhost:8080/ticket';
  constructor(
    private route: ActivatedRoute,
    private reimbursementService: ReimbursementServiceService,
    private location: Location,
    private http: HttpClient,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.getReimbursement();
  }

  getReimbursement(): void {
    this.reimbursement = JSON.parse(localStorage.getItem('reimbursement'));
  }

  goBack(): void {
    this.location.back();
  }

  startEdit(): void {
    this.editing = true;
  }

  onSubmit() {
    let employee: Employee;
    employee = JSON.parse(localStorage.getItem('authToken'));
    this.reimbursement.resolverId = employee.id;
    this.reimbursementService.updateReimbursement(this.reimbursement,
      () => {
      this.editing = false;
      this.goBack();
      },
      (err) => {
      console.log(err);
      this.goBack();
      });
  }

  isManager() {
    return this.authService.hasRoles(['Manager']);
  }

  isActiveUser() {
    let employee: Employee;
    employee = JSON.parse(localStorage.getItem('authToken'));
    if(this.reimbursement.authorId===employee.id) {
      return true;
    } else {
      return false;
    }
  }
}
