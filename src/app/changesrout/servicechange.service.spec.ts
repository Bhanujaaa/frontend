import { TestBed } from '@angular/core/testing';

import { ServicechangeService } from './servicechange.service';

describe('ServicechangeService', () => {
  let service: ServicechangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicechangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
