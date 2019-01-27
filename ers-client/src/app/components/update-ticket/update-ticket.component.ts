import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../app/model/ticket';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { User } from '../../../app/model/user';

// -Admin-Exclusive
// -Pulls all Unchecked Tickets from database not submitted by user
// -Allows Admin to approve/deny tickets
// -Requires an amount to reimburse employee if approved
// -Logout

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
tickets: Array<Ticket> = [];
temp: Ticket = new Ticket(0, null, '', '', 0, '', '', '');
ticketService: TicketService;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {//todo: pull the table 

  }

}
