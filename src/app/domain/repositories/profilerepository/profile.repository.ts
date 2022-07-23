import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakuminishProfile } from '../../model/resource-model/takuminishprofile.model';

@Injectable({
    providedIn: 'root'
})
export abstract class ProfileRepository {

    constructor() { }

    abstract fetchProfile(): Observable<TakuminishProfile>;
}
