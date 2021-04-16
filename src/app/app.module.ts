import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './career/service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components';
import {CareerModule} from './career/career.module';
//console.log(CareerModule)
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

//import {AddComponent,HomeComponent} from './career/components'



@NgModule({
  declarations: [
    AppComponent
    //AddComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    CareerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
