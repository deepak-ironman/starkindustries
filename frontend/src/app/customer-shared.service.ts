import { Injectable } from '@angular/core';
import { CustomerI } from 'app/customer/CustomerModelI';
import { Customer } from 'app/customer/CustomerModel';

@Injectable()
export class CustomerSharedService {
  customer: string;
  defaultCustomer: CustomerI;

  constructor() {
    this.defaultCustomer = new Customer(null, '', '', '');
  }

  getDefaultCustomer(): CustomerI {
      return this.defaultCustomer;
  }

  setCustomer(id: string): void {
    this.customer = id;
  }

}
