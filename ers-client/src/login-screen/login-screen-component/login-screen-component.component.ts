import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen-component',
  templateUrl: './login-screen-component.component.html',
  styleUrls: ['./login-screen-component.component.css']
})
export class LoginScreenComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class User {
  constructor(
    // public id: number,
    public username: String,
    public password: String,
    // public fName: String,
    // public lName: String,
    // public email: String,
    // public role: String
  ) {}
}
