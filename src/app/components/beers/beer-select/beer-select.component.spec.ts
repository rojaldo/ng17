import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSelectComponent } from './beer-select.component';

describe('BeerSelectComponent', () => {
  let component: BeerSelectComponent;
  let fixture: ComponentFixture<BeerSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
