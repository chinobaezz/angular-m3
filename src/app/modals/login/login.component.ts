import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  EventEmitter,  Output } from '@angular/core';

import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/service/auth/loginRequest';
import { LoginnService } from 'src/app/service/auth/loginn.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;
  constructor(private formBuilder: FormBuilder, private tokenService: TokenService, private authService: AuthService, private router:Router) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      nombreUsuario:['',[Validators.required]],      
      password:['', [Validators.required]],
      
   })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Nombre(){
    return this.form.get("nombreUsuario");
  }

  get Password(){
    return this.form.get("password");
  }

  get NombreValid(){
    return this.Nombre.touched && !this.Nombre.valid;
  }

  get PasswordValid() {
    return this.Password.touched && !this.Password.valid;
  }


  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;      
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

  limpiar(): void{
    this.form.reset();
  }

}