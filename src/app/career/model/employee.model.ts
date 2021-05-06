export class Employee {

  name: string;
  mail: string;
  number: string;
  landline: string;
  website: string;
  address: string;
  id: number;
  status: boolean;
  address1: string;
  address2: string;
  address3: string;

  constructor(args: any){
    this.name = args.name;
    this.mail = args.mail;
    this.number = args.number;
    this.landline = args.landline;
    this.website = args.website;
    this.address = args.address;
    this.id = 0;
    this.status = false;
    this.address1 = '';
    this.address2 = '';
    this.address3 = '';
  }
}
