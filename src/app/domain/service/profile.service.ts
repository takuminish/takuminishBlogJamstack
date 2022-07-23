import { Injectable } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { from, Observable, tap } from 'rxjs';
import { client } from 'src/environments/environment.api'
import { TakuminishProfile } from '../model/resource-model/takuminishprofile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private transferStateService: TransferStateService) { }

  fetchProfile(): Observable<TakuminishProfile> {
    if (isScullyGenerated()) {
      return this.transferStateService.getState('test');
    } else {
      return from<Promise<TakuminishProfile>>(client.get<TakuminishProfile>({
        endpoint: 'profile',
      })).pipe(tap((state) => this.transferStateService.setState('test', state)));
    }
  }
}
