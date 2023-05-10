import { Component, OnInit } from '@angular/core';
import { Porcentaje } from '../model/porcentaje';
import { PorcentajeService } from '../servicios/porcentaje.service';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcenteje.component.html',
  styleUrls: ['./porcenteje.component.css']
})

export class PorcentajeComponent implements OnInit {
  porcentajes:Porcentaje[]=[];
 progresos: any;
 
  
  constructor(private sPorcentaje: PorcentajeService) { 
    
  }

  ngOnInit(): void {
    this.cargarPorcentaje();

   }
    cargarPorcentaje():void{
      this.sPorcentaje.list().subscribe(data => {this.porcentajes=data});
    }

    delete(id:number){
      if(id !=undefined){
        this.sPorcentaje.delete(id).subscribe(
          dat=>{
            this.cargarPorcentaje();
          },Error=>{alert("no se pudo eliminar")
        }
          
        )
      }
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

