import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from './../service/usuarios.service';
import { Usuarios } from './objetos/Usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  user: any
  usuarios: Array<Usuarios> = []
  aniversariantes: Array<Usuarios> = []

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.listUser();

  }

  listUser() {
    this.usuariosService.listAll().subscribe(user =>{
      this.usuarios = user;
      console.log(this.usuarios);
    })
  }

  deleteUser = (id: any) =>{
      //console.log(id) Verifica se tá passando id
     this.usuariosService.delete(id).subscribe(
      success => this.ngOnInit(),
      error => console.log("Deu ruim"),
      () => console.log('Requisição completa')
     )
  }

  updateUser = (id: any) =>{
    this.router.navigate(['usuarios', id])
    console.log(id);

  }

  createUser = () =>{
    this.router.navigate(['usuarios/novo']);
  }

  aniversariantesDoMes = () =>{
    console.log('clicou');
    this.usuariosService.aniversariantesDoMes().subscribe(response => {
      this.aniversariantes = response;
    });
  }

}
