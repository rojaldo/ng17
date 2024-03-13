import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
