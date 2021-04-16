import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent,HomeComponent} from './career/components'

const routes: Routes = [
  {path:"home",component:HomeComponent},{path:"add",component:AddComponent}
,{path:"",redirectTo:"home",pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
