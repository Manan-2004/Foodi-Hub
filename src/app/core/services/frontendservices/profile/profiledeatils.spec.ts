import { TestBed } from '@angular/core/testing';

import { Profiledeatils } from './profiledeatils';

describe('Profiledeatils', () => {
  let service: Profiledeatils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Profiledeatils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
