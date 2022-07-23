import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ProfileService } from 'src/app/domain/service/profileservice/profile.service';
import { TakuminishProfile } from '../../../domain/model/resource-model/takuminishprofile.model';

/**
 * トップページのコンポーネント
 */
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {

  /** コンポーネント破棄時にunsubscribe用のEmitter */
  private onDestroy$ = new EventEmitter();

  /** プロフィール情報 */
  public takuminishProfile: TakuminishProfile = {
    profile: {
      name: '',
      introduction: '',
      profileImage: {
        url: '',
        width: 0,
        height: 0
      },
      githubUrl: '',
      qiitaUrl: '',
      zennUrl: '',
      twitterUrl: ''
    },
    experiences: [],
    skills: [],
    licenses: [],
    products: []
  };

  /**
   * コンストラクタ
   * @param profileService 
   */
  constructor(private profileService: ProfileService) { }

  /**
   * コンポーネント表示時
   */
  ngOnInit() {
    this.fetchProfile()
  }

  /**
   * コンポーネント破棄時
   */
  ngOnDestroy() {
    this.onDestroy$.emit();
  }

  /**
   * 外部からプロフィール情報を取得する
   */
  public fetchProfile(): void {
    this.profileService.fetchProfile().pipe(takeUntil(this.onDestroy$),).subscribe(d => {
      this.takuminishProfile = d;
    });
  }
}
