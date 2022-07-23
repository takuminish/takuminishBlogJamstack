import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { SeoService } from './domain/service/seoservice/seo.service';

/**
 * App Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'takuminishBlogJamstack';

  /**
   * コンストラクタ
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) {

  }

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)).subscribe(data => {
        let seoData = data['seo'];
        console.log(seoData)
        this.seoService.updateTitle(seoData['title']);
        this.seoService.updateMetaTags(seoData['metaTags']);
      });
  }
}

