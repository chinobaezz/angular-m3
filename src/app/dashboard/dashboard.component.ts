import { Component, OnInit } from '@angular/core';
import { RedesService } from '../servicios/redes.service';
import { Router } from '@angular/router';
import { Redes } from '../model/redes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../servicios/educacion.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  //red
nombreRed: string='';
classe: string= '';
//estudio
titulo: string= '';
inicio: string= '';
fin: string= '';

  constructor(private formBuilder: FormBuilder, private sRedes:RedesService, private router: Router, private sEducacion:EducacionService) {
    this.form=this.formBuilder.group({
      nombreRed:['',[Validators.required]],
      classe:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }
  get NombreRed(){
    return this.form.get("nombreRed")
  }
  get Classe(){
    return this.form.get("classe")
  }
  //validaciones
  get NombreRedValid(){
    return this.NombreRed?.touched && !this.NombreRed.valid;
  }

  get ClasseValid(){
    return this.Classe?.touched && !this.Classe.valid;

  }
  
  onCreateRed(): void{
    const red = new Redes(this.nombreRed, this.classe);
    this.sRedes.create(red).subscribe(data=>{
        alert("Red añadida");
        this.router.navigate(['']);
      },err =>{
        alert("fallo");
        this.router.navigate(['']);
      }
    );
  }
  limpiar():void{
    this.form.reset();
  }
//estudio
onCreateEstudio(): void{
  const educ = new Educacion(this.titulo, this.inicio, this.fin);
  this.sEducacion.create(educ).subscribe(data=>{
      alert("Red añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo");
      this.router.navigate(['']);
    }
  );
}


}
