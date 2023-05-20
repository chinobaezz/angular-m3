import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
  explaboral:Experiencia[]=[];
  miData:any;
  isLogged:boolean=false;

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }
cargarExperiencia():void{
  this.sExperiencia.lista().subscribe(data=>{this.explaboral=data});
}
delete(id:number){
  if(id!=undefined){
    this.sExperiencia.delete(id).subscribe(data=>{this.cargarExperiencia();})
  }
}


}
