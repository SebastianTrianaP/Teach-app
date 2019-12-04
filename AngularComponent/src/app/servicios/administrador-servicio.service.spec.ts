import { TestBed } from '@angular/core/testing';

import { AdministradorServicioService } from './administrador-servicio.service';

describe('UsuarioServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministradorServicioService = TestBed.get(AdministradorServicioService);
    expect(service).toBeTruthy();
  });
});
