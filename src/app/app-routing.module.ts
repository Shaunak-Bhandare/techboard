import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessComponent} from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path:'', component: NavbarComponent}, //home
  {path:'technology', component: TechnologyComponent}, //tech news
  {path:'business', component: BusinessComponent}, //business news
  {path:'sports', component: SportsComponent}, //sports news
  {path:'entertainment', component: EntertainmentComponent}, //entertainment news
  {path:'login', component: LoginComponent}, //login
  {path:'register', component: RegisterComponent}, //register
  {path:'contact', component: ContactComponent} //contact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
