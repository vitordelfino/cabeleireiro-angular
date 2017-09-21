import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MeusAgendamentosService } from './meus-agendamentos.service';
import { Agendamento } from '../agendamento/agendamento';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent implements OnInit {

  agendamentos: Array<Agendamento> = [];
  loading: boolean = false;
  constructor(
    private _service: MeusAgendamentosService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.loading = true;
    this._service
      .find(this._authService.userLogged)
      .subscribe(
        resposta => {
          this.agendamentos = resposta;
          console.log(this.agendamentos)
          this.loading = false;
        },
        erro => {
          console.log(erro);
          this.loading = false;
        });
  }

}
