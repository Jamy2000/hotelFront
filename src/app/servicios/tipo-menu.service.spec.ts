import { TestBed } from '@angular/core/testing';

import { TipoMenuService } from './tipo-menu.service';

describe('TipoMenuService', () => {
  let service: TipoMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
