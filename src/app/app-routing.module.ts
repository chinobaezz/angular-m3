 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NewEducacionComponent } from './educacion/new-educacion/new-educacion.component';
import { Edit2educacionComponent } from './educacion/edit2educacion/edit2educacion.component';
import { NewCarrucelComponent } from './carruzel/new-carrucel/new-carrucel.component';
import { LoginComponent } from './modals/login/login.component';
import { CrearPorcComponent } from './porcenteje/crear-porc/crear-porc.component';
import { EditEducacionComponent } from './explaboral/nuevespe/edit-educacion.component';
import { NewRedComponent } from './redes/new-red/new-red.component';




const routes: Routes = [
  {path: '', component:IndexComponent}, 
   {path: 'login', component:LoginComponent},
   {path: 'inicio', component:EdicionComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'newtrabaj', component:EditEducacionComponent},
  {path: 'newRed', component:NewRedComponent},
  {path: 'nuevporce', component:CrearPorcComponent},
  {path: 'newCarrucel', component:NewCarrucelComponent},
  {path: 'newEduca', component:NewEducacionComponent},
  {path: 'editEduca', component:Edit2educacionComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
