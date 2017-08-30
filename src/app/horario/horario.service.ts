import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HorarioService {

  constructor(private _http: Http) { }

  findHorarioDisponicel(dt_agendamento: String){
    //https://cabeleireiro-api.herokuapp.com/horario/disponivel
    return this._http
      .post('http://localhost:3000/horario/disponivel', {"dt_agendamento": dt_agendamento})
      .map(res => res.json())
      .toPromise();
  }

}
