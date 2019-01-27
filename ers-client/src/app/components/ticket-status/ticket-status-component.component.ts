import { Component, OnInit } from '@angular/core';

// -Displays a table of all user's tickets
// -Pulls ALL user's tickets from database
// -Logout

@Component({
  selector: 'app-ticket-status-component',
  templateUrl: './ticket-status-component.component.html',
  styleUrls: ['./ticket-status-component.component.css']
})
export class TicketStatusComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// Services in typescript are blocks of reusable code set up to call to a servlet
// Set up an HTTP request

//subscribe is there to take what the java side takes back