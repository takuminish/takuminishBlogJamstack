import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/domain/model/resource-model/profile.model';


@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /** プロフィール情報 */
  @Input() profile: Profile = {
    name: '',
    introduction: '',
    profileImage: '',
    githubUrl: '',
    qiitaUrl: '',
    zennUrl: '',
    twitterUrl: ''
  };

  constructor() { }

  ngOnInit() {
  }
}
