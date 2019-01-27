import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket-status/ticket-status-component.component';
import { User } from '../login-screen/login-screen-component/login-screen-component.component'

// -Welcomes User
// -Allows User to access different pages based on status(Employee/Admin)
// -Logout

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  userNavs: Array<{title: string}>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
      if (this.authService.hasRoles(['Manager'])) {
          this.userNavs = environment.managerNav;
      } else {
          this.userNavs = environment.employeeNav;
      }
  }
}

