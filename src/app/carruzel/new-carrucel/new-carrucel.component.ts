import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carruzel } from 'src/app/model/carruzel';
import { CarruzelService } from 'src/app/servicios/carruzel.service';

@Component({
  selector: 'app-new-carrucel',
  templateUrl: './new-carrucel.component.html',
  styleUrls: ['./new-carrucel.component.css']
})
export class NewCarrucelComponent implements OnInit {
  direccion: string='';

  constructor(private sCarruzel:CarruzelService, private router: Router) { }

  ngOnInit(): void {
  }
onCreat(): void{
  const carrucel = new Carruzel(this.direccion);
  this.sCarruzel.create(carrucel).subscribe(
    data=>{
      alert("añadida");
      this.router.navigate(['']);
    },err =>{
      alert("falla al cargar");
      this.router.navigate(['']);
    }
  )
}
}
