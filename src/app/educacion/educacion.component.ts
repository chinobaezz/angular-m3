import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../servicios/educacion.service';




@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educaciones:Educacion[]=[];
//aca se modifico
isLogged = false;

  constructor(private sEducacion: EducacionService) { }


  ngOnInit(): void {
    this.cargarEducacion();
  }


cargarEducacion():void{
  this.sEducacion.list().subscribe(
    data=>{
      this.educaciones=data;
    }
  )
}



delete(id?:number){
  if(id!=undefined){
    this.sEducacion.delete(id).subscribe(data=>{this.cargarEducacion();
    }, err=>{
      alert("no se pudo borrar")
    })
  }
}
onUserLoginOn(userLoginOn: boolean) {
  this.isLogged = userLoginOn;
}



}
