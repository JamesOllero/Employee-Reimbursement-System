import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  userNavs: Array<{title: string}>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.hasRoles(['Manager'])) {
      this.userNavs = environment.managerNav;
    } else {
      this.userNavs = environment.employeeNav;
    }
  }

}
