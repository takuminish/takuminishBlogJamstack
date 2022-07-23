import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-gt-md',
  templateUrl: './WhenGtMd.component.html',
  styleUrls: ['./WhenGtMd.component.scss']
})
export class WhenGtMdComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
