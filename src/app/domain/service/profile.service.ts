import { Injectable } from '@angular/core';
import { client } from 'src/environments/environment.api'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  fetchProfile() {
    return client.get({
      endpoint: 'profile',
    });
  }

}
