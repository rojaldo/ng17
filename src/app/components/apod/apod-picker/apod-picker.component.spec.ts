import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodPickerComponent } from './apod-picker.component';

describe('ApodPickerComponent', () => {
  let component: ApodPickerComponent;
  let fixture: ComponentFixture<ApodPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
