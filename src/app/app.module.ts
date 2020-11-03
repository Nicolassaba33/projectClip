import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';




//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';

//Servicios
import { ServicioService } from './services/servicio.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    LayoutComponent,
    UsuarioComponent,
    //UsuarioComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
