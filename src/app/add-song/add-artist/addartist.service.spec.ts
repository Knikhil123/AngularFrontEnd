import { TestBed } from '@angular/core/testing';

import { AddartistService } from './addartist.service';

describe('AddartistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddartistService = TestBed.get(AddartistService);
    expect(service).toBeTruthy();
  });
});
