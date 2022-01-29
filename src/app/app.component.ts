import { AfterViewInit, Component } from '@angular/core';
import { LocalStorageLib } from './libs/localStorage.lib';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private localStorageLib: LocalStorageLib) { }

  ngAfterViewInit(): void {
    // For simulate one user root

    const users = this.localStorageLib.getStorage('users');

    if (users) {
      return;
    }

    const user = new UserModel({ email: 'root@root.com', isAuthenticated: false, fullName: 'Root system' });
    this.localStorageLib.setStorage('users', [user]);
  }
}
