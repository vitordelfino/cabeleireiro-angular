import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MeusAgendamentosService } from './meus-agendamentos.service';
import { Agendamento } from '../agendamento/agendamento';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent implements OnInit {

  agendamentosHoje: Array<Agendamento> = [];
  agendamentosProximos: Array<Agendamento> = [];
  agendamentosAntigos: Array<Agendamento> = [];
  loading: boolean = false;
  constructor(
    private _service: MeusAgendamentosService,
    private _authService: AuthService,
    private _snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.loading = true;
    this._service
      .findHoje(this._authService.userLogged)
      .subscribe(
        resposta => {
          console.log(resposta);
          this.agendamentosHoje = resposta;
          this.loading = false;
        },
        erro => {
          console.log(erro);
          this.loading = false;
      });
      this.loading = true;
      this._service
      .findProximos(this._authService.userLogged)
      .subscribe(
        resposta => {
          console.log(resposta);
          this.agendamentosProximos = resposta;
          this.loading = false;
        },
        erro => {
          console.log(erro);
          this.loading = false;
      });
      this.loading = true;
      this._service
      .findAntigos(this._authService.userLogged)
      .subscribe(
        resposta => {
          console.log(resposta);
          this.agendamentosAntigos = resposta;
          this.loading = false;
        },
        erro => {
          console.log(erro);
          this.loading = false;
      });
  }

  cancelar(agendamento: Agendamento): void {
    this._service
      .cancelar(agendamento)
      .subscribe(
        reposta => {
          this._snackBar.open('Agendamento cancelado !!!', 'Atualizar', {
            duration: 3000
          }).onAction()
            .subscribe(() => {
              this.ngOnInit();
            });

        },
        erro => {
          this._snackBar.open('Não foi possível realizar o cancelamento', null, {
            duration: 3000
          });
        }
      )
  }

}
