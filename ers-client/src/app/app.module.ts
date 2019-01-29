import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTicketComponent,
    UpdateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//What I need:
//Import Router + Routes from x
//import forRoot
