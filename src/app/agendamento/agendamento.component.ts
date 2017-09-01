import { ServicoService } from './../servico/servico.service';
import { Servico } from './../servico/servico';
import { HorarioService } from './../horario/horario.service';
import { Component, OnInit } from '@angular/core';
import { Horario } from '../horario/horario';

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
  constructor(
    private _horarioService: HorarioService,
    private _servicoService: ServicoService
  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getTime() + 604800000);
    this.buscarHorariosDisponiveis(this.dtAgendamento);
    this.buscarServicos();
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
