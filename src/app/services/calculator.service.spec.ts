import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
      
    service.handleNumber(1);
    service.handleSymbol('+');
    service.handleNumber(2);
    service.handleSymbol('=');
    service.display$.subscribe((value) => {
      expect(value).toBe('1+2=3');
    });

    });

    it ('should divide by zero', () => {
      service.handleNumber(1);
      service.handleSymbol('/');
      service.handleNumber(0);
      service.handleSymbol('=');
      service.display$.subscribe((value) => {
        expect(value).toBe('1/0=Infinity');
      });
    });

    it ('divide 0 by 0 with Nan as result', () => {
      service.handleNumber(0);
      service.handleSymbol('/');
      service.handleNumber(0);
      service.handleSymbol('=');
      service.display$.subscribe((value) => {
        expect(value).toBe('0/0=NaN');
      });
    });

    it ('sum 0.1 and 0.2', () => {
      // private property firstFigure is equal to 0.1
      service['firstFigure'] = 0.1;
      // private property operator is equal to '+'
      service['operator'] = '+';
      // private property secondFigure is equal to 0.2
      service['secondFigure'] = 0.2;
      // call private method calculate
      const result = service['_calculate']();
      // private property result is equal to 0.3
      expect(result).toBeCloseTo(0.3, 8);
    });
  
});
