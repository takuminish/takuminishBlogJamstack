import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/domain/model/resource-model/profile.model';
import { environment } from 'src/environments/environment';

/**
 * プロフィール情報のコンポーネント
 */
@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent {

  get environment() {
    return environment
  }
  /** プロフィール情報 */
  @Input() profile: Profile = {
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
  };

  /**
   * コンストラクタ
   */
  constructor() {
  }

}
