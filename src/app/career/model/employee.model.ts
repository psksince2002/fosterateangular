export class Employee {

  name:string;
  mail:string;
  number:string;
  landline:string;
  website:string;
  address:string;
  id:number=0;
  status:boolean=false;
  constructor(name:string,mail:string,number:string,landline:string,website:string,address:string){
    this.name=name;
    this.mail=mail;
    this.number=number;
    this.landline=landline;
    this.website=website;
    this.address=address;
  }
}
