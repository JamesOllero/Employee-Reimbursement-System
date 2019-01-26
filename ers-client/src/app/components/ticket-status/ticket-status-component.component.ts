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
