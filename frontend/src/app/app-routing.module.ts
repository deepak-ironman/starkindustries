import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from 'app/cities/cities.component';
import { NavComponent } from 'app/nav/nav.component';
import { CallbackComponent } from 'app/callback/callback.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from 'app/auth-guard/authguard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent, canActivate: [AuthguardGuard] },
  { path: 'cities', component: CitiesComponent, canActivate: [AuthguardGuard] },
  { path: '', redirectTo: 'NavComponent', pathMatch: 'full' },
  { path: '**', redirectTo: 'NavComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
