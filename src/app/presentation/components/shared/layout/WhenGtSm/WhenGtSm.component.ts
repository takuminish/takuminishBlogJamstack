import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-gt-sm',
  templateUrl: './WhenGtSm.component.html',
  styleUrls: ['./WhenGtSm.component.scss']
})
export class WhenGtSmComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
