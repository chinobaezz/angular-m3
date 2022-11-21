import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
})
export class FotoperfilComponent implements OnInit {
  foto:any;

  constructor( private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(portafolio =>{
      console.log(portafolio);
      this.foto=portafolio.foto;
  })
  }
}
