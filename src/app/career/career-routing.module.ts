import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent, AddComponent, EditComponent} from './components';
const routes: Routes = [
  {path: 'home', component: HomeComponent}, {path: 'add', component: AddComponent}, {path: 'home/edit', component: EditComponent}
, {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
