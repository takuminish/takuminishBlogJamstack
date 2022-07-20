import { Component, OnInit } from '@angular/core';
import { client } from 'src/environments/environment.api'
import { TakuminishProfile } from '../domain/model/resource-model/takuminishprofile.model';

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
    lisences: [],
    products: []
  };

  constructor() { }

  ngOnInit() {
    this.getData()
  }

  public async getData(): Promise<void> {
    const data = await client.get({
      endpoint: 'profile',
    });
    this.takuminishProfile = data;
  }

}
