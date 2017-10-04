import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../cliente/cliente';
import { Agendamento } from '../agendamento/agendamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeusAgendamentosService {

  constructor(private _http: Http) { }
  //https://cabeleireiro-api.herokuapp.com/agendamento/clientid/${cliente.cpf}
  findHoje(cliente: Cliente): Observable<any> {
    return this._http
      .get(`https://cabeleireiro-api.herokuapp.com/agendamento/clientidhoje/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  findProximos(cliente: Cliente): Observable<any> {
    return this._http
      .get(`https://cabeleireiro-api.herokuapp.com/agendamento/clientidproximos/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  findAntigos(cliente: Cliente): Observable<any> {
    return this._http
      .get(`https://cabeleireiro-api.herokuapp.com/agendamento/clientidantigos/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  cancelar(agendamento: Agendamento): Observable<any> {
    return this._http
      .delete(`https://cabeleireiro-api.herokuapp.com/agendamento/${agendamento.id}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

}
