import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmployeeService} from '../../service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contactList: any = [] ;
  formStatus = false;
  targetObj: any;
  addform = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    number: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    landline: new FormControl(''),
    website: new FormControl(''),
    address: new FormControl('')
});

  constructor(private employeeService: EmployeeService, private router: Router) {


   }

   intilaiseForm(): void{
      this.addform.setValue({
        name: this.targetObj.name,
        mail: this.targetObj.mail,
        number: this.targetObj.number,
        landline: this.targetObj.landline,
        website: this.targetObj.website,
        address: this.targetObj.address
      });
   }



      onSubmit(): void{
        if (this.addform.invalid){
          this.formStatus = true;
       }
       else{
        const Employeeobject = this.addform.value;
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
        this.employeeService.changeEmployeeData(Employeeobject);
        this.addform.reset();
        this.router.navigate(['contacts', this.employeeService.active_obj.id]);
       }
      }


  ngOnInit(): void {
    this.contactList = this.employeeService.pushData().contactlist;
    this.intilaiseForm();
  }

}
