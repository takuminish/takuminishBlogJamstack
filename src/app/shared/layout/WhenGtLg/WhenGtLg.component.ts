import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-gt-lg',
  templateUrl: './WhenGtLg.component.html',
  styleUrls: ['./WhenGtLg.component.scss']
})
export class WhenGtLgComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
