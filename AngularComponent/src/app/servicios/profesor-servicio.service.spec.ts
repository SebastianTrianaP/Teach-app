import { TestBed } from '@angular/core/testing';

import { ProfesorServicioService } from './profesor-servicio.service';

describe('ProfesorServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesorServicioService = TestBed.get(ProfesorServicioService);
    expect(service).toBeTruthy();
  });
});
