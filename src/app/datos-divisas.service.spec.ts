import { TestBed, inject } from '@angular/core/testing';

import { DatosDivisasService } from './datos-divisas.service';

describe('DatosDivisasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosDivisasService]
    });
  });

  it('should be created', inject([DatosDivisasService], (service: DatosDivisasService) => {
    expect(service).toBeTruthy();
  }));
});
