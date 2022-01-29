import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';
import { ToastModel } from 'src/app/models/toast.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent {

  formRegister: FormGroup;

  fullName: string;

  email: string;

  password: string;

  confirmPassword: string;

  constructor(
    private router: Router,
    private title: Title,
    private userService: UserService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Register | Marvel super heroes app your character finder');

    this.formRegister = new FormGroup({
      fullName: new FormControl(this.fullName, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl(this.confirmPassword, [Validators.required, Validators.minLength(3)]),
    });
  }

  onRegister() {
    if (this.formRegister.valid) {
      if (this.password !== this.confirmPassword) {
        this.toastService.setMessage(new ToastModel({ text: 'Passwords not match' }));
        return;
      }

      const userExists = this.userService.getUserStorage(this.email) != null;

      if (userExists) {
        console.log('Usuário já existente!');
        return;
      }

      const newUser = new UserModel({
        email: this.email,
        fullName: this.fullName,
        isAuthenticated: true
      });

      this.userService.createUser(newUser);

      this.toastService.setMessage(new ToastModel({ text: `Welcome super hero! ${this.fullName}` }));

      this.router.navigateByUrl('/search');
    }
  }
}
