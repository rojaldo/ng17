import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';

xdescribe('BeersService', () => {
  let service: BeersService;

  let beers: Beer[] = []


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeersService, HttpClient, HttpHandler, provideHttpClient()]
    });
    service = TestBed.inject(BeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get beers', () => {
    service.getBeers();
    service.beers$.subscribe((value) => {
      console.log('BEERS: ' + value);
      
      beers = value;
      expect(beers.length).toBeGreaterThan(0);
    },
    (error) => {
      console.log('ERROR: ' + error);
    }
    );
  });
});
