import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../app/model/ticket';
import { User } from '../../../app/model/user';
import { TicketService } from 'src/app/services/ticket.service';

// -Welcomes User
// -Allows User to access different pages based on status(Employee/Admin)
// -Logout

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  userNavs: Array<{title: string}>;
  tickets: Array<{ticket}> = [];
  temp: Ticket = new Ticket(0, null, '', '', 0, '', '', '');
  ticketService: TicketService;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {

  }
}

