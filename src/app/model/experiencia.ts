export class Experiencia {
   
  id!:number;
  nombreEmpresa : string;
  imagen : string;
  puesto : string;
  inicio : string;
  fin : string;
  

  constructor(nombreEmpresa:string,
    imagen:string,
    puesto:string,
    inicio:string,
    fin:string,
    ){
      this.nombreEmpresa = nombreEmpresa;
      this.imagen = imagen;
      this.puesto = puesto;
      this.inicio = inicio;
      this.fin = fin;
     
    }

}
