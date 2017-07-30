import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NameDetailComponent } from './name-detail/name-detail.component';
import { NameListComponent } from './name-list/name-list.component';
import { CustomerService } from './customer.service';
import { CustomerSharedService } from '../customer-shared.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    BrowserModule

  ],
  declarations: [CustomerComponent, NameDetailComponent, NameListComponent],
  exports: [CustomerComponent, NameDetailComponent ],
  providers: [CustomerService, CustomerSharedService]
})
export class CustomerModule { }
