import { TestBed } from '@angular/core/testing';

import { GeneroService } from './criar-genero.service';

describe('CriarGeneroService', () => {
  let service: GeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
