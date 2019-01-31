import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from "../services/auth-service.service";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  returnUrl: string;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginSubmit() {
    this.authService.authenticate(this.username, this.password,
      () => this.router.navigate([this.returnUrl]),
      (err) => {
      console.log(err);
      });
  }

}
