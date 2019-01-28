import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../app/model/ticket';
import { User } from '../../../app/model/user';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  UID: User= new User('', '', 0, '');
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {//What does this need to do on init?  Remember who this user is?
  }

}
