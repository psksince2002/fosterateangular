import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {AddComponent,HomeComponent} from './components'
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }