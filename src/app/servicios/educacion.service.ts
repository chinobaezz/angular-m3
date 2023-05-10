import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
url= 'http://localhost:8080/estudio/'
  constructor(private httpClient:HttpClient) { }
  
  public list():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url+ 'lista');
  }
  
  public ver(id:number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url+ `ver/${id}`);
  }

  public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url+ 'detail/${id}');
  }

  public create(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url+ 'create', Educacion);
  }
  public update(id: number, educacion:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.url+ 'update/${id}', educacion);
  }
  
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url+ `delete/${id}`);
  }

}


