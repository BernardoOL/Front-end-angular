import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { Usuarios } from '../usuarios/objetos/Usuarios';
import { UsuariosService } from './../service/usuarios.service';
import { usuarioLogin } from './usuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  fazerLogin(usuario: usuarioLogin){
    this.login(usuario).subscribe((response: Usuarios)=>{
      console.log(response);
      if(response){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }

    });
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  login(login: usuarioLogin){
     return this.usuariosService.login(login);
   }
}







