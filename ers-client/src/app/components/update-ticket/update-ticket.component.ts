import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
