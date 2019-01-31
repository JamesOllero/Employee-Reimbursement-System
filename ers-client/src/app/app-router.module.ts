import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent} from "./login/login.component";
import { AuthGuardServiceService } from "./services/auth-guard-service.service";
import {MainMenuComponent} from "./main-menu/main-menu.component";

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
