import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

/**
 * ブログページのコンポーネント
 */
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  currentPost$: Observable<ScullyRoute> = this.scully.getCurrent();

  /**
   * コンストラクタ
   * @param scully 
   */
  constructor(private scully: ScullyRoutesService) {
  }
}
