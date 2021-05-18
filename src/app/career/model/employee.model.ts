export class Employee {

  name: string;
  mail: string;
  number: string;
  landline: string;
  website: string;
  address: string;
  id: string;
  status: boolean;
  address1: string;
  address2: string;
  address3: string;

  constructor(args: any){
    this.id = args.id;
    this.name = args.name;
    this.mail = args.mail;
    this.number = args.number;
    this.landline = args.landline;
    this.website = args.website;
    this.address = args.address;
    this.status = args.status;
    this.address1 = args.address1;
    this.address2 = args.address2;
    this.address3 = args.address3;
  }
}
