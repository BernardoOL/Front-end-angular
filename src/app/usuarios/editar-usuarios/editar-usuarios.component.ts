import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Usuarios } from '../objetos/Usuarios';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  id: any;
  usuario: Usuarios = new Usuarios();
  erros: Array<String> = []
  mostrarErros: boolean = false;
  disable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id'];
        this.userService.listById(this.id).subscribe(prod =>{
          this.usuario = prod;
        })
        console.log(this.id)
        console.log(this.usuario)
      }
    })
  }

  updateUser(){
    this.userService.update(this.usuario).subscribe(
      sucess => {
        alert('Usuario {'+ this.usuario.nome +'} Editado com sucesso');
        this.navegar('usuarios');
      },
      error => {
        console.log(error.error.parameterViolations);
        for (let index = 0; index <error.error.parameterViolations.length; index++) {
          this.erros.push(error.error.parameterViolations[index].message);
        }
        this.mostrarErros = true;
        this.disable = true
        setTimeout(() =>{
          this.mostrarErros = false
          this.erros = []
          this.disable = false
        }, 5000);
      },
      () => console.log('Requisição completa')
    )

  }

  navegar = (rota: any) =>{
    this.router.navigate([rota]);
  }


}
