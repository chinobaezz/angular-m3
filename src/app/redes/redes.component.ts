import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Redes } from '../model/redes';
import { RedesService } from '../servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
redes:Redes[]=[];

@Output() userLoginOn = new EventEmitter<boolean>();


//que sale


  constructor(private sRedes: RedesService) { 

  }

  ngOnInit(): void {
    this.cargarRedes();
    
  }
  cargarRedes():void{
    this.sRedes.list().subscribe(data => {this.redes=data});
  }
  //modificate
   // Paso 3: Crear la función que invoca al evento
   iniciarSesion() {
    // código para iniciar sesión

    // emitir el evento de éxito de inicio de sesión
    this.userLoginOn.emit(true);
  }

}
