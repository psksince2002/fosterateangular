import { Component, OnInit } from '@angular/core';
import {DataService} from '../../career/service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public DataService:DataService) { }

  ngOnInit(): void {
  }

}
