import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'when-lt-xl',
  templateUrl: './WhenLtXl.component.html',
  styleUrls: ['./WhenLtXl.component.scss']
})
export class WhenLtXlComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
  }

}
