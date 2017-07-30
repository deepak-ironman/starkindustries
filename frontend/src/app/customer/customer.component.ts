import { Component, OnInit } from '@angular/core';

import { CustomerI } from 'app/customer/CustomerModelI';
import { Customer } from 'app/customer/CustomerModel';
import { CustomerService } from 'app/customer/customer.service';
import { CustomerSharedService } from 'app/customer-shared.service';
@Component({
  moduleId: module.id,
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  countries = ['South Africa', 'Germany', 'United States of America', 'Mexico'];
  submitted = false;
  isUpate = false;
  customer: CustomerI;
  customers: CustomerI[];
  // myid = 15;
  errorMessage: string;

  constructor(private _custService: CustomerService,
              private _custSharedService: CustomerSharedService) {
    // Create a default customer
    // this.customer = new CustomerI(null, '', '', '');
    // moved to ngOnInit() -->this.customer = new Customer(this.myid, '', '', '');
    console.log('[CustomerComponent constr]:  injected _custSharedService id: '
      + _custSharedService.customer);

  }

  onNameFormSubmit(customer: CustomerI) {
    this.submitted = true;
    console.log('onSubmit---> name is: ' + this.logCust(this.customer));

    if (this.isUpate) {
      // For an update
      this._custService.updateName(this.customer)
        .subscribe(result => console.log('[UpdateName Result is]: ' + result));
    } else {
      // For a new customer call create
      // this.customer.id = this.myid; // TODO take this line out
      this._custService.createName(this.customer)
        .subscribe(result => console.log('[CreateName Result is]: ' + result));
    }
  }

  private logCust(customer: CustomerI): String {
    return '[name: ' + customer.name +
          ' [surname: ' + customer.surname +
          ' [country: ' + customer.country +
          ' [id: ' + customer.id + ' ]';
  }

  newCustomer() {
    console.log('newCustomer----> name is: ' + name);
    if (this.isUpate) {
      this.isUpate = false;
      this.customer = this._custSharedService.getDefaultCustomer();
    }

    // ***NOTES**** how to check if string is null or undefined
    /* if(typeof RetailPrice!='undefined' && RetailPrice){
   return this.RetailPrice; */
  }


  ngOnInit(): void {
    this.customer = this._custSharedService.getDefaultCustomer();

    if (typeof this._custSharedService.customer !== 'undefined'
      && this._custSharedService.customer) {
        this.getNameById(this._custSharedService.customer);
    }
  }

  backToCapture() {
    this.submitted = false; // submitted=false
    // this.myid++;
  }

  getNameById(id: string) {
    this._custService.getNameById(id).subscribe(
      custToUpdate => {
        this.isUpate = true;
        this.customer = custToUpdate; },
      error => {
        this.errorMessage = <any>error;
        console.log('Error in DeleteNameById: ' + this.errorMessage)
      });
  }

}
