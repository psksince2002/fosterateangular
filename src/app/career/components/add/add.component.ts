import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService} from '../../service';
import {Router} from '@angular/router';






@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  ContactList: any = [];
  FormStatus = false;
  constructor(private employeeService: EmployeeService, private router: Router) {




   }




  AddForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mail: new FormControl( '',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      landline: new FormControl(''),
      website: new FormControl(''),
      address: new FormControl('')
  });

  intilaiseForm(): void{
    this.AddForm.setValue({
      name: '',
      mail: '',
      number: '',
      landline: '',
      website: '',
      address: ''
    });
 }



  ngOnInit(): void {
    this.ContactList = this.employeeService.getData().contactlist;
    this.intilaiseForm();
  }

  onSubmit(): void{
    if (this.AddForm.invalid){
       this.FormStatus = true;
    }
    else{
    const id = this.employeeService.getId();
    const Employeeobject = this.AddForm.value;
    if (Employeeobject.address != null){
      const addressList = Employeeobject.address.split(',');
      if (addressList[0] != null){
        Employeeobject.address1 = addressList[0];
      }
      if (addressList[1] != null){
        Employeeobject.address2 = addressList[1];
      }
      if (addressList[2] != null){
        Employeeobject.address3 = addressList[2];
      }
   }

    Employeeobject.id = id;
    Employeeobject.status = false;
    this.employeeService.addEmployeeData(Employeeobject);
    this.employeeService.changeActive(Employeeobject);
    this.AddForm.reset();
    this.router.navigateByUrl('home');

}
  }

}
