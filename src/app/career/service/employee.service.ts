import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

import {Employee} from '../model';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, docChanges, DocumentChangeType } from '@angular/fire/firestore';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   static count = 0;
   size:Array<number>=[];

contactList: Array<Employee>=[]  ;
idList:Array<string>=[];

active_obj!:any;

constructor(private router: Router,private firestore: AngularFirestore,private afAuth:AngularFireAuth) {
  //console.log("service first")
    this.contactList=this.pushData().contactlist
}

  getData(): Observable<{contactlist:Array<Employee>,status:boolean}>{
     const contactList=new Array<Employee>();
     return new Observable<{contactlist:Array<Employee>,status:boolean}>((sub)=>{
       this.firestore.collection('employee').get().subscribe((empList)=>{
          if(empList){
              empList.forEach((empObject)=>{
                  const currentemployee=empObject.data() as Employee
                  currentemployee['key']=empObject.id;
                 contactList.push(currentemployee)
              })
              sub.next({contactlist:contactList,status:true});
          }
          else{
            sub.next({contactlist:null,status:false})
          }
       });
     })
  }

  pushData():{contactlist: Array<Employee>, status: boolean}{

     this.getData().subscribe((array)=>{

         this.contactList=array
     })
     if(this.contactList.length===0){
           return {contactlist:[],status:false}
     }
     else{
        return {contactlist:this.contactList,status:true}
     }

  }

  getId():number{
     return this.contactList.length+1
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

    this.firestore.collection('employee').get().toPromise()
    .then((empList)=>{
            empList.forEach((empObject)=>{
                empObject.ref.update({
                     status:false
                })
            })
    })

    const object:Employee=this.contactList[this.searchContact(Employeeobject.id)]
    this.firestore.doc('employee/'+object.key).update({status:true}).then((res)=>{
      this.contactList=this.pushData().contactlist
    })

  }

  addEmployeeData(newContact: Employee): void{
    if (newContact != null){
      //this.contactList.push(Employeeobject);
      newContact['id']=this.firestore.createId()
      this.firestore.collection('employee').doc(newContact.id).set(
           newContact
      )
      //this.contactList=this.pushData().contactlist
    }
  }

  deleteEmployeeData(Employeeobject: Employee): void{
      this.firestore.doc('employee/'+Employeeobject.key).delete()
      this.contactList=this.pushData().contactlist
      if(this.contactList.length!=0){
          this.contactList[0].status=true
      }

  }


  changeEmployeeData(Employeeobject: Employee): void{

    if (Employeeobject != null){
        this.firestore.doc('employee/'+Employeeobject.key).update(Employeeobject)
        this.contactList=this.pushData().contactlist
    }


  }

}
