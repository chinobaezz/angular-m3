import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';


@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
  explaboral:Experiencia[]=[];
  miData:any;

  constructor(private sExperiencia: ExperienciaService) { }
  
  ngOnInit(): void {
    this.cargarExperiencia();
  }
cargarExperiencia():void{
  this.sExperiencia.list().subscribe(data=>{this.explaboral=data});
}
delete(id:number){
  if(id!=undefined){
    this.sExperiencia.delete(id).subscribe(data=>{this.cargarExperiencia();})
  }
}
}
