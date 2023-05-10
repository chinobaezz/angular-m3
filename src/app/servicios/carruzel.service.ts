import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carruzel } from '../model/carruzel';


@Injectable({
  providedIn: 'root'
})
export class CarruzelService {
  url= 'http://localhost:8080/carruzel/'

  constructor(private httpClient:HttpClient) { }


  public list():Observable<Carruzel[]>{
    return this.httpClient.get<Carruzel[]>(this.url+ 'lista');
  }
  
  public ver(id:number):Observable<Carruzel>{
    return this.httpClient.get<Carruzel>(this.url+ `ver/${id}`);
  }

  public create(carruzel: Carruzel):Observable<any>{
    return this.httpClient.post<any>(this.url+ 'create', carruzel);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }



}
