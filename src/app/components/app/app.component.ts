import { Component } from '@angular/core';
import {DataService} from '../../career/service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fosterateangular';
  constructor(public DataService:DataService){
    //this.navstatus=this.ds.navstatus

   }
}
