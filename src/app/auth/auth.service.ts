import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';
import { Http } from '@angular/http';
import { Cliente } from '../cliente/cliente';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private _cliente: Cliente;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get userLogged(): Cliente{
    return this._cliente;
  }

  constructor(
    private router: Router,
    private _http: Http
    //private _header: Headers,
  ) {
   // _header.append('Content-Type', 'application/json');
  }

  login(user: User) {
    if (user.usuario !== '' && user.senha !== '' ) {


      console.log(user);
      //'https://cabeleireiro-api.herokuapp.com/login/logar'
      let promisse = this._http
        .post('https://cabeleireiro-api.herokuapp.com/login/logar', user)
        .map(res => res.json())
        .toPromise()

        promisse.then(usuario => {
          this.loggedIn.next(true);
          this._cliente = usuario.cliente;
          this.router.navigate(['/agendamento']);
        })
        .catch(erro => console.log("errado"));

        return promisse;

    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
