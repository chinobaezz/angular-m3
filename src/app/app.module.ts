//modulos carga manual 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
//hoy28
import {  ReactiveFormsModule } from '@angular/forms';


//componentes los carga automatico schematic
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { CarruzelComponent } from './carruzel/carruzel.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { ExplaboralComponent } from './explaboral/explaboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { PorcentajeComponent } from './porcenteje/porcenteje.component';
import { IniciarSecionComponent } from './componentes/iniciar-secion/iniciar-secion.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NewEducacionComponent } from './educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './explaboral/edit-educacion/edit-educacion.component';
import { Edit2educacionComponent } from './educacion/edit2educacion/edit2educacion.component';
import { NewCarrucelComponent } from './carruzel/new-carrucel/new-carrucel.component';
import { CrearPorcComponent } from './porcenteje/crear-porc/crear-porc.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    CarruzelComponent,
    SobremiComponent,
    FotoperfilComponent,
    ExplaboralComponent,
    EducacionComponent,
    EducacionComponent,
    ProyectoComponent,
    ContactoComponent,
    DashboardComponent,
    ErrorComponent,
    NavbardashboardComponent,
    IndexComponent,
    PorcentajeComponent,
    IniciarSecionComponent,
    EdicionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    Edit2educacionComponent,
    NewCarrucelComponent,
    CrearPorcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //hoy28
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
