import { Injectable } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { Observable, tap } from 'rxjs';
import { TakuminishProfile } from '../../model/resource-model/takuminishprofile.model';
import { ProfileRepository } from '../../repositories/profilerepository/profile.repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private transferStateService: TransferStateService, private profileRepository: ProfileRepository) { }

  fetchProfile(): Observable<TakuminishProfile> {
    if (isScullyGenerated()) {
      return this.transferStateService.getState('test');
    } else {
      return this.profileRepository.fetchProfile().pipe(tap((state) => this.transferStateService.setState('test', state)));
    }
  }
}
