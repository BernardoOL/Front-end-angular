import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './service/usuarios.service';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    CadastrarUsuarioComponent,
    EditarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuariosService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
