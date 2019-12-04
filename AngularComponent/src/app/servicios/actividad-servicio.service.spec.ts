import { TestBed } from '@angular/core/testing';

import { ActividadServicioService } from './actividad-servicio.service';

describe('ActividadServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadServicioService = TestBed.get(ActividadServicioService);
    expect(service).toBeTruthy();
  });
});
