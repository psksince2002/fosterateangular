import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './career/service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, NavComponent } from './components';
import { CareerModule } from './career/career.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
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
