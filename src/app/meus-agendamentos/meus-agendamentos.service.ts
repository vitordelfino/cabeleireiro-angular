import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cliente } from '../cliente/cliente';
import { Agendamento } from '../agendamento/agendamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeusAgendamentosService {

  constructor(private _http: Http) { }
  //http://localhost:3000/agendamento/clientid/${cliente.cpf}
  findHoje(cliente: Cliente): Observable<any> {
    return this._http
      .get(`http://localhost:3000/agendamento/clientidhoje/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  findProximos(cliente: Cliente): Observable<any> {
    return this._http
      .get(`http://localhost:3000/agendamento/clientidproximos/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  findAntigos(cliente: Cliente): Observable<any> {
    return this._http
      .get(`http://localhost:3000/agendamento/clientidantigos/${cliente.cpf}`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

  cancelar(agendamento: Agendamento): Observable<any> {
    return this._http
      .delete(`http://localhost:3000/agendamento/${agendamento.id}/cancelando`)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message)
      });
  }

}
