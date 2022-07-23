import { Injectable } from '@angular/core';
import { from, Observable, tap } from 'rxjs';
import { TakuminishProfile } from 'src/app/domain/model/resource-model/takuminishprofile.model';
import { ProfileRepository } from 'src/app/domain/repositories/profilerepository/profile.repository';
import { client } from 'src/environments/environment.api'

@Injectable({
    providedIn: 'root'
})
export class ProfileRepositoryImpl extends ProfileRepository {
    constructor() {
        super()
    }

    fetchProfile(): Observable<TakuminishProfile> {
        return from<Promise<TakuminishProfile>>(client.get<TakuminishProfile>({
            endpoint: 'profile',
        }));
    }
}
