import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from "../services/auth-service.service";
import { environment } from "../../environments/environment";
import { Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  userNavs: Array<{title: string, link: string}>;

  constructor(
    private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit() {
    if(this.authService.hasRoles(['Manager'])) {
      this.userNavs = environment.managerNav;
      this.router.navigate(['main/manager/reimbursements']);
    } else {
      this.userNavs = environment.employeeNav;
      this.router.navigate(['main/employee/profile']);
    }
  }

}
