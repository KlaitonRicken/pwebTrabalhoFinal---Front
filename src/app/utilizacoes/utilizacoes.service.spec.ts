import { TestBed } from '@angular/core/testing';

import { UtilizacoesService } from './utilizacoes.service';

describe('UtilizacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilizacoesService = TestBed.get(UtilizacoesService);
    expect(service).toBeTruthy();
  });
});
