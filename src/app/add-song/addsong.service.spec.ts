import { TestBed } from '@angular/core/testing';

import { AddsongService } from './addsong.service';

describe('AddsongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddsongService = TestBed.get(AddsongService);
    expect(service).toBeTruthy();
  });
});
