import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent {

  formRegister: FormGroup;

  login: string;

  password: string;

  confirmPassword: string;

  constructor(private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Register | Marvel super heroes app your character finder');

    this.formRegister = new FormGroup({
      login: new FormControl(this.login, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(3)]),
    });
  }

  onRegister() {

  }
}
