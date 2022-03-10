import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuarios } from 'src/app/usuarios/objetos/Usuarios';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  usuario: Usuarios = new Usuarios();

  constructor(
    private userService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

  }

  creatUser(){
    this.userService.createUser(this.usuario).subscribe(
      success => this.navegar('usuarios'),
      error =>{
        console.log
      }
    )
  };

  navegar = (rota: any)=>{
    this.router.navigate([rota]);
  }


}
