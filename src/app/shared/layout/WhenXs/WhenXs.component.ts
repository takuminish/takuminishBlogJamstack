import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-xs',
  templateUrl: './WhenXs.component.html',
  styleUrls: ['./WhenXs.component.scss']
})
export class WhenXsComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
