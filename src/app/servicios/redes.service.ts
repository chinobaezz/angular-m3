import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';


@Injectable({
  providedIn: 'root'
})
export class RedesService {
 // save(red: Redes) {
  //  throw new Error('Method not implemented.');}
  url= 'https://portafoliocv.onrender.com/redes/'

  constructor(private httpClient:HttpClient) { }


  public list():Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url+ 'lista');
  }
  
  public ver(id:number):Observable<Redes>{
    return this.httpClient.get<Redes>(this.url+ `ver/${id}`);
  }

  public create(rede: Redes):Observable<Redes>{
    return this.httpClient.post<Redes>(this.url+ 'create', rede);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }


}
