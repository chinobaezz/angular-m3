import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  

educa : Educacion = null;

  constructor( private sEducacion:EducacionService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data=>{
        this.educa = data;
      }, err =>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sEducacion.update(id, this.educa).subscribe(
    data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("error");
      this.router.navigate(['']);
    }
  )
}
}
