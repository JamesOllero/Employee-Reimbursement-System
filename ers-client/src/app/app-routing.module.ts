import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen-component/login-screen-component.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketStatusComponentComponent } from './components/ticket-status/ticket-status-component.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';

<<<<<<< HEAD
const routes: Routes = [
  { path: ''}
];

=======
const routes: Routes = [ {
  path: 'login',
  component: LoginScreenComponent
},{
  path: 'main/:user',
  component: MainMenuComponent
},
{
  path: 'new',
  component: NewTicketComponent
},
{
  path: 'tickets/:user',
  component: TicketStatusComponentComponent
},
{
  path: 'managetickets',
  component: UpdateTicketComponent
},];
// {
//   path: 'todos',
//   component: TodoListComponent
// },
// this.router.navigate([newpage])
>>>>>>> 0feac458241b92dc7221dcffc198fa453be3f504
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
