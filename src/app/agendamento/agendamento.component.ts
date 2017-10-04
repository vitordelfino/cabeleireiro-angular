import { Router } from '@angular/router';
import { AgendamentoService } from './agendamento.service';
import { AuthService } from './../auth/auth.service';
import { ServicoService } from './../servico/servico.service';
import { Servico } from './../servico/servico';
import { HorarioService } from './../horario/horario.service';
import { Component, OnInit } from '@angular/core';
import { Horario } from '../horario/horario';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  dtAgendamento: Date = new Date();
  horarios: Array<Horario> = [];
  servicos: Array<Servico> = [];
  loading: boolean = false;

  horario: Horario;
  servico: Servico;


  constructor(
    private _horarioService: HorarioService,
    private _servicoService: ServicoService,
    private _authService: AuthService,
    private _agendamentoService: AgendamentoService,
    private _snackBar: MdSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getTime() + 604800000);
    this.buscarHorariosDisponiveis(this.dtAgendamento);
    this.buscarServicos();

  }



  onSubmit() {
    this.loading = true;

    let agendamento = {
      "cliente": this._authService.userLogged.cpf,
      "servico": this.servico.id,
      "dt_agendamento": this.formatDate(this.dtAgendamento),
      "hr_agendamento": this.horario.id
    }
    this.loading = true;
    console.log(agendamento);

    this._agendamentoService
      .salva(agendamento)
      .subscribe(
        resposta => {
          this.loading = false;
          this.buscarHorariosDisponiveis(new Date());
          this._snackBar.open('Agendamento realizado com sucesso', 'visualizar',{
            duration: 3000
          }).onAction()
          .subscribe(() => {
            this._router.navigate(['/meus-agendamentos']);
          });
        },
        erro => {
          console.log(erro);
          this.loading = false;
        }
      )

  }

  private formatDate(dt: Date){
    var d = new Date(dt),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  private buscarHorariosDisponiveis(dt: Date){
    this.loading = true;
    this._horarioService
      .findHorarioDisponicel(this.formatDate(dt))
      .then(horarios =>{
        this.horarios = horarios;
        this.loading = false;
      })
      .catch(erro => {
        console.log(erro);
        this.loading = false;
      });
  }

  private buscarServicos(){
    this.loading = true;
    this._servicoService
      .find()
      .then(servicos => {
        this.servicos = servicos;
        this.loading = false;
      }).catch(erro => {
        console.log(erro);
        this.loading = false;
      })
  }

  onClick(){
    console.log(this.dtAgendamento);
  }

  changeDate(date){
    this.buscarHorariosDisponiveis(date._selected);
  }

}
