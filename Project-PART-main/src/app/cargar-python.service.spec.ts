import { TestBed } from '@angular/core/testing';

import { CargarPythonService } from './cargar-python.service';

describe('CargarPythonService', () => {
  let service: CargarPythonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarPythonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
