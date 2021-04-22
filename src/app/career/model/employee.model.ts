export class Employee {

  name:string;
  mail:string;
  number:string;
  landline:string;
  website:string;
  address:string;
  id:number=0;
  status:boolean=false;
  address1:string="";
  address2:string="";
  address3:string="";

  constructor(name:string,mail:string,number:string,landline:string,website:string,address:string){
    this.name=name;
    this.mail=mail;
    this.number=number;
    this.landline=landline;
    this.website=website;
    this.address=address;
  }
}
