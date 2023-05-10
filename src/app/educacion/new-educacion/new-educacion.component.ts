import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  //desde aca se modifico

  // hasta aca
titulo: string = '';
inicio: string= '';
fin: string= '';

  constructor(private sEducacion:EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const educaciones = new Educacion(this.titulo, this.inicio, this.fin);
  this.sEducacion.create(educaciones).subscribe(
    data=>{
      alert("educacion añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo carga educacion");
      this.router.navigate(['']);
    }
  )
}
}
