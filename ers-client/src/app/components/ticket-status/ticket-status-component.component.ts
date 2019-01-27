import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../app/model/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { User } from '../../../app/model/user';

// -Displays a table of all user's tickets
// -Pulls ALL user's tickets from database
// -Logout

// constructor(id: number,
//   subDate: Date,
//   type: string,
//   description: string,
//   cost: number,
//   status: string,
//   updater: string,
//   approveDeny: string){}

@Component({
  selector: 'app-ticket-status-component',
  templateUrl: './ticket-status-component.component.html',
  styleUrls: ['./ticket-status-component.component.css']
})
export class TicketStatusComponentComponent implements OnInit {
  tickets: Array<{ticket}> = [];
  temp: Ticket = new Ticket(0, null, '', '', 0, '', '', '');
  ticketService: TicketService;

  constructor(

    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}


// Services in typescript are blocks of reusable code set up to call to a servlet
// Set up an HTTP request

//subscribe is there to take what the java side takes back