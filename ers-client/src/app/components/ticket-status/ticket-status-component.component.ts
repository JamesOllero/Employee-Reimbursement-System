import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// -Displays a table of all user's tickets
// -Pulls ALL user's tickets from database
// -Logout

@Component({
  selector: 'app-ticket-status-component',
  templateUrl: './ticket-status-component.component.html',
  styleUrls: ['./ticket-status-component.component.css']
})
export class TicketStatusComponentComponent implements OnInit {

  constructor( 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

export class Ticket {
  // Ticket ID, Submission Date, Type, Description, Cost, Status, Updated By, Date of Approval/Denial
  id: number;
  subDate: Date;
  type: string;
  description: string;
  cost: number;
  status: string;
  updater: string;
  approveDeny: string;
}
// Services in typescript are blocks of reusable code set up to call to a servlet
// Set up an HTTP request

//subscribe is there to take what the java side takes back