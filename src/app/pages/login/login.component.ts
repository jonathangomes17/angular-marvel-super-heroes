import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup;

  login: string;

  password: string;

  constructor(
    private router: Router,
    private title: Title,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Login | Marvel super heroes app your character finder')

    this.formLogin = new FormGroup({
      login: new FormControl(this.login, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(3)]),
    })
  }

  onLogin(): void {
    if (this.formLogin.valid) {
      const userStorage = this.userService.getUserStorage(this.login);

      if (!userStorage) {
        console.log('Usuário inexistente na base de dados!');
        return;
      }

      const userModel = new UserModel({
        email: this.login,
        fullName: userStorage.fullName,
        isAuthenticated: true
      });

      this.userService.setUser(userModel);
      this.router.navigateByUrl('search');
    }
  }
}
