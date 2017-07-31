import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
@Injectable()
export class CallbackComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._router.navigate(['/customer']);
  }

}
