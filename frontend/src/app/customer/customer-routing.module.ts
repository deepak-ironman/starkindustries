import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { NameListComponent } from 'app/customer/name-list/name-list.component';

const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/displayAll', component: NameListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
