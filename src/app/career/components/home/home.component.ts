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
        this.activeObj = this.contactList.find((obj: Employee) => obj.status);


  }

  ngOnInit(): void {
  }

  onClick(Employeeobject: any): void{
     this.employeeService.changeActive(Employeeobject);
     // this.activeObj = this.contactList.find((Employeeobject: Employee) => Employeeobject.status);
     this.activeObj = this.contactList.find((object: Employee) => object.status);
  }

  afterDelete(): void{
      this.employeeService.deleteEmployeeData();
      this.activeObj = this.contactList.find((obj: Employee) => obj.status);
  }

  afterEdit(): void{
    this.router.navigateByUrl('edit');
  }
}
