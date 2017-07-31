import { Component, Injectable } from '@angular/core';

import { AuthService } from 'app/auth-service/auth.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'app is taken over by me :-)';

  constructor(public _auth: AuthService) {
    console.log('In AppComponent: handling authentication...');
    this._auth.handleAuthentication();
    console.log('In AppComponent: handling authentication...<<DONE>>');
  }
}
