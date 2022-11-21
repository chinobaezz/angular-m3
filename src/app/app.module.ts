//modulos carga manual 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

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
import { PorcentajeComponent } from './porcentaje/porcentaje.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';



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
    PorcentajeComponent,
    ContactoComponent,
    DashboardComponent,
    ErrorComponent,
    NavbardashboardComponent,
    IndexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
