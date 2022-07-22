import { Component, OnInit } from '@angular/core';
import { TakuminishProfile } from '../domain/model/resource-model/takuminishprofile.model';
import { ProfileService } from '../domain/service/profile.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

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

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.fetchProfile()
  }

  public async fetchProfile(): Promise<void> {
    const data = await this.profileService.fetchProfile()
    this.takuminishProfile = data;
  }

}
