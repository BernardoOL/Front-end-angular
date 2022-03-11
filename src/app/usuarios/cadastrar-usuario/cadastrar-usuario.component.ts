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
  erros: Array<String> = []
  mostrarErros: boolean = false;
  disabled: boolean = false;

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
        // console.log(error.error.parameterViolations);
        // for (let index = 0; index <error.error.parameterViolations.length; index++) {
        //   this.erros.push(error.error.parameterViolations[index].message);
        // }
        // this.mostrarErros = true;
        // this.disabled = true
        // setTimeout(() =>{
        //   this.mostrarErros = false
        //   this.erros = []
        //   this.disabled = false
        // }, 5000);
        console.log('Deu ruim');
        console.log(error);

      }
    )
  };

  navegar = (rota: any)=>{
    this.router.navigate([rota]);
  }


}
