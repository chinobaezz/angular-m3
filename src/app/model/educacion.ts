export class Educacion {
  id!:number;
  titulo : string;
  inicio : string;
  fin : string;
  constructor(titulo:string,inicio:string,fin:string){
    this.titulo=titulo;
    this.inicio=inicio;
    this.fin=fin;
  }
}
