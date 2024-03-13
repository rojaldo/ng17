import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BeersService', () => {
  let service: BeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeersService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(BeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
