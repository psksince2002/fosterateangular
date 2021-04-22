import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../../service';
import {Router} from '@angular/router';
import {NgIf,NgForOf} from '@angular/common'



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  contact_list:any=[]
  buttonstatus:boolean;
  formStatus:boolean=false;
  constructor(private DataService:DataService,private router:Router) {

    this.contact_list=DataService.getData().contactlist
    this.buttonstatus=this.DataService.buttonstatus
    this.DataService.navstatus=false;
   }

  addform=new FormGroup({
      name:new FormControl(this.DataService.name,Validators.required),
      mail:new FormControl(this.DataService.mail,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      number:new FormControl(this.DataService.number,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      landline:new FormControl(this.DataService.landline),
      website:new FormControl(this.DataService.website),
      address:new FormControl(this.DataService.address)
  })

  ngOnInit(): void {

  }

  onSubmit():void{
    if(this.addform.invalid){
       this.formStatus=true;
    }
    else{
    if(this.buttonstatus==false){
      this.afterEdit()
    }
    else{
    var id=this.DataService.addUser()
    var obj=this.addform.value
    console.log(obj)
    if(obj.address!=null){
      var addressList=obj.address.split(',')
      if(addressList[0]!=null){
       obj.address1=addressList[0];
      }
      if(addressList[1]!=null){
       obj.address2=addressList[1]
      }
      if(addressList[2]!=null){
       obj.address3=addressList[2]
      }
   }

    obj.id=id;
    obj!.status=false;
    this.DataService.Push(obj)
    this.DataService.changeActive(obj);
    this.addform.reset()
    this.router.navigateByUrl('home')

  }
}
  }

  afterEdit():void{

    var obj=this.addform.value
    if(obj.address!=null){
      var addressList=obj.address.split(',')
      if(addressList[0]!=null){
       obj.address1=addressList[0];
      }
      if(addressList[1]!=null){
       obj.address2=addressList[1]
      }
      if(addressList[2]!=null){
       obj.address3=addressList[2]
      }
   }
   this.DataService.Insert(obj)

   this.addform.reset()
   this.DataService.editstatus=false;
   this.router.navigateByUrl('home')


  }

}
