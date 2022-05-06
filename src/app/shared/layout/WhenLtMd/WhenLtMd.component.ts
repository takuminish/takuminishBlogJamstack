import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-lt-md',
  templateUrl: './WhenLtMd.component.html',
  styleUrls: ['./WhenLtMd.component.scss']
})
export class WhenLtMdComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
