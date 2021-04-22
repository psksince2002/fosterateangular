import { Component, OnInit ,ElementRef} from '@angular/core';
import {DataService} from '../../service'
import {NgIf,NgForOf} from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact_list:any=[]

  constructor(private elementRef:ElementRef,private DataService:DataService) {
        //obj.classList.add('active-item')
        this.contact_list=this.DataService.getData().contactlist
        this.DataService.name=''
        this.DataService.navstatus=true
   this.DataService.mail=''
   this.DataService.number=''
   this.DataService.landline=''
   this.DataService.website=''
   this.DataService.address=''
  }
  ngOnInit(): void {
  }



  onListItemClick(obj:any):void{

    this.DataService.changeActive(obj);
  }

  afterDelete():void{
      this.DataService.Delete();
  }
  afterEdit():void{
    this.DataService.Edit();
  }
}
