import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageLib } from 'src/app/libs/localStorage.lib';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public $userData = new BehaviorSubject<UserModel>(new UserModel({}));

  constructor(private localStorageLib: LocalStorageLib) { }

  public getUser = (): UserModel => this.$userData?.value;

  public setUser(user: UserModel): void {
    this.localStorageLib.setStorage('user', user);
    this.$userData.next(user);
  }

  public getUserStorage(email: string): UserModel | null {
    try {
      const users = this.localStorageLib.getStorage('users');

      if (!users) {
        return null;
      }

      // TODO: Encrypt password and saved in localStorage
      const user = users.find((userFinded: any) => userFinded.email === email);

      if (!user) {
        return null;
      }

      return new UserModel(user);

    } catch (e) {
      console.error('Permission denied for register in localstorage', e);
      return null;
    }
  }
}
