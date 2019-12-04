import { TestBed } from '@angular/core/testing';

import { RespuestaServicioService } from './respuesta-servicio.service';

describe('RespuestaServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespuestaServicioService = TestBed.get(RespuestaServicioService);
    expect(service).toBeTruthy();
  });
});
