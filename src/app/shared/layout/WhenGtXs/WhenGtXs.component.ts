import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-gt-xs',
  templateUrl: './WhenGtXs.component.html',
  styleUrls: ['./WhenGtXs.component.scss']
})
export class WhenGtXsComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
