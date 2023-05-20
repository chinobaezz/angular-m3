import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  //desde aca se modifico
form:FormGroup;

  // hasta aca

  constructor(private sEducacion:EducacionService,
    private formBuilder:FormBuilder,
     private router: Router) { 
      this.form=this.formBuilder.group({
        //id!:[''],
titulo:[''],
inicio:[''],
fin: [''],
      })
     }

  ngOnInit(): void {
  }


  onCreate(): void{
    this.sEducacion.create(this.form.value).subscribe(data=>{
    alert("Estudio Añadido");
    this.router.navigate(['']);
  },err =>{
    alert("fallo carga intente nuevamente");
    this.router.navigate(['/newEduca']);
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
