import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  parentText: string;
  receivedMsg: string;
  alertVisible = false;

  constructor() {
  }

  clicked(msg: string) {
    console.log('[CitiesComponent]: Message is: ' + msg);
    this.alertVisible = true;
    this.receivedMsg = msg;
  }

  reset() {
    this.alertVisible = false;
    this.parentText = '';
  }

}
