import { TestBed } from '@angular/core/testing';

import { EstudianteServicioService } from './estudiante-servicio.service';

describe('EstudianteServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudianteServicioService = TestBed.get(EstudianteServicioService);
    expect(service).toBeTruthy();
  });
});
