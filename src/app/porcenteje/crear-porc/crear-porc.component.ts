import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porcentaje } from 'src/app/model/porcentaje';
import { PorcentajeService } from 'src/app/servicios/porcentaje.service';

@Component({
  selector: 'app-crear-porc',
  templateUrl: './crear-porc.component.html',
  styleUrls: ['./crear-porc.component.css']
})
export class CrearPorcComponent implements OnInit {

habilidades : number=0;
porcentajes :  string= '';
classe: string= '';
progres : string='';
  constructor(private sPorcentaje: PorcentajeService, private router: Router) { }

  ngOnInit(): void {
  }
  
onCreate(): void{
  const porcentaje = new Porcentaje(this.classe, this.habilidades, this.porcentajes, this.progres);
  this.sPorcentaje.create(porcentaje).subscribe(
    data=>{
      alert("educacion añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo carga educacion");
      this.router.navigate(['']);
    }
  )
}

}
