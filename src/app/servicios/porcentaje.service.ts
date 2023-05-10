import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porcentaje } from '../model/porcentaje';

@Injectable({
  providedIn: 'root'
})
export class PorcentajeService {
  url= 'http://localhost:8080/habilidades/'

  constructor(private httpClient:HttpClient) { }

  
  public list():Observable<Porcentaje[]>{
    return this.httpClient.get<Porcentaje[]>(this.url+ 'lista');
  }
  
  public ver(id:number):Observable<Porcentaje>{
    return this.httpClient.get<Porcentaje>(this.url+ `ver/${id}`);
  }

  public create(porcentaje: Porcentaje):Observable<any>{
    return this.httpClient.post<any>(this.url+ 'create', porcentaje);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }

}
