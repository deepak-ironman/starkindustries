import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  errorMessage: string;

  constructor(private _custService: CustomerService,
              private _custSharedService: CustomerSharedService,
              private _router: Router) {
    // Create a default customer
    console.log('[CustomerComponent constr]:  injected _custSharedService id: '
      + _custSharedService.customer);
  }

  ngOnInit(): void {
    this.customer = this._custSharedService.getDefaultCustomer();

    if (typeof this._custSharedService.customer !== 'undefined'
      && this._custSharedService.customer) {
        this.getNameById(this._custSharedService.customer);
    }
  }

  onNameFormSubmit(customer: CustomerI) {
    this.submitted = true;
    console.log('onSubmit---> name is: ' + this.logCust(this.customer));

    if (this.isUpate) {
      this._custService.updateName(this.customer)
        .subscribe(result => console.log('[UpdateName Result is]: ' + result));
    } else {
      // For a new customer call create
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

  newCustomer(): void {
    console.log('newCustomer----> name is: ' + name);
    if (this.isUpate) {
      console.log('customer to update is --->' + this._custSharedService.customer);
      this.getNameById(this._custSharedService.customer);
    }
  }

  backToCapture(): void {
    this.submitted = false;
    this.isUpate = false; // reset the value
    this._router.navigate(['/customer']);
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
