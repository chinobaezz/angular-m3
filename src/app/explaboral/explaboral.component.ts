import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';


@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {
  miData:any;

  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.getDatos().subscribe(data =>{
    
    this.miData = data;
  });

}}
