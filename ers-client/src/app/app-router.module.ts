import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent} from "./login/login.component";
import { AuthGuardServiceService } from "./services/auth-guard-service.service";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {EmployeeDetailsComponent} from "./modules/manager/components/employee-details/employee-details.component";
import {EmployeeProfileComponent} from "./modules/employee/components/employee-profile/employee-profile.component";
import {NewReimbursementComponent} from "./modules/reimbursement/components/new-reimbursement/new-reimbursement.component";
import { RebursementsComponent } from './modules/reimbursement/components/rebursements/rebursements.component';
import {NewEmployeeComponent} from "./modules/manager/components/new-employee/new-employee.component";
import {ReimbursementDetailComponent} from "./modules/reimbursement/components/reimbursement-detail/reimbursement-detail.component";
import {ApproveReimbursementComponent} from "./modules/reimbursement/components/approve-reimbursement/approve-reimbursement.component";
import {EmployeesComponent} from "./modules/manager/components/employees/employees.component";
const routes: Routes = [
  {
    path: 'main',
    component: MainMenuComponent,
    canActivate: [AuthGuardServiceService],
    children: [
      {
        path: 'manager',
        children: [
          {
            path: 'reimbursements',
            component: RebursementsComponent
          },
          {
            path: 'reimbursements/details/:id',
            component: ReimbursementDetailComponent
          },
          {
            path: 'employees',
            component: EmployeesComponent
          },
          {
            path: 'employees/details/:id',
            component: EmployeeDetailsComponent
          },
          {
            path: 'create-employee',
            component: NewEmployeeComponent
          },
          {
            path: '',
            redirectTo: 'reimbursements',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'employee',
        children: [
          {
            path: 'profile',
            component: EmployeeProfileComponent
          },
          {
            path: 'reimbursements',
            component: RebursementsComponent
          },
          {
            path: 'reimbursements/details/:id',
            component: ReimbursementDetailComponent
          },
          {
            path: 'create-reimbursement',
            component: NewReimbursementComponent
          },
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {
    path: 'logout',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
