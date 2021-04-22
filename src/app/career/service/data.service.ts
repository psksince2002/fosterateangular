import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

import {Employee} from '../model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   count=0;

  buttonstatus:boolean=true;
  navstatus:boolean=true
  editstatus:boolean=false;
   name=''
   mail=''
   number=''
   landline:any=''
   website:any=''
   address:any=''




contact_list:Array<Employee>=[]

constructor(private router:Router) { }

  getData():{contactlist:Array<Employee>,status:boolean}{
     if(this.contact_list.length==0){
        return {contactlist:[],status:false}
     }
     else{
       return {contactlist:this.contact_list,status:true}
     }
  }
  addUser():number{
     this.count++;
     return this.count;
  }
  search(id:any):number{

     var i=this.contact_list.findIndex(
        (obj)=>obj.id==id
     )
     return i;
  }

  statusSearch():number{
    var i=this.contact_list.findIndex(
      (obj)=>obj.status==true
   )
   return i;
  }
  changeActive(obj:Employee):void{
    var i=this.statusSearch()
    if(i!=-1){
      this.contact_list[i].status=false
    }
      i=this.search(obj.id)
     this.contact_list[i].status=true
  }

  Push(obj:Employee):void{
    if(obj!=null){
      this.contact_list.push(obj)
    }
  }

  Delete():void{
     var i=this.statusSearch()
     this.contact_list[i].status=false;
     this.contact_list.splice(i,1);
     this.contact_list[0].status=true;
  }

  Edit():void{
    var i=this.statusSearch()
    var obj=this.contact_list[i]
    this.name=obj.name;
    this.mail=obj.mail;
    this.number=obj.number;
    if(obj.landline!=null){
        this.landline=obj.landline
    }
    if(obj.website!=null){
      this.website=obj.website
    }
  if(obj.address!=null){
    this.address=obj.address
   }
   this.buttonstatus=false
   this.editstatus=true
   this.router.navigateByUrl('add')
  }

  Insert(obj:Employee):void{
    console.log(obj)
    var i=this.statusSearch()
    this.contact_list[i].name=obj.name;
    this.contact_list[i].mail=obj.mail;
    this.contact_list[i].number=obj.number;
    this.contact_list[i].landline=obj.landline;
    this.contact_list[i].website=obj.website;
    this.contact_list[i].address=obj.address;
    this.contact_list[i].address1=obj.address1;
    this.contact_list[i].address2=obj.address2;
    this.contact_list[i].address3=obj.address3;
   this.name=''
   this.mail=''
   this.number=''
   this.landline=''
   this.website=''
   this.address=''
   this.buttonstatus=true
  }

}
