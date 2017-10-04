import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {

  constructor(private _http: Http) { }

  find(){

    return this._http
      .get('https://cabeleireiro-api.herokuapp.com/servicos/find')
      .map(res => res.json())
      .toPromise();
  }

}
