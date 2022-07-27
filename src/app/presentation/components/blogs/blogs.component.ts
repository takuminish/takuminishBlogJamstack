import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, takeUntil } from 'rxjs';

/**
 * ブログ一覧コンポーネント
 */
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  /** コンポーネント破棄時にunsubscribe用のEmitter */
  private onDestroy$ = new EventEmitter();

  /** Scullyから取得するRouting */
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  /** Scullyから取得するブログ記事一覧 */
  blogList: ScullyRoute[] = [];

  /**
   * コンストラクタ
   * @param scully 
   */
  constructor(private scully: ScullyRoutesService) { }

  /**
   * コンポーネント表示時
   */
  ngOnInit() {
    // Scullyからブログ一覧を取得
    this.links$.pipe(takeUntil(this.onDestroy$),).subscribe(link => {
      // トップページとブログ一覧ページのURLも取得してしまうのでfilterで除去する
      this.blogList = link.filter(l => (l.route !== '/' && l.route !== '/blogs' && l.route !== '/home'))
    });
  }

  /**
 * コンポーネント破棄時
 */
  ngOnDestroy() {
    this.onDestroy$.emit();
  }
}
