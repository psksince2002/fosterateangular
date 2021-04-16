import { Component, OnInit ,ElementRef} from '@angular/core';
import {DataService} from '../../service'
import {NgIf,NgForOf} from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact_list:any=[]

  constructor(private elementRef:ElementRef,private ds:DataService) {
        //obj.classList.add('active-item')
        this.contact_list=this.ds.getData()
        this.ds.name=''
        this.ds.navstatus=true
   this.ds.mail=''
   this.ds.number=''
   this.ds.landline=''
   this.ds.website=''
   this.ds.address=''
   this.ds.buttonstatus=true
  }
  ngOnInit(): void {
  }



  onListItemClick(obj:any){

    /*console.log(this)
    var ref=this.elementRef.nativeElement;
    console.log(ref)
    let name=ref.querySelector("#name")
    let number=ref.querySelector("#number")
    let mail=ref.querySelector("#mail")
    let dataname=Ref.querySelector("#-name")
    let datamail=Ref.querySelector("#-email")
    let datanumber=Ref.querySelector("#-mobile")
    dataname.innerHTML=name.innerHTML
    datanumber.innerHTML=number.innerHTML
    datamail.innerHTML=mail.innerHTML
    let prev_active=refgroup.querySelector(".active-item")
    prev_active.classList.remove("active-item")
    ref.classList.add("active-item")
    let dataname=Ref.querySelector("#-name")
    let datamail=Ref.querySelector("#-email")
    let datanumber=Ref.querySelector("#-mobile")
    let datalandline=Ref.querySelector("#-landline")
    let datawebsite=Ref.querySelector("#-website")
    let address1=Ref.querySelector("#-address1")
    let address2=Ref.querySelector("#-address2")
    let address3=Ref.querySelector("#-address3")
    dataname.innerHTML=obj.name;
    datamail.innerHTML=obj.mail;
    datanumber.innerHTML=obj.number;
    if(obj.landline!=null){
       datalandline.innerHTML=obj.landline;
    }

    if(obj.landline==null){
      datalandline.innerHTML="";
    }

    if(obj.website!=null){
       datawebsite.innerHTML=obj.website;
    }

    if(obj.website==null){
      datawebsite.innerHTML=""
    }

    if(obj.address!=null){
       var addressList=obj.address.split(',')
       if(addressList[0]!=null){
        address1.innerHTML=addressList[0];
       }
       if(addressList[1]!=null){
        address2.innerHTML=addressList[1]
       }
       if(addressList[2]!=null){
        address3.innerHTML=addressList[2]
       }
    }
    if(obj.address==null){
      address1.innerHTML=""
      address2.innerHTML=""
      address3.innerHTML=""
    }*/
    this.ds.changeActive(obj);
    /*if(obj.address2!=null){
       address2.innerHTML=obj.address2;
    }
    if(obj.address3!=null){
      address3.innerHTML=obj.address3;
    }*/
  }

  afterDelete(){
      this.ds.Delete();
  }
  afterEdit(){
    this.ds.Edit();
  }
}
