import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { LoginRequest } from './loginRequest';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginnService {

  currentUserLoginOn: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User>= new BehaviorSubject<User>({id:0, email:''});

  constructor(private http:HttpClient) { }
  onEnviar(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>("././assets/portafolio.json").pipe(
    tap((userData :User )=>{
     this.currentUserData.next(userData);
     this.currentUserLoginOn.next(true);
    }),
    catchError(this.handleError))
 
   }
 private handleError(error:HttpErrorResponse){
   if(error.status===0){
     console.error('se a producido un error', error.error);
   }
   return throwError(()=> new Error('algo fallo, favor intente de nuevo'))
 }
 get userData():Observable<User>{
   return this.currentUserData.asObservable();
 }
 
 get userLoginOn():Observable<boolean>{
   return this.currentUserLoginOn.asObservable();
 }
 }