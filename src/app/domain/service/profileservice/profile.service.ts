import { Injectable } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { Observable, tap } from 'rxjs';
import { TakuminishProfile } from '../../model/resource-model/takuminishprofile.model';
import { ProfileRepository } from '../../repositories/profilerepository/profile.repository';

/**
 * プロフィールを管理するService
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  /**
   * コンストラクタ
   * @param transferStateService 
   * @param profileRepository 
   */
  constructor(private transferStateService: TransferStateService, private profileRepository: ProfileRepository) { }

  /**
   * <p>プロフィール情報を取得する。</p>
   * Scully buildを行なった静的ページの場合は、ビルド時に生成したdata.jsonから値を取得する。
   * SPAの場合は外部からプロフィール情報を取得する。
   * 
   * @returns Observable<TakuminishProfile> プロフィール情報
   */
  fetchProfile(): Observable<TakuminishProfile> {
    if (isScullyGenerated()) {
      return this.transferStateService.getState('test');
    } else {
      return this.profileRepository.fetchProfile().pipe(tap((state) => this.transferStateService.setState('test', state)));
    }
  }
}
