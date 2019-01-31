import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { ReimbursementDetailsComponent } from './components/reimbursement-details/reimbursement-details.component';
import { ReimbursementCreatorComponent } from './components/reimbursement-creator/reimbursement-creator.component';
import { ReimbursementApprovalComponent } from './components/reimbursement-approval/reimbursement-approval.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeCreatorComponent } from './components/employee-creator/employee-creator.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ReimbursementsComponent,
    ReimbursementDetailsComponent,
    ReimbursementCreatorComponent,
    ReimbursementApprovalComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeCreatorComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
