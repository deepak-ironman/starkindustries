import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/auth-service/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
@Injectable()
export class NavComponent implements OnInit {
  nav = 'Nav works via viariable!';

  constructor(protected _auth: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
  }

}
