import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

import {Employee} from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   count = 0;

contactList: Array<Employee>  ;

active_obj!:any;

constructor(private router: Router) {
  this.contactList = [];
}

  getData(): {contactlist: Array<Employee>, status: boolean}{
     if (this.contactList.length === 0){
        return {contactlist: [], status: false};
     }
     else{
       return {contactlist: this.contactList, status: true};
     }
  }

  getId(): number{
     this.count++;
     return this.count;
  }

  searchContact(id: any): number{

     const i = this.contactList.findIndex(
        (obj) => obj.id === id
     );
     return i;
  }

  statusSearch(): number{
    const i = this.contactList.findIndex(
      (obj) => obj.status === true
   );
    return i;
  }

  changeActive(Employeeobject: Employee): void{
   /* let i = this.statusSearch();
    if (i !== -1){
      this.contactList[i].status = false;
    }*/
    let i = this.searchContact(Employeeobject.id);
    this.contactList[i].status = true;
    var id:number
    if(this.active_obj!=null){
       id  = this.active_obj.id;
       i = this.searchContact(id);
    }
   // console.log(id)
    if (i !== -1){
      console.log("in the zone")
      this.contactList[i].status = false;
    }

    this.active_obj=Employeeobject

  }

  addEmployeeData(Employeeobject: Employee): void{
    if (Employeeobject != null){
      this.contactList.push(Employeeobject);
    }
  }

  deleteEmployeeData(Employeeobject: Employee): void{
     const i = this.searchContact(Employeeobject.id);
     this.contactList[i].status = false;
     this.contactList.splice(i, 1);
     if(this.contactList.length!=0){
      this.active_obj=this.contactList[0]
      this.contactList[0].status = true;
     }
     else{
       this.active_obj=null;
     }

  }


  changeEmployeeData(Employeeobject: Employee): void{

    if (Employeeobject != null){
    const i = this.searchContact(this.active_obj.id);
    Employeeobject.id = this.contactList[i].id;
    Employeeobject.status = this.contactList[i].status;
    this.contactList[i] = Employeeobject;
    this.active_obj=this.contactList[i] 
    }


  }

}
