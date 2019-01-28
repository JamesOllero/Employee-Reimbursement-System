import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../../app/model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getPendingTickets(): Observable<Array<Ticket>>{
    return this.http.get<Array<Ticket>>('');
  }

  getTicketsById(Id: Number): Observable<Array<Ticket>>{
    return this.http.get<Array<Ticket>>('');
  }

  
}
