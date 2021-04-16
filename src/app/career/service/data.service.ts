import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   count=3;

  buttonstatus:boolean=true
  navstatus:boolean=true
   name=''
   mail=''
   number=''
   landline:any=''
   website:any=''
   address:any=''



  contact_list=[{
    name:"Harsha Vardhan Pendyala",
    number:'7777888855',
    mail:"harsha@fosterate.com",
    id:1,
    status:true,
    landline:'',
    website:'',
    address:'',
    address1:'Hyderabad',
    address2:'Telangana',
    address3:'500061'
},{
    name:"Network Duke",
    number:'7777888855',
    mail:"duke@fosterate.com",
    id:2,
    landline:'',
    website:'',
    address:'',
    status:false
},{
 name:"Arshaque Mohammed",
 number:'7777888855',
 mail:"arshaque@fosterate.com",
 id:3,
 landline:'',
 website:'',
 address:'',
 status:false
}]

constructor(private router:Router) { }

  getData(){
    return this.contact_list;
  }
  addUser(){
     this.count++;
     return this.count;
  }
  search(id:any):number{
     for(var i=0;i<this.contact_list.length;i++){
         if(id==this.contact_list[i].id){
            return i;
         }
     }
     return -1;
  }

  boolSearch():number{
     for(var i=0;i<this.contact_list.length;i++){
         if(this.contact_list[i].status==true){
               return i;
         }
     }
     return -1;
  }
  changeActive(obj:any){
      var i=this.boolSearch()
      this.contact_list[i].status=false
      i=this.search(obj.id)
     this.contact_list[i].status=true
  }

  Push(obj:any){
      this.contact_list.push(obj)
  }

  Delete(){
     var i=this.boolSearch()
     this.contact_list[i].status=false;
     this.contact_list.splice(i,1);
     this.contact_list[0].status=true;
  }

  Edit(){
    var i=this.boolSearch()
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
   this.router.navigateByUrl('add')
  }

  Insert(obj:any){
    console.log(obj)
    var i=this.boolSearch()
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
