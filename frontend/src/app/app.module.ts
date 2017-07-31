import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { NavComponent } from './nav/nav.component';
import { CustomerModule } from './customer/customer.module';
import { AuthService } from './auth-service/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    NavComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CustomerModule
    /* RouterModule.forRoot([
      { path: '', redirectTo: 'cities', pathMatch: 'full' },
      { path: 'cities', component: CitiesComponent }
    ])*/
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
