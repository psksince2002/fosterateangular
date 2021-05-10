import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service';
import {Router} from '@angular/router';
import {Employee} from '../../model/';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactList: any = [];
  activeObj!: Employee;

  constructor( private employeeService: EmployeeService, private router: Router) {
        // obj.classList.add('active-item')
        this.contactList = this.employeeService.getData().contactlist;
        this.activeObj = employeeService.active_obj



  }

  ngOnInit(): void {
  }
  intialnavigation(){
    this.router.navigate(['contacts'])
  }
  changeActiveContact(Employeeobject: any): void{
     this.employeeService.changeActive(Employeeobject);
     // this.activeObj = this.contactList.find((Employeeobject: Employee) => Employeeobject.status);

     this.employeeService.active_obj = this.contactList.find((object: Employee) => object.id===Employeeobject.id);
     this.activeObj=this.employeeService.active_obj
    // console.log(Employeeobject.id)
     this.router.navigate(['contacts', Employeeobject.id]);
  }

  afterDelete(): void{
      this.employeeService.deleteEmployeeData(this.activeObj);
      this.activeObj = this.employeeService.active_obj
      if(this.contactList.length==0){
         this.intialnavigation()
      }
      else{
        this.router.navigate(['contacts',this.activeObj.id])
      }

  }

  afterEdit(): void{
    this.router.navigate(['contacts/edit',this.activeObj.id,]);
  }
}
