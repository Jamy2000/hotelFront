import { TestBed } from '@angular/core/testing';

import { ModoClienteService } from './modo-cliente.service';

describe('ModoClienteService', () => {
  let service: ModoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
