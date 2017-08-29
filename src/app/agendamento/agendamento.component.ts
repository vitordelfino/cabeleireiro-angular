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

  type: string = 'brand';
  size: string = 'large';

  loading: boolean = true;

  constructor(
    private _horarioService: HorarioService
  ) { }

  ngOnInit() {
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getTime() + 604800000);
    this.buscarAgendamento(this.dtAgendamento);
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

  private buscarAgendamento(dt: Date){
    this.loading = true;

    this._horarioService
      .findHorarioDisponicel(this.formatDate(dt))
      .then(horarios =>{

        this.horarios = horarios;

      })
      .catch(erro => console.log(erro));
  }

  onClick(){
    console.log(this.dtAgendamento);
  }

  changeDate(date){
    this.buscarAgendamento(date._selected);
  }





}
