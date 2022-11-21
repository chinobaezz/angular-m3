import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})

export class PorcentajeComponent implements OnInit {
 progresos: any;
 
  
  constructor(private portafolioService: PortafolioService) { 
    
  }

  ngOnInit(): void {
    this.portafolioService.getDatos().subscribe(portafolio =>{
      
      this.progresos=portafolio.progresos;
      
  })

}}
