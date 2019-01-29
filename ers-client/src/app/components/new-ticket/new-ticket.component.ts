import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../app/model/ticket';
import { User } from '../../../app/model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  UID: User= new User('', '', 0, '');
  temp: Ticket = new Ticket(0, null, '', '', 0, '', '', '')


  constructor(
    http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {//What does this need to do on init?  Remember who this user is?
  }


  handleNew(evt) {
    if (evt.update) {
      this.temp.description = evt.value;
      this.http.post(
        'http://localhost:8080/ers/newticket',
        JSON.stringify(this.temp),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .subscribe(
        (ticket: Ticket) => {
          this.ticket.push(Ticket);
          this.temp = new Ticket(0, null, '', '', 0, '', '', '');
        },
        err => console.log(err)
        );
    }
  }
}
