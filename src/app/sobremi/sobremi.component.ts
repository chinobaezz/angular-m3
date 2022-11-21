import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  //crear varible de intancia para almacnar los datos con los que trata el servicio
  //inicializar variables de intancia
nombre:string = '';
apellido:string = '';
acerca:string = '';
  constructor(
    //inyectar el service para tener acceso en la clase de metodos
    private portafolioService: PortafolioService
    //inyectar objeto para permitir la navegacio a la pagina idividual
    //public router: ruter
  ) {
//el almacenar en la variable en intancias de los datos recuperado por el servicio puede ir aca?
//this.portafolioService.getPortafolio();
   }

  ngOnInit(): void {
    //esto es almacenar en la variable de la intancia los datos recuperados por el servicio?
    this.portafolioService.getDatos().subscribe(portafolio =>{
      console.log(portafolio);
    //definir iformacio a mostrar
      this.nombre=portafolio.nombre;
      this.apellido=portafolio.apellido;
      this.acerca=portafolio.acerca;

    })
  }}
