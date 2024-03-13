import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { beersGuard } from './beers.guard';

describe('beersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => beersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
