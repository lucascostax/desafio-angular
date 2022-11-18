import { TestBed } from '@angular/core/testing';

import { cadastrarFilmes } from './cadastrar-filmes.service';

describe('CadastrarFilmesService', () => {
  let service: cadastrarFilmes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cadastrarFilmes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
