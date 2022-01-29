import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup;

  login: string;

  password: string;

  constructor(private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Login | Marvel super heroes app your character finder');

    this.formLogin = new FormGroup({
      login: new FormControl(this.login, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(3)]),
    });
  }

  onLogin = () => this.formLogin.valid && this.router.navigateByUrl('search');
}
