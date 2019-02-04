import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from "@angular/forms";
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeModule} from "./modules/employee/employee.module";
import {ReimbursementModule} from "./modules/reimbursement/reimbursement.module";
import {ManagerModule} from "./modules/manager/manager.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule,
    ReimbursementModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
