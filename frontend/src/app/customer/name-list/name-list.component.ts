import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CustomerService } from 'app/customer/customer.service';
import { CustomerI } from 'app/customer/CustomerModelI';
import { CustomerSharedService } from 'app/customer-shared.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
@Injectable()
export class NameListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;
  listFilter: string;
  statusCode: number;
  customers: CustomerI[];

  constructor(private _custService: CustomerService,
              private _router: Router,
              private _custSharedService: CustomerSharedService) {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this._custService.getAllNames()
      .subscribe(customers => this.customers = customers,
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Name List: ' + message;
  }

  deleteNameById(nameId: string): void {
    console.log('deleteNameById: id is ' + nameId);
    this._custService.deleteNameById(nameId)
      .subscribe(successCode => {
        this.statusCode = successCode; this.getAllCustomers(); }
      , error => {console.log('Error in DeleteNameById: ' + this.errorMessage)} );
    console.log('deleteNameById: successCode is ' + this.statusCode);

//  problem line is: , error => {this.errorMessage = <any> error;

  /* , error => {this.errorMessage = <any> error;
                            console.log('Error in DeleteNameById: ' + this.errorMessage)} ); */

    // this._router.navigate(['/customer/displayAll']);
    // this._router.navigate(['/customer']);
    // this._router.navigate(['/customer/displayAll']);
    /* this._custService.deleteNameById(nameId)
      .subscribe(successCode => {
		      // this.statusCode = successCode;
		      // this.getAllArticles();
		      // this.backToCreateArticle();
		  } ,
		   errorCode => this.statusCode = errorCode); */

  }

  loadNameToEdit(id: string, cust: CustomerI): void {
    console.log('loadNameToEdit: id is ' + id);
    this.setCustomerShared(id);
    this._router.navigate(['/customer']);
  }

  private setCustomerShared(id: string): void {
    this._custSharedService.customer = id;
  }

  onBack(): void {
    this._router.navigate(['/customer']);
  }

}
