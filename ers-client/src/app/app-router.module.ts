import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeeCreatorComponent } from "./components/employee-creator/employee-creator.component";
import { LoginComponent } from "./components/login/login.component";
import { ReimbursementsComponent } from "./components/reimbursements/reimbursements.component";
import { ReimbursementDetailsComponent } from "./components/reimbursement-details/reimbursement-details.component";
import { ReimbursementCreatorComponent } from "./components/reimbursement-creator/reimbursement-creator.component";
import { ReimbursementApprovalComponent } from "./components/reimbursement-approval/reimbursement-approval.component";

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    canActivate: [AuthGuardService]
  }
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
