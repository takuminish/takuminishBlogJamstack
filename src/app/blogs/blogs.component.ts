import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { isScullyGenerated, ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  private onDestroy$ = new EventEmitter();

  links$: Observable<ScullyRoute[]> = this.scully.available$;
  blogList: ScullyRoute[] = [];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    this.links$.pipe(takeUntil(this.onDestroy$),).subscribe(link => {
      this.blogList = link.filter(l => (l.route !== '/' && l.route !== '/blogs'))
    });
  }

  ngOnDestroy() {
    this.onDestroy$.emit();
  }
}
