import { Injectable } from '@angular/core';
import { from, Observable, tap } from 'rxjs';
import { TakuminishProfile } from 'src/app/domain/model/resource-model/takuminishprofile.model';
import { ProfileRepository } from 'src/app/domain/repositories/profilerepository/profile.repository';
import { client } from 'src/environments/environment.api'

/**
 * プロフィール情報を取得するRepository
 * MicroCMSのAPIを利用する
 */
@Injectable({
    providedIn: 'root'
})
export class ProfileRepositoryImpl extends ProfileRepository {
    /**
     * コンストラクタ
     */
    constructor() {
        super()
    }

    /**
     * プロフィール情報をMicroCMSのAPIから取得する
     * @returns Observeble<TakuminishProfile> プロフィール情報
     */
    fetchProfile(): Observable<TakuminishProfile> {
        return from<Promise<TakuminishProfile>>(client.get<TakuminishProfile>({
            endpoint: 'profile',
        }));
    }
}
