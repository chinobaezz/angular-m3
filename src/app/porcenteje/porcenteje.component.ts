import { Component, OnInit } from '@angular/core';
import { Porcentaje } from '../model/porcentaje';
import { PorcentajeService } from '../servicios/porcentaje.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcenteje.component.html',
  styleUrls: ['./porcenteje.component.css']
})

export class PorcentajeComponent implements OnInit {
  isLogged:boolean=false;
  porcentajes:Porcentaje[]=[];
 progresos: any;
 
  
  constructor(private tokenService:TokenService,  private sPorcentaje: PorcentajeService) { 
    
  }

  ngOnInit(): void {
    this.cargarPorcentaje();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
   }
    cargarPorcentaje():void{
      this.sPorcentaje.list().subscribe(data => {this.porcentajes=data});
    }

   

    delet(id?:number){
      if(id!=undefined){
        this.sPorcentaje.delete(id).subscribe(data=>{this.cargarPorcentaje();
        }, err=>{
          alert("no se pudo borrar")
        })
      }
    }
}

