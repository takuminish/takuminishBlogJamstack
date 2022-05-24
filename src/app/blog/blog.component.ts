import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }
}
