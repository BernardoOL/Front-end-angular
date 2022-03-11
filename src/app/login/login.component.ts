import { Component, OnInit } from '@angular/core';

import { usuarioLogin } from './usuarioLogin';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: usuarioLogin = new usuarioLogin();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

fazerLogin = () =>{
  this.authService.fazerLogin(this.usuarioLogin);
}

}
