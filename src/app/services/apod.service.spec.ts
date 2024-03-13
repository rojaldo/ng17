import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApodService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApodService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
