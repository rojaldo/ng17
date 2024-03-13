import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodInfoComponent } from './apod-info.component';
import { ApodService } from '../../../services/apod.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApodInfoComponent', () => {
  let component: ApodInfoComponent;
  let fixture: ComponentFixture<ApodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodInfoComponent],
      providers: [ApodService, HttpClient, HttpHandler]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
