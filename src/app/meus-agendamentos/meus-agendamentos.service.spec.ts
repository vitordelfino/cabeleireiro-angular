import { TestBed, inject } from '@angular/core/testing';

import { MeusAgendamentosService } from './meus-agendamentos.service';

describe('MeusAgendamentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeusAgendamentosService]
    });
  });

  it('should be created', inject([MeusAgendamentosService], (service: MeusAgendamentosService) => {
    expect(service).toBeTruthy();
  }));
});
