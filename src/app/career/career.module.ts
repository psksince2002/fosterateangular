import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerRoutingModule } from './career-routing.module';
import { AddComponent, HomeComponent, EditComponent} from './components';
import { EmployeeService } from './service';
import { Employee } from './model';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: []

})
export class CareerModule { }
