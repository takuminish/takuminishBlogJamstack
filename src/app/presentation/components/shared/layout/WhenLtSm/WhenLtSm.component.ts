import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-lt-sm',
  templateUrl: './WhenLtSm.component.html',
  styleUrls: ['./WhenLtSm.component.scss']
})
export class WhenLtSmComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
