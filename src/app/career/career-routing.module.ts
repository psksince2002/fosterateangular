import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent, AddComponent, EditComponent} from './components';
const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'contacts/edit/:userid', component: EditComponent},
  {path: 'contacts/:userid', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
