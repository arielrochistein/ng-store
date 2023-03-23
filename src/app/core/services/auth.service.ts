import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  public login(user: IUser) {
    console.log('LOGIN', user);
    this.storageService.setData('user', user);
  }
}
