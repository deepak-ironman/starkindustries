import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// import { Customer } from 'app/customer/CustomerModel';
import { CustomerI } from './CustomerModelI';
import { environment } from 'environments/environment.prod';
const API_URL = environment.apiUrl; // access environment url API
@Injectable()
export class CustomerService {

  constructor(private _http: Http) {
  }

  getAllNames(): Observable<CustomerI[]> {
    console.log('in getAllNames method ' + API_URL + '/customers');

    return this._http.get(API_URL + '/customers')
      .map((response: Response) => <CustomerI[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getName(id: number): Observable<CustomerI> {
    return this.getAllNames()
      .map((customers: CustomerI[]) => customers.find(p => p.id === id));
  }

  getNameById(id: string): Observable<CustomerI> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const cpParams = new URLSearchParams();
    cpParams.set('id', id);
    const options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this._http.get(API_URL + '/customers/' + id, options)
      .map((response: Response) => <CustomerI> response.json())
      .do(data => console.log('Name By Id: ' + JSON.stringify(data)))
      // .map(success => success.status)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

   /* orig rem by dee private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } */

  // Create name
  createName(customer: CustomerI): Observable<number> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });

    return this._http.post(API_URL + '/customers', customer, options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  // Update name //in progress
  updateName(customer: CustomerI): Observable<number> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });

    console.log('**** in updateName ****');
    console.log('[API_URL + Customers] ' + API_URL + '/customers');
    console.log(' ');
    // let id = '{' + customer.id + '}';
    return this._http.put(API_URL + '/customers/' + customer.id, customer, options)
      .map(success =>  success.status,
          success => console.log('[success]: ' + success.status) )

      .catch(this.handleError);
  }


  // Delete name
  deleteNameById(nameId: string): Observable<number> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const cpParams = new URLSearchParams();
    cpParams.set('id', nameId);
    const options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this._http.delete(API_URL + '/customers/' + nameId, options)
      .map(success => success.status)
      .catch(this.handleError);

  }



}
