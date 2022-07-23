import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { isScullyGenerated } from '@scullyio/ng-lib';
import { Observable, takeUntil } from 'rxjs';
import { TakuminishProfile } from '../domain/model/resource-model/takuminishprofile.model';
import { ProfileService } from '../domain/service/profile.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {

  private onDestroy$ = new EventEmitter();

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

  ngOnDestroy() {
    this.onDestroy$.emit();
  }

  public fetchProfile(): void {
    this.profileService.fetchProfile().pipe(takeUntil(this.onDestroy$),).subscribe(d => {
      this.takuminishProfile = d;
    });
  }
}
