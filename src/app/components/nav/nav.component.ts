import { Component, OnInit } from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {EmployeeService} from '../../career/service/'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }

  onHomeClick(){
    var contacLen=this.employeeService.contactList.length
        console.log(this.router.url)
    if(contacLen && (this.router.url==='/contacts' )){
        var id:number = this.employeeService.contactList[0].id
        this.router.navigate(['contacts/',id])
    }
    else if(contacLen && (this.router.url==='/add' )){
      var id:number = this.employeeService.contactList[0].id
      this.employeeService.changeActive(this.employeeService.contactList[0])
      this.router.navigate(['contacts/',id])
    }
    else if(contacLen===0){
      this.router.navigate(['contacts/'])
    }
    else{
      var id:number  = Number(this.router.url.charAt(this.router.url.length - 1));
      this.router.navigate(['contacts/', id]);
    }

  }

}
