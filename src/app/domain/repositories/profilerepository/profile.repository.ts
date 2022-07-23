import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakuminishProfile } from '../../model/resource-model/takuminishprofile.model';

/**
 * プロフィール情報を取得するRepository
 * 依存性逆転の法則を利用
 * 実装でinfaフォルダのRepositoryが行う
 */
@Injectable({
    providedIn: 'root'
})
export abstract class ProfileRepository {

    /**
     * コンストラクタ
     */
    constructor() { }

    /**
     * プロフィール情報を外部から取得する
     * @returns Observeble<TakuminishProfile> プロフィール情報
     */
    abstract fetchProfile(): Observable<TakuminishProfile>;
}
