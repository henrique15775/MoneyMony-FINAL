import { TestBed } from '@angular/core/testing';

import { CadastrarCotacaoService } from './cadastrar-cotacao.service';

describe('CadastrarCotacaoService', () => {
  let service: CadastrarCotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarCotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
