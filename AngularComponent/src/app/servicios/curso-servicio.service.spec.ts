import { TestBed } from '@angular/core/testing';

import { CursoServicioService } from './curso-servicio.service';

describe('CursoServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoServicioService = TestBed.get(CursoServicioService);
    expect(service).toBeTruthy();
  });
});
