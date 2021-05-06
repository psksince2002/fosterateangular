import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

import {Employee} from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   count = 0;

contactList: Array<Employee>  ;

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

  search(id: any): number{

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
    let i = this.statusSearch();
    if (i !== -1){
      this.contactList[i].status = false;
    }
    i = this.search(Employeeobject.id);
    this.contactList[i].status = true;
  }

  addEmployeeData(Employeeobject: Employee): void{
    if (Employeeobject != null){
      this.contactList.push(Employeeobject);
    }
  }

  deleteEmployeeData(): void{
     const i = this.statusSearch();
     this.contactList[i].status = false;
     this.contactList.splice(i, 1);
     console.log(this.contactList[0])
     this.contactList[0].status = true;
  }


  changeEmployeeData(Employeeobject: Employee): void{

    if (Employeeobject != null){
    const i = this.statusSearch();
    Employeeobject.id = this.contactList[i].id;
    Employeeobject.status = this.contactList[i].status;
    this.contactList[i] = Employeeobject;
    }


  }

}
