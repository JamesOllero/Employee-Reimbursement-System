import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RebursementsComponent } from './components/rebursements/rebursements.component';
import { ReimbursementDetailComponent } from './components/reimbursement-detail/reimbursement-detail.component';
import { NewReimbursementComponent } from './components/new-reimbursement/new-reimbursement.component';
import { ApproveReimbursementComponent } from './components/approve-reimbursement/approve-reimbursement.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [RebursementsComponent, ReimbursementDetailComponent, NewReimbursementComponent, ApproveReimbursementComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    RebursementsComponent, ReimbursementDetailComponent, NewReimbursementComponent, ApproveReimbursementComponent
  ]
})
export class ReimbursementModule { }
