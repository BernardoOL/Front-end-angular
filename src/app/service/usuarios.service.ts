import { usuarioLogin } from './../login/usuarioLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Usuarios } from '../usuarios/objetos/Usuarios';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = `${environment.API}usuarios`;

  constructor(private $http: HttpClient) { }

  listAll(){
    return this.$http.get<Usuarios[]>(`${this.API}`).pipe(
      take(1)
    );
  }

  listById(id: any){
    return this.$http.get<Usuarios>(`${this.API}/${id}`);
  }

  delete(id: any){
    return this.$http.delete(`${this.API}/${id}`);
  }

  update(usuario: Usuarios){
    return this.$http.put(`${this.API}`, usuario);

  }

  createUser(usuario: Usuarios){
    return this.$http.post(`${this.API}`, usuario);
  }

  //outros métodos
  aniversariantesDoMes(){
    return this.$http.get<Usuarios[]>(`${this.API}/aniversariantes`)
  }

   login(login: usuarioLogin){
    return this.$http.post<Usuarios>(`${this.API}/login`, login)
   }
}
