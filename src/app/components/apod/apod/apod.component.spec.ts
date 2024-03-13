import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodComponent } from './apod.component';
import { ApodService } from '../../../services/apod.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodComponent],
      providers: [ApodService, HttpClient, HttpHandler]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
