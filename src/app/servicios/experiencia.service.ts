import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url= 'http://localhost:8080/ecperiencia/'

  constructor(private httpClient:HttpClient) { }


  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url+ 'lista');
  }
  
  public ver(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url+ `ver/${id}`);
  }

  public create(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url+ 'create', experiencia);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }

}



