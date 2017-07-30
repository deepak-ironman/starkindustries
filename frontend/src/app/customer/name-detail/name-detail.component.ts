import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.scss']
})
export class NameDetailComponent {
  pageTitle = '*** Child Component ***';

  @Input()
  ishidden = false;

  @Input()
  childText: string;

  @Output()
  msgForParent = new EventEmitter<string>();

  constructor() {
  }

  buttonClicked() {
    console.log('[NameDetailComponent]: buttonclicked ');
    console.log('[NameDetailComponent]: childText is now: ' + this.childText);
    const msg = 'Alert message from child component.Button clicked.'
      + 'Message received from parent: [';
    this.msgForParent.emit(msg + this.childText + ']');
    console.log('[NameDetailComponent]: *****buttonclicked ENDS*****');
    this.ishidden = true;
  }

}
