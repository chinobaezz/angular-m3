import { Injectable } from '@angular/core';
//Esto es para suscribirse y que reciba respuesta de forma asincrona
import { Observable } from 'rxjs';
//Esto es paea hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
//setear variable
//menu: any = menu;
//any significa cualquier 
//el primer http se llama alias
  constructor(private http:HttpClient) { }
//metodo observable que devuelve los datos
  getDatos():Observable<any> {
//se llama al JSON con su path-ruta-, o bien e su lugar se puede poner un url para traer datos de u json online
    return this.http.get('./assets/json/portafolio.json'); 
  }
}
