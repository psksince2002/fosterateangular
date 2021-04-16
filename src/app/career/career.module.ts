import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { CareerRoutingModule } from './career-routing.module';
import {AddComponent,HomeComponent} from './components'
import {DataService} from './service'


@NgModule({
  declarations: [
    AddComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[DataService],
  exports:[
   HomeComponent,
    AddComponent,
  ]
})
export class CareerModule { }
