import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-new-red',
  templateUrl: './new-red.component.html',
  styleUrls: ['./new-red.component.css']
})
export class NewRedComponent implements OnInit {
  //desde aca se modifico
  form:FormGroup;
  constructor(private sRedes:RedesService, private formBuilder:FormBuilder,
    private router: Router) {
      this.form=this.formBuilder.group({
        //id!:[''],
nombreRed:[''],
classe:[''],
      })
     }

  ngOnInit(): void {
  }


  onCreate(): void{
    this.sRedes.create(this.form.value).subscribe(data=>{
    alert("Estudio Añadido");
    this.router.navigate(['']);
  },err =>{
    alert("Red Añadido...");
    this.router.navigate(['/']);
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
