import { TestBed } from '@angular/core/testing';

import { ModeldataService } from './modeldata.service';

describe('ModeldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeldataService = TestBed.get(ModeldataService);
    expect(service).toBeTruthy();
  });
});
