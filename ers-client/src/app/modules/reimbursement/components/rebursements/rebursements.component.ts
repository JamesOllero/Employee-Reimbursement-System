import { Component, OnInit } from '@angular/core';
import {Reimbursement} from "../../reimbursement";
import {ReimbursementServiceService} from "../../services/reimbursement-service.service";
import {Employee} from "../../../employee/employee";
import {AuthServiceService} from "../../../../services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReimbursementDetailComponent} from "../reimbursement-detail/reimbursement-detail.component";

@Component({
  selector: 'app-rebursements',
  templateUrl: './rebursements.component.html',
  styleUrls: ['./rebursements.component.css']
})
export class RebursementsComponent implements OnInit {
  public reimbursementsPile: Array<Reimbursement>;
  employee: Employee;
  managerState: boolean;

  constructor(private authService: AuthServiceService,
              private reimbursementService: ReimbursementServiceService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  detailsUrl: string;
  ngOnInit() {
    this.getReimbursements();
    this.managerState = this.authService.hasRoles(['Manager']);
  }

  getReimbursements() {
    if(this.authService.hasRoles(['Manager'])) {
      this.getAllReimbursements();
      return;
    } else {
      this.getUserReimbursements();
      return;
    }
  }

  getAllReimbursements() {
    this.reimbursementService.getReimbursements(
      () => {let reimbArr = JSON.parse(localStorage.getItem('reimbursements'));

      this.reimbursementsPile = reimbArr;
      return;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserReimbursements() {
    let employee = JSON.parse(localStorage.getItem('authToken'));
    this.reimbursementService.getUserReimbursements(employee.id,
      () => {let reimbArr = JSON.parse(localStorage.getItem('reimbursements'));
        let i:number;
        for(i=0;i<reimbArr.length;i++) {
          reimbArr[i].submissionDate = new Date(reimbArr[i].submitted);
        }
        this.reimbursementsPile = reimbArr;
        },
      (err) => {
      console.log(err);
      });
  }

  loadDetails(id: number) {
    if(this.authService.hasRoles(['Manager'])){
      this.reimbursementService.getReimbursement(id,
        () => this.router.navigateByUrl('/main/manager/reimbursements/details/'+id.toString()),
        (err) => {
        console.log(err);
        });
    } else {
      this.reimbursementService.getReimbursement(id,
        () => this.router.navigateByUrl('/main/employee/reimbursements/details/'+id.toString()),
        (err) => {
        console.log(err);
        });
    }
  }
}
