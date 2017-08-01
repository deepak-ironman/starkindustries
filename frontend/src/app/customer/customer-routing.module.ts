import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { NameListComponent } from 'app/customer/name-list/name-list.component';
import { AuthguardGuard } from 'app/auth-guard/authguard.guard';
const routes: Routes = [
  {path: 'customer', component: CustomerComponent, canActivate: [AuthguardGuard]},
  {path: 'customer/displayAll', component: NameListComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
