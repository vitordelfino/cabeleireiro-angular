export class Agendamento {
  constructor(
    public id: number,
    public cliente: string,
    public servico: string,
    public data: Date,
    public horario: string,
    public str_data: string,
  ){ }


}
