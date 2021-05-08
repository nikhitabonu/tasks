
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './feature/home/home.component';
import { MenuComponent } from './feature/menu/menu.component;
import { MyCartsComponent } from './feature/mycarts/mycarts.component;
import { signup } from './feature/signup/sign.component;


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Menu', component:MenuComponent},
  {path:'Mycarts', component:MyCartsCoponent},
  {path:'Signup', component:Signupcomponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
export const routingComponent = [
  MenuComponent,
  MyCartComponent,
  SignupComponent,
  AppComponent
];
  }




