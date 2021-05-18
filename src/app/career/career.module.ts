import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerRoutingModule } from './career-routing.module';
import { AddComponent, HomeComponent, EditComponent} from './components';
import { EmployeeService } from './service';
import { Employee } from './model';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyC0JjsiOc-CEliqvG9BuXmUYdxzUl7JuUM",
  authDomain: "practice-fd6e0.firebaseapp.com",
  databaseURL: "https://practice-fd6e0-default-rtdb.firebaseio.com",
  projectId: "practice-fd6e0",
  storageBucket: "practice-fd6e0.appspot.com",
  messagingSenderId: "637483429616",
  appId: "1:637483429616:web:07fcdd347149c79849dc35",
  measurementId: "G-W05FRX21CE"
};


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
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: []

})
export class CareerModule { }
