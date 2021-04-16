import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../../service';
import {Router} from '@angular/router';
import {NgIf,NgForOf} from '@angular/common'

console.log(DataService)

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  contact_list:any=[]
  buttonstatus:boolean;
  formStatus:boolean=false;
  constructor(private ds:DataService,private router:Router) {

    this.contact_list=ds.getData()
    this.buttonstatus=this.ds.buttonstatus
    this.ds.navstatus=false;
    /*this.addform.value.name=this.ds.name
    console.log(this.ds.name)
    this.addform.value.mail=this.ds.mail
    this.addform.value.number=this.ds.number
    this.addform.value.landline=this.ds.landline
    this.addform.value.website=this.ds.website
    this.addform.value.address=this.ds.address*/
   }

  addform=new FormGroup({
      name:new FormControl(this.ds.name,Validators.required),
      mail:new FormControl(this.ds.mail,[Validators.required,Validators.email]),
      number:new FormControl(this.ds.number,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      landline:new FormControl(this.ds.landline),
      website:new FormControl(this.ds.website),
      address:new FormControl(this.ds.address)
  })

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.addform.invalid){
       this.formStatus=true;
    }
    else{
    if(this.buttonstatus==false){
      this.afterEdit()
    }
    else{
    var id=this.ds.addUser()
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
    this.ds.Push(obj)
    this.ds.changeActive(obj);
    this.addform.reset()
    this.router.navigateByUrl('home')

  }
}
  }

  afterEdit(){

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
   this.ds.Insert(obj)

   this.addform.reset()
   this.router.navigateByUrl('home')


  }

}
