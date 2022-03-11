import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    CadastrarUsuarioComponent,
    EditarUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
