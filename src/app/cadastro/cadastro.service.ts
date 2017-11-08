import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CadastroService {

  constructor(private _http: Http) { }

  save(obj: any): Observable<any>{
    return this._http
      .post('http://localhost:3000/cliente/salvar', obj)
      .map(res => res.json)
      .catch(erro => {
        throw new Error('Não foi possivel realizar o cadastro');
      });
  }

}
