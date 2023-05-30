import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
form:FormGroup
  constructor(private sExplaboral:ExperienciaService, private formBuilder:FormBuilder,
    private router: Router) { 
      this.form=this.formBuilder.group({
        //id!:[''],
nombreEmpresa:[''],
puesto:[''],
imagen:[''],
inicio:[''],
fin: [''],
      })
     }
    

  ngOnInit(): void {
  }


  onCreate(): void{
    this.sExplaboral.create(this.form.value).subscribe(data=>{
    alert("Experiencia Añadida");
    this.router.navigate(['']);
  },err =>{
    alert("carga completla");
    this.router.navigate(['']);
  });
}

limpiar(): void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    //metodos
    this.onCreate();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.form.markAllAsTouched();
  }
}

}
