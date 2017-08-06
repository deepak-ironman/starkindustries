import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from './../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,
              private _router: Router) {
  }

}
