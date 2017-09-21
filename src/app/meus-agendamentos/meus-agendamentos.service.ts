import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../cliente/cliente';

@Injectable()
export class MeusAgendamentosService {

  constructor(private _http: Http) { }

  find(cliente: Cliente){
    return this._http
      .get(`https://cabeleireiro-api.herokuapp.com/agendamento/clientid/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

}
