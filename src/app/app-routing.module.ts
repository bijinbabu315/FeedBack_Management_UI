import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventlistComponent } from './shared/components/eventlist/eventlist.component';

const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path: 'login',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path: 'dashboard',
  pathMatch: 'full',
  component: DashboardComponent
},
{
  path: 'eventlist',
  pathMatch: 'full',
  component: EventlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
