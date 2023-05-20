import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Redes } from '../model/redes';
import { RedesService } from '../servicios/redes.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
redes:Redes[]=[];
isLogged:boolean=false;
//que sale


  constructor(private sRedes: RedesService, private tokenService:TokenService, private tokenservicio:TokenService) { 

  }

  ngOnInit(): void {
    this.cargarRedes();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }
  cargarRedes():void{
    this.sRedes.list().subscribe(data => {this.redes=data});
  }
  
  onLogOUT():void{
    this.tokenService.logOut();
   window.location.reload();
  }

  delete(id:number){
    if(id !=undefined){
      this.sRedes.delete(id).subscribe(
        dat=>{
          this.cargarRedes();
        },Error=>{alert("no se pudo eliminar")
      }
        
      )
    }
  }

}
