import { Component, OnInit } from '@angular/core';
import { Carruzel } from '../model/carruzel';
import { CarruzelService } from '../servicios/carruzel.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-carruzel',
  templateUrl: './carruzel.component.html',
  styleUrls: ['./carruzel.component.css']
})
export class CarruzelComponent implements OnInit {
  id:number;
carru:Carruzel[]=[];
isLogged:boolean=false;
  constructor(private sCarruzel : CarruzelService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarCarruzel();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }
  cargarCarruzel():void{
    this.sCarruzel.list().subscribe(data => {this.carru=data});
  }
  delet(id?: number){
    if(id! =undefined){
      this.sCarruzel.delete(id).subscribe(data=>{this.cargarCarruzel();
      }, err=>{
        alert("no se pudo borrar");
      }
      )
    }
  }

}
