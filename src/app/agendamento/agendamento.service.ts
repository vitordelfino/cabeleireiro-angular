import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AgendamentoService {

  constructor(private _http: Http) { }

  salva(agendamento): Observable<any>{
    return this._http
      .post('https://cabeleireiro-api.herokuapp.com/agendamento', agendamento)
      .map(res => res.json())
      .catch(erro => {
        throw new Error(erro.message);
      })
  }

}
