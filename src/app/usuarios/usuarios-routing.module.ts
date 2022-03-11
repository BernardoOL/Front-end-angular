import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {path: '', component: UsuariosComponent},
  {path: 'novo', component: CadastrarUsuarioComponent},
  {path: ':id', component: EditarUsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
