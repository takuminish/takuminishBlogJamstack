import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$;
  blogList: ScullyRoute[] = [];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(link => {
      this.blogList = link.filter(l => l.route !== '/')
    })
  }

}
