export class Porcentaje {
  id!:number;
  habilidades : string;
  porcentajes : number;
  classe : string;
  progres : string;

constructor(habilidades:string, porcentajes:number, classe:string, progres:string){
  this.habilidades=habilidades;
  this.porcentajes=porcentajes;
  this.classe=classe;
  this.progres=progres;
  
}
}
