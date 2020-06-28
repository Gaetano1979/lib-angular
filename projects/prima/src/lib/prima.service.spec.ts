import { TestBed } from '@angular/core/testing';

import { PrimaService } from './prima.service';

describe('PrimaService', () => {
  let service: PrimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
