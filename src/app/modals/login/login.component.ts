import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  EventEmitter,  Output } from '@angular/core';

import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/service/auth/loginRequest';
import { LoginnService } from 'src/app/service/auth/loginn.service';

const email = 'admin@gmail.com';
const password = '12345678';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  loginError: string;
  userLoginOn: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  

  get Mail() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  get MailValid() {
    return this.Mail.touched && !this.Mail.valid;
  }

  get PasswordValid() {
    return this.Password.touched && !this.Password.valid;
  }

  onEnviar(event: { preventDefault: () => void; }) {
    event.preventDefault();

    if (this.form.valid) {
      const formData = this.form.value;

      if (formData.email === email && formData.password === password) {
        this.userLoginOn = true;
        this.loginError = '';
      } else {
        alert("no valido");
        this.loginError = 'El email o la contraseña son incorrectos.';
      }
    }
  }
}
  
  
  