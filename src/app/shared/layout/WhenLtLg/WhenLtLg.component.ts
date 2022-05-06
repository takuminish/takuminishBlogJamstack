import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-lt-lg',
  templateUrl: './WhenLtLg.component.html',
  styleUrls: ['./WhenLtLg.component.scss']
})
export class WhenLtLgComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
